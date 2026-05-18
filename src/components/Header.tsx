import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="container-pro flex h-25 items-center justify-between">
        <Link to="/" className="flex items-center gap-5 group">
          <img src={logo} alt="SVN Global Consulting" className="h-25 w-auto" />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold text-navy tracking-tight">SVN Global</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Consulting</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative text-sm font-medium text-foreground/80 hover:text-navy transition-colors data-[status=active]:text-navy"
              activeProps={{ className: "text-navy after:scale-x-100" }}
            >
              <span className="relative">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-navy text-navy-foreground px-5 py-2.5 text-sm font-medium hover:bg-gradient-gold hover:text-gold transition-all duration-300 shadow-elegant"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-pro py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-navy text-navy-foreground px-5 py-3 text-sm font-medium"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
