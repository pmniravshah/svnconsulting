import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog | SVN Global Consulting" },
      { name: "description", content: "Expert insights on virtual CFO, corporate finance, tax advisory, transaction structuring and business growth." },
      { property: "og:title", content: "Insights — SVN Global Consulting" },
      { property: "og:description", content: "Finance insights for founders, CFOs, and boards." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "When should a growing business hire a Virtual CFO?",
    excerpt: "Five clear signals that signal it's time to bring strategic financial leadership into your business — without the cost of a full-time hire.",
    category: "Virtual CFO",
    date: "May 2026",
  },
  {
    title: "Working capital is the silent killer — and the silent multiplier.",
    excerpt: "How disciplined receivables, payables and inventory management can release millions in trapped cash for SMEs.",
    category: "FP&A",
    date: "April 2026",
  },
  {
    title: "Pitch decks that actually raise capital",
    excerpt: "What institutional investors look for beneath the slides — and how to build a fundraising story that closes.",
    category: "Transaction Advisory",
    date: "March 2026",
  },
  {
    title: "GST compliance for exporters: a 2026 playbook",
    excerpt: "Refund cycles, LUTs, and the nuances every export business should master to stay cash-positive.",
    category: "Tax Advisory",
    date: "February 2026",
  },
  {
    title: "Building investor-ready data rooms",
    excerpt: "The architecture, hygiene, and storytelling that turn due diligence from a hurdle into a closing accelerator.",
    category: "M&A",
    date: "January 2026",
  },
  {
    title: "Margin engineering for manufacturers",
    excerpt: "Three frameworks to systematically improve EBITDA margins by 200-400 bps without disrupting operations.",
    category: "Strategy",
    date: "December 2025",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Finance Intelligence for Founders & Boards"
        subtitle="Sharp, practical perspectives from our advisory practice — written for leaders who treat finance as strategy."
      />

      <section className="container-pro py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-border bg-background hover:shadow-elegant transition-all">
              <div className="h-48 bg-gradient-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.74 0.13 80 / 0.6), transparent 60%)",
                }} />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs uppercase tracking-widest text-gold bg-navy/80 px-3 py-1 rounded-full">{p.category}</span>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} /> {p.date}
                </div>
                <h2 className="font-display text-xl font-semibold text-navy group-hover:text-gold transition-colors leading-snug">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <button className="mt-5 inline-flex items-center gap-1 text-sm text-navy font-medium hover:text-gold transition-colors">
                  Read insight <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
