// Server-only helper that sends lead notifications via Lovable Emails when
// a verified email domain has been configured. Until then it is a no-op so
// form submissions still succeed and leads are stored in the database.

type Lead = {
  id: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const NOTIFY_TO = "contact@svnglobal.com"; // internal recipient for new leads
const SENDER_DOMAIN = ""; // populated once email domain is verified, e.g. "notify.svnglobal.com"
const FROM_NAME = "SVN Global Consulting";

export async function sendLeadEmails(lead: Lead): Promise<void> {
  if (!SENDER_DOMAIN) {
    // Email infrastructure not configured yet — leads are stored in DB only.
    return;
  }

  const from = `${FROM_NAME} <noreply@${SENDER_DOMAIN}>`;

  const internalHtml = `
    <h2>New lead from svnglobal.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(lead.company || "-")}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(lead.message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#888;font-size:12px">Lead ID: ${lead.id}</p>
  `;

  const confirmationHtml = `
    <p>Dear ${escapeHtml(lead.name)},</p>
    <p>Thank you for reaching out to <strong>SVN Global Consulting</strong>. We have received your enquiry regarding <em>${escapeHtml(lead.service)}</em> and a senior advisor will respond within one business day.</p>
    <p>Warm regards,<br/>SVN Global Consulting<br/>Ahmedabad</p>
  `;

  // Implementation placeholder: when the email domain is verified, wire this
  // to the email queue (sendLovableEmail / enqueue_email RPC). Until then the
  // function exits early via the SENDER_DOMAIN check above.
  void internalHtml;
  void confirmationHtml;
  void from;
  void NOTIFY_TO;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
