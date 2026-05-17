// Server-only helper — sends lead notification + confirmation emails via Resend.

type Lead = {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const NOTIFY_TO = "contact@svnglobal.com";
const FROM = "SVN Global Consulting <onboarding@resend.dev>";

export async function sendLeadEmails(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping email notifications.");
    return;
  }

  const internalHtml = `
    <h2 style="color:#1a2e4a">New consultation request — svnglobal.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(lead.company || "—")}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
    <p><strong>Message:</strong></p>
    <p style="background:#f5f5f5;padding:12px;border-radius:6px">${escapeHtml(lead.message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#888;font-size:12px">Lead ID: ${lead.id}</p>
  `;

  const confirmationHtml = `
    <p>Dear ${escapeHtml(lead.name)},</p>
    <p>Thank you for reaching out to <strong>SVN Global Consulting</strong>. We have received your enquiry regarding <em>${escapeHtml(lead.service)}</em>.</p>
    <p>A senior advisor will get back to you within one business day.</p>
    <p>Warm regards,<br/><strong>SVN Global Consulting</strong><br/>Ahmedabad</p>
  `;

  await Promise.all([
    sendEmail(apiKey, {
      from: FROM,
      to: NOTIFY_TO,
      subject: `New lead: ${lead.name} — ${lead.service}`,
      html: internalHtml,
    }),
    sendEmail(apiKey, {
      from: FROM,
      to: lead.email,
      subject: "We received your consultation request — SVN Global Consulting",
      html: confirmationHtml,
    }),
  ]);
}

async function sendEmail(
  apiKey: string,
  payload: { from: string; to: string; subject: string; html: string },
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error ${res.status}: ${text}`);
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
