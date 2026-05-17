import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Building2, MessageSquare, Calendar, Tag, LogOut } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string | null;
  created_at: string;
};

export const Route = createFileRoute("/admin/leads")({
  component: LeadsPage,
});

const ADMIN_PASSWORD = "svnadmin2024";

function LeadsPage() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [dbError, setDbError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_auth");
    if (stored !== ADMIN_PASSWORD) {
      navigate({ to: "/admin/" });
      return;
    }
    setAuthed(true);

    fetch("/api/admin/leads", {
      headers: { "x-admin-auth": stored },
    })
      .then((r) => r.json())
      .then((json) => {
        if (json.error) setDbError(json.error);
        else setLeads(json.leads ?? []);
      })
      .catch((e) => setDbError(String(e)))
      .finally(() => setLoading(false));
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("admin_auth");
    navigate({ to: "/admin/" });
  };

  if (!authed) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading leads…</p>
      </div>
    );
  }

  if (dbError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl border border-red-200 p-8 max-w-lg w-full">
          <h2 className="text-lg font-semibold text-red-600 mb-2">Database Error</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Could not load leads. Make sure the <code className="bg-gray-100 px-1 rounded">contact_submissions</code> table exists in your Supabase project.
          </p>
          <pre className="text-xs bg-gray-50 border border-border rounded p-3 overflow-auto">{dbError}</pre>
        </div>
      </div>
    );
  }

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.company ?? "").toLowerCase().includes(q) ||
      l.service.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-navy">Leads</h1>
            <p className="text-sm text-muted-foreground mt-1">{leads.length} total submissions</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search by name, email, company…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 rounded-md border border-input bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground text-sm">No leads found.</div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(lead.created_at).toLocaleDateString("en-IN", {
    day: "numeric", month: "short", year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-navy">{lead.name}</p>
          {lead.company && (
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <Building2 size={11} /> {lead.company}
            </p>
          )}
        </div>
        <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
          <Calendar size={11} /> {date}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 text-sm">
        <a href={`mailto:${lead.email}`} className="flex items-center gap-2 text-navy hover:underline">
          <Mail size={13} /> {lead.email}
        </a>
        <a href={`tel:${lead.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-navy">
          <Phone size={13} /> {lead.phone}
        </a>
      </div>

      <div className="flex items-center gap-1.5 text-xs">
        <Tag size={11} className="text-gold" />
        <span className="bg-gold/10 text-gold-foreground px-2 py-0.5 rounded-full font-medium">{lead.service}</span>
      </div>

      <div className="text-sm text-muted-foreground">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-navy hover:underline mb-1"
        >
          <MessageSquare size={11} /> {expanded ? "Hide message" : "Show message"}
        </button>
        {expanded && (
          <p className="bg-gray-50 rounded-md p-3 text-xs leading-relaxed whitespace-pre-wrap border border-border">
            {lead.message}
          </p>
        )}
      </div>

      {lead.source && (
        <p className="text-xs text-muted-foreground">Source: {lead.source}</p>
      )}
    </div>
  );
}
