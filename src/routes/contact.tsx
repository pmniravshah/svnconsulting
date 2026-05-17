import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Phone, Send, Download } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SVN Global Consulting | Schedule Free Consultation" },
      { name: "description", content: "Schedule a free consultation. Premium financial advisory in Ahmedabad. Email, phone and on-site meetings available." },
      { property: "og:title", content: "Contact — SVN Global Consulting" },
      { property: "og:description", content: "Let's build financial excellence together." },
    ],
  }),
  component: Contact,
});

const services = [
  "Virtual CFO Services",
  "FP&A Excellence",
  "Working Capital Management",
  "Transaction Advisory",
  "Tax Advisory & Compliance",
  "Audit & Assurance",
  "Secretarial Compliance",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setServerError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, source: "contact-page" }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setServerError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Financial Excellence Together"
        subtitle="Speak with our senior advisors. Every conversation begins with listening."
      />

      <section className="container-pro py-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl bg-gradient-navy text-navy-foreground p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-4">
                  <MapPin className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-gold uppercase text-xs tracking-widest mb-1">Office</p>
                    <p className="text-white/85 leading-relaxed">C 601 Titanium City Centre,<br />Prahladnagar, Ahmedabad</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-gold uppercase text-xs tracking-widest mb-1">Phone</p>
                    <a href="tel:+917048456589" className="text-white/85 hover:text-gold">+91 7048456589</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-gold shrink-0" size={20} />
                  <div>
                    <p className="text-gold uppercase text-xs tracking-widest mb-1">Email</p>
                    <a href="mailto:contact@svnglobal.com" className="text-white/85 hover:text-gold">contact@svnglobal.com</a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="block p-6 rounded-xl border border-border hover:border-gold transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                  <Download className="text-navy" size={20} />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-navy">Company Brochure</p>
                  <p className="text-sm text-muted-foreground">Download our capabilities deck (PDF)</p>
                </div>
              </div>
            </a>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-secondary/60 border border-border"
            >
              <p className="text-xs uppercase tracking-widest text-gold mb-2">Calendly</p>
              <p className="font-display text-lg font-semibold text-navy">Book a 30-min slot directly</p>
              <p className="text-sm text-muted-foreground mt-1">Pick a time that suits you — instant confirmation.</p>
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-background p-8 md:p-10 shadow-card">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mb-6">
                    <Send className="text-navy" size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-navy">Thank you.</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Your message has reached our team. A senior advisor will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field name="name" label="Name *" error={errors.name} />
                    <Field name="company" label="Company" error={errors.company} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field name="email" label="Email *" type="email" error={errors.email} />
                    <Field name="phone" label="Phone *" type="tel" error={errors.phone} />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Service Interested In *</label>
                    <select name="service" defaultValue="" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                      <option value="" disabled>Select a service…</option>
                      {services.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message *</label>
                    <textarea name="message" rows={5} maxLength={1000} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none" />
                    {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>
                  {serverError && (
                    <p className="text-sm text-destructive">{serverError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-7 py-4 text-sm font-semibold hover:bg-gradient-gold hover:text-gold transition-all shadow-elegant disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Schedule Free Consultation"} <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-pro pb-24">
        <div className="rounded-xl overflow-hidden border border-border shadow-card">
          <iframe
            title="SVN Global Consulting Office Location"
            src="https://www.google.com/maps?q=Titanium+City+Centre+Prahladnagar+Ahmedabad&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
