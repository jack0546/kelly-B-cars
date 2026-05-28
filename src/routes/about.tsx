import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Award, Globe, Wrench, HeartHandshake, Sparkles } from "lucide-react";
import showroom from "@/assets/showroom.jpg";
import { Reveal, Counter } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kelly B Motors — Luxury Car Dealer in Accra" },
      { name: "description", content: "Ghana's trusted source for premium imported vehicles. Discover our story, values, and white-glove service standard." },
      { property: "og:title", content: "About — Kelly B Motors" },
      { property: "og:description", content: "Ghana's trusted source for premium imported vehicles." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-32 md:pt-44 pb-16 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal><span className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Story</span></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            Crafting Ghana's most <span className="italic text-gold">trusted</span> luxury motoring experience.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            Founded with a singular purpose — to give discerning Ghanaian drivers access to the world's finest vehicles with the integrity, expertise, and care they deserve.
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img src={showroom} alt="Showroom" width={1600} height={900} loading="lazy"
            className="rounded-2xl border border-border shadow-[var(--shadow-luxe)]" />
        </Reveal>
        <div>
          <Reveal><span className="text-[11px] uppercase tracking-[0.3em] text-gold">Why Choose Us</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-3 font-display text-4xl">Built on trust. Driven by excellence.</h2></Reveal>
          <div className="mt-8 space-y-5">
            {[
              { icon: Shield, t: "Verified Quality", d: "Every vehicle passes a 150-point inspection before delivery." },
              { icon: Globe, t: "Direct Imports", d: "Sourced from trusted partners in the UK, US, Germany and Japan." },
              { icon: HeartHandshake, t: "Honest Pricing", d: "Transparent quotes — no hidden fees, ever." },
              { icon: Wrench, t: "Lifetime Support", d: "Our service partners care for your car long after delivery." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={0.15 + i * 0.07}>
                <div className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-xl glass grid place-items-center text-gold"><f.icon size={20} /></span>
                  <div>
                    <h3 className="text-lg">{f.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24 md:mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { v: 12, s: "+", l: "Years Driving Trust" },
            { v: 850, s: "+", l: "Cars Delivered" },
            { v: 63, s: "+", l: "5★ Reviews" },
            { v: 24, s: "/7", l: "WhatsApp Support" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="glass-strong rounded-2xl p-7 text-center">
                <p className="font-display text-4xl md:text-5xl text-gold"><Counter to={s.v} suffix={s.s} /></p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24 md:mt-32">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Our Services</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Beyond the sale.</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Globe, t: "Car Importation", d: "Source any model from any market — we handle logistics, shipping and clearing." },
            { icon: Award, t: "Premium Sales", d: "A curated showroom of vetted, ready-to-drive luxury vehicles." },
            { icon: Sparkles, t: "Concierge Delivery", d: "Detailed, fueled and delivered to your home or office in Accra." },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="luxe-card p-7 h-full">
                <s.icon className="text-gold" size={26} />
                <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24 mb-12 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Ready to experience the difference?</h2>
          <Link to="/inventory" className="btn-gold mt-6">Browse Our Collection</Link>
        </Reveal>
      </section>
    </>
  );
}
