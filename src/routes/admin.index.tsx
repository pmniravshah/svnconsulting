import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin/")({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;
    sessionStorage.setItem("admin_auth", password);
    navigate({ to: "/admin/leads" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-border shadow-sm p-8 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-navy mb-1">Admin Access</h1>
        <p className="text-sm text-muted-foreground mb-6">Enter the admin password to view leads.</p>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className="rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy"
            autoFocus
          />
          {error && <p className="text-xs text-red-500">Incorrect password.</p>}
          <button
            type="submit"
            className="rounded-md bg-navy text-white px-4 py-2 text-sm font-medium hover:bg-navy/90 transition-colors"
          >
            View Leads
          </button>
        </form>
      </div>
    </div>
  );
}
