import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground mt-24">
      <div className="container-pro py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div>
              <div className="font-display text-lg font-semibold">SVN Global</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Consulting</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Strategic financial consulting partner for ambitious businesses.
            Empowering growth through expert advisory.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/industries", label: "Industries" },
              { to: "/blog", label: "Insights" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Virtual CFO</li>
            <li>FP&amp;A Excellence</li>
            <li>Transaction Advisory</li>
            <li>Tax Advisory</li>
            <li>Audit &amp; Assurance</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /> C 601 Titanium City Centre, Prahladnagar, Ahmedabad</li>
            <li className="flex gap-3"><Phone size={16} className="text-gold shrink-0" /> +91 7048456589</li>
            <li className="flex gap-3"><Mail size={16} className="text-gold shrink-0" /> contact@svnglobal.com</li>
          </ul>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="inline-flex mt-4 h-9 w-9 items-center justify-center rounded-md border border-white/20 hover:border-gold hover:text-gold transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pro py-6 text-xs text-white/50 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} SVN Global Consulting. All rights reserved.</span>
          <span>In collaboration with ARA &amp; Company Chartered Accountants</span>
        </div>
      </div>
    </footer>
  );
}
