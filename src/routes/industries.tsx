import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { industries } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | SVN Global Consulting" },
      { name: "description", content: "Sector expertise across manufacturing, real estate, fintech, oil & gas, exports, construction, shipping and trading." },
      { property: "og:title", content: "Industries — SVN Global Consulting" },
      { property: "og:description", content: "Sector-specific financial advisory for diverse industries." },
    ],
  }),
  component: Industries,
});

const details: Record<string, string> = {
  Manufacturing: "Cost engineering, capacity planning, working capital cycles, and capex evaluation tailored to plant economics.",
  Trading: "Margin optimization, credit policy design, inventory funding, and treasury controls for high-velocity businesses.",
  "Oil & Gas": "Project finance, hedging strategy, regulatory compliance, and joint-venture structuring.",
  "Real Estate": "Project funding, RERA compliance, JV structuring, and IRR-led project evaluations.",
  Fintech: "Unit economics, fundraising readiness, regulatory sandboxes, and investor-grade modeling.",
  Construction: "Project costing, milestone-based cash flow, vendor financing, and risk frameworks.",
  Shipping: "Asset financing, charter economics, foreign exchange exposure, and global tax structuring.",
  Exports: "FEMA compliance, export incentives, foreign currency hedging, and global expansion advisory.",
};

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector Intelligence That Travels Across Geographies"
        subtitle="We bring deep operational fluency to the industries we serve — translating sector nuance into financial advantage."
      />

      <section className="container-pro py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {industries.map((i) => (
            <div key={i.name} className="group p-10 rounded-xl border border-border hover:border-gold hover:shadow-elegant transition-all bg-background flex gap-6">
              <div className="h-14 w-14 rounded-lg bg-gradient-navy flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-all">
                <i.icon className="text-gold group-hover:text-navy" size={24} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-navy">{i.name}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{details[i.name]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pro pb-24">
        <div className="rounded-2xl bg-gradient-navy text-navy-foreground p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">
            Don't see your industry? We've likely worked in it.
          </h2>
          <p className="mt-4 text-white/75 max-w-xl mx-auto">
            Our advisory frameworks adapt to almost any sector. Let's explore how we can help yours.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold text-gold-foreground px-7 py-4 text-sm font-semibold">
            Talk to an Advisor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
