import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const Route = createFileRoute("/api/admin/leads")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const password = process.env.ADMIN_PASSWORD ?? "svnadmin2024";
        const auth = request.headers.get("x-admin-auth");
        if (auth !== password) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        const { data, error } = await supabaseAdmin
          .from("contact_submissions")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        return new Response(JSON.stringify({ leads: data ?? [] }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});
