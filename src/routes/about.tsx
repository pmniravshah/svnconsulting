import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Award, Users, Layers, Target, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SVN Global Consulting | 20+ Years of Financial Leadership" },
      { name: "description", content: "Meet SVN Global Consulting — led by CA Vijaye Narwani (FCA, ACMA, CGMA, CPA, CISA). Strategic financial advisory in Ahmedabad and beyond." },
      { property: "og:title", content: "About SVN Global Consulting" },
      { property: "og:description", content: "20+ years of corporate finance leadership and business transformation." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Award, title: "Excellence", desc: "Boardroom-grade rigor in every engagement." },
  { icon: Users, title: "Partnership", desc: "We win when our clients win." },
  { icon: Target, title: "Outcomes", desc: "Measurable financial impact, not deliverables." },
  { icon: Layers, title: "Integrity", desc: "Independent counsel built on trust." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Empowering Businesses with Strategic Financial Leadership"
        subtitle="A trusted advisory partner for founders, boards, and CFOs navigating growth, transformation, and capital."
      />

      <section className="container-pro py-24 md:py-32">
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Our Story" title="Two Decades of Building Financial Excellence" />
            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
              <p>
                SVN Global Consulting was founded with a singular conviction: that ambitious businesses deserve access to world-class financial leadership — not just bookkeeping. For over 20 years, we have partnered with founders, family-owned enterprises, and growth-stage companies to architect the financial foundations of their next chapter.
              </p>
              <p>
                From our base in Ahmedabad, we serve clients across India and beyond, bringing institutional-grade frameworks, sector expertise, and a deeply personal advisory style.
              </p>
              <p>
                Our practice spans Virtual CFO services, FP&amp;A, transaction advisory, tax structuring, audit and assurance — delivered through a senior, multidisciplinary team that thinks like operators and acts like owners.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl bg-gradient-navy text-navy-foreground p-8 shadow-elegant">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Founder &amp; Lead Advisor</p>
              <h3 className="font-display text-3xl font-semibold">CA Vijaye Narwani</h3>
              <p className="mt-2 text-gold text-sm tracking-wider">FCA · ACMA · CGMA · CPA · CISA</p>
              <p className="mt-6 text-white/80 leading-relaxed text-sm">
                A globally certified chartered accountant with two decades of cross-border experience advising boards, leading transactions, and structuring complex financial decisions. Vijaye brings the rare combination of strategic vision and operational discipline.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-white/70">
                In strategic collaboration with <span className="text-gold font-medium">ARA &amp; Company Chartered Accountants</span>.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-pro">
          <SectionHeading center eyebrow="What We Stand For" title="Our Values" />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-xl bg-background border border-border text-center">
                <v.icon className="text-gold mx-auto mb-4" size={28} />
                <h3 className="font-display text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pro py-24">
        <SectionHeading eyebrow="Our Approach" title="Senior, Strategic, Stewardship-Driven" />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { n: "01", t: "Discover", d: "We immerse in your business model, financials, and growth ambitions." },
            { n: "02", t: "Architect", d: "We co-design strategy, structures, and operating cadences with leadership." },
            { n: "03", t: "Execute", d: "We embed alongside your team to deliver measurable financial outcomes." },
          ].map((s) => (
            <div key={s.n} className="border-l-2 border-gold pl-6">
              <div className="text-gold font-display text-3xl">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-navy text-navy-foreground px-7 py-4 text-sm font-semibold hover:bg-gradient-gold hover:text-gold-foreground transition-all shadow-elegant">
            <CheckCircle2 size={16} /> Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
