import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(2000),
  source: z.string().trim().max(255).optional(),
});

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "Validation failed", issues: parsed.error.issues }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        const data = parsed.data;
        const { data: inserted, error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name: data.name,
            company: data.company || null,
            email: data.email,
            phone: data.phone,
            service: data.service,
            message: data.message,
            source: data.source || "website",
          })
          .select("id")
          .single();

        if (error) {
          console.error("contact_submissions insert error", error);
          return new Response(
            JSON.stringify({ error: "Failed to save submission" }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }

        // Try sending notification + confirmation emails. Non-fatal if not yet configured.
        try {
          const { sendLeadEmails } = await import("@/lib/leads/notify.server");
          await sendLeadEmails({ id: inserted.id, ...data });
        } catch (e) {
          console.warn("Lead email notification skipped:", (e as Error).message);
        }

        return new Response(JSON.stringify({ ok: true, id: inserted.id }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
