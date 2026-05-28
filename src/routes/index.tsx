import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, MessageCircle, Phone, Star, Shield, Award, Wrench,
  Sparkles, ChevronRight,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import showroom from "@/assets/showroom.jpg";
import { BRAND, waLink } from "@/lib/contact";
import { CARS } from "@/data/cars";
import { CarCard } from "@/components/CarCard";
import { Reveal, Counter } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelly B Motors — Luxury Cars in Accra, Ghana" },
      { name: "description", content: "Drive Luxury. Drive Confidence. Premium imported Mercedes-Benz, BMW, Range Rover, Lexus, Audi & Toyota vehicles in Accra." },
      { property: "og:title", content: "Kelly B Motors — Luxury Cars in Accra" },
      { property: "og:description", content: "Premium imported luxury vehicles in Accra, Ghana." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const brands = ["Mercedes-Benz", "BMW", "Range Rover", "Lexus", "Audi", "Toyota", "Porsche", "Land Rover"];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <img src={heroCar} alt="Luxury Mercedes-Benz" width={1920} height={1080} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <motion.div style={{ opacity }} className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold w-fit"
          >
            <Sparkles size={14} /> Accra · Est. Excellence
          </motion.span>

          <h1 className="mt-5 font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] max-w-4xl">
            {"Luxury Cars".split("").map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.04 }}
                className="inline-block">{c === " " ? "\u00A0" : c}</motion.span>
            ))}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.0 }} className="block text-gold italic">
              For Every Journey
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-6 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
            Find premium imported vehicles at unbeatable prices in Ghana — handpicked, inspected and delivered with white-glove care.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/inventory" className="btn-gold">Browse Cars <ArrowRight size={14} /></Link>
            <Link to="/contact" className="btn-ghost"><Phone size={14} /> Contact Dealer</Link>
            <a href={waLink("Hello Kelly B Motors, I'd like more information.")} target="_blank" rel="noreferrer" className="btn-ghost">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
          className="hidden lg:flex absolute right-8 bottom-24 flex-col gap-3 z-10">
          <StatCard label="Years of Trust" value={<><Counter to={12} />+</>} />
          <StatCard label="Cars Delivered" value={<><Counter to={850} />+</>} />
          <StatCard label="Rating" value={<>{BRAND.rating} <Star size={14} className="inline text-gold fill-[oklch(0.78_0.14_78)]" /></>} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </motion.div>
      </section>

      {/* MARQUEE BRANDS */}
      <section className="py-10 border-y border-border overflow-hidden">
        <div className="marquee-mask">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...brands, ...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display text-2xl md:text-3xl text-foreground/40 hover:text-gold transition">{b}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED INVENTORY */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">The Collection</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">Featured <span className="italic text-gold">Vehicles</span></h2>
            <p className="mt-4 max-w-lg text-muted-foreground">A curated selection of our most coveted machines, ready for inspection and delivery.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/inventory" className="btn-ghost">View All <ChevronRight size={14} /></Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARS.slice(0, 6).map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={showroom} alt="Kelly B Motors showroom" width={1600} height={900} loading="lazy"
              className="rounded-2xl border border-border shadow-[var(--shadow-luxe)]" />
          </Reveal>
          <div>
            <Reveal><span className="text-[11px] uppercase tracking-[0.3em] text-gold">Why Kelly B</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">An obsession with <span className="italic text-gold">excellence</span>.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                For over a decade we've connected Ghana's most discerning drivers with the world's finest machines. Every vehicle is sourced, inspected and prepared with one standard: ours.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Verified History", desc: "Every car comes with full inspection & documentation." },
                { icon: Award, title: "Award-Winning Service", desc: "4.7★ from 63+ verified customers." },
                { icon: Wrench, title: "After-Sale Care", desc: "Trusted service partners across Accra." },
                { icon: Sparkles, title: "White-Glove Delivery", desc: "Detailed and delivered to your door." },
              ].map((f, i) => (
                <Reveal key={f.title} delay={0.25 + i * 0.07}>
                  <div className="glass p-5 rounded-xl h-full">
                    <f.icon className="text-gold" size={22} />
                    <h3 className="mt-3 text-lg">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Testimonials</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Voices from our <span className="italic text-gold">clientele</span></h2>
          </div>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { name: "Kwame Mensah", role: "Entrepreneur, Accra", text: "From inquiry to delivery, the experience was flawless. My Range Rover arrived in showroom condition.", stars: 5 },
            { name: "Adwoa Boateng", role: "Lawyer, East Legon", text: "Kelly B Motors is the only dealer I trust. Honest pricing, real cars, and exceptional after-sale support.", stars: 5 },
            { name: "Yaw Asante", role: "MD, Tema", text: "I've bought three vehicles here. Every single time, they exceed expectations. True professionals.", stars: 5 },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass-strong p-7 rounded-2xl h-full">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} className="fill-[oklch(0.78_0.14_78)]" />)}
                </div>
                <p className="mt-5 leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-display text-lg">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-10 md:p-16 overflow-hidden text-center">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-gold opacity-20 blur-3xl rounded-full pointer-events-none" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold relative">Ready to drive?</span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl relative">Your next chapter starts<br/><span className="italic text-gold">behind the wheel.</span></h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3 relative">
              <Link to="/inventory" className="btn-gold">Explore Inventory</Link>
              <a href={waLink("Hello Kelly B Motors, I'd like to schedule a visit.")} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="glass-strong rounded-2xl px-5 py-4 min-w-[180px] float" style={{ animationDelay: `${Math.random()}s` }}>
      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      <p className="font-display text-2xl text-gold mt-1">{value}</p>
    </div>
  );
}
