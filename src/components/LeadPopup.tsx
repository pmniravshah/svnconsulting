import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("svn_popup_seen")) return;
    const t = setTimeout(() => setOpen(true), 20000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("svn_popup_seen", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative max-w-md w-full bg-background rounded-xl shadow-elegant overflow-hidden">
        <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-navy" aria-label="Close">
          <X size={20} />
        </button>
        <div className="bg-gradient-navy h-2" />
        <div className="p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Limited Slots</p>
          <h3 className="text-2xl font-display font-semibold text-navy mb-3">
            Free 30-Minute Strategy Session
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Speak with our senior advisors and uncover financial growth opportunities tailored to your business.
          </p>
          <Link
            to="/contact"
            onClick={close}
            className="inline-flex w-full items-center justify-center rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-medium hover:bg-gradient-gold hover:text-gold-foreground transition-all"
          >
            Schedule My Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
