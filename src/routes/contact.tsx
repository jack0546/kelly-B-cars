import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { BRAND, waLink } from "@/lib/contact";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kelly B Motors — Visit Our Accra Showroom" },
      { name: "description", content: "Speak with a Kelly B Motors specialist. Call, WhatsApp or visit our Accra showroom for premium luxury vehicles in Ghana." },
      { property: "og:title", content: "Contact — Kelly B Motors" },
      { property: "og:description", content: "Get in touch with our team in Accra, Ghana." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal><span className="text-[11px] uppercase tracking-[0.3em] text-gold">Get in Touch</span></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02]">
            Let's talk <span className="italic text-gold">luxury</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 max-w-xl text-muted-foreground">Our team responds within minutes during business hours. Reach us however you prefer.</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Phone, title: "Call Us", value: BRAND.phone, href: `tel:${BRAND.phoneIntl}` },
          { icon: MessageCircle, title: "WhatsApp", value: BRAND.phoneIntl, href: waLink("Hello Kelly B Motors") },
          { icon: MapPin, title: "Visit Us", value: BRAND.location, href: "#map" },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="luxe-card p-6 flex items-start gap-4 h-full">
              <span className="w-12 h-12 rounded-xl bg-gradient-gold grid place-items-center text-primary-foreground"><c.icon size={20} /></span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.title}</p>
                <p className="mt-1 font-display text-xl">{c.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl">Send a message</h2>
          <p className="mt-2 text-muted-foreground">Tell us what you're looking for — we'll be in touch.</p>
          <div className="mt-6"><InquiryForm subject="Contact form" /></div>
        </Reveal>
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <div className="glass-strong p-7 rounded-2xl">
              <h3 className="font-display text-2xl">Business Hours</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-muted-foreground"><Clock size={14} className="inline mr-2 text-gold" />Mon — Fri</span><span>8:00 AM — 7:00 PM</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground"><Clock size={14} className="inline mr-2 text-gold" />Saturday</span><span>9:00 AM — 6:00 PM</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground"><Clock size={14} className="inline mr-2 text-gold" />Sunday</span><span>By appointment</span></li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
                <p className="flex gap-2"><Mail size={14} className="text-gold mt-0.5" /> {BRAND.email}</p>
                <div className="flex gap-3 pt-2">
                  <a aria-label="Instagram" href="#" className="w-10 h-10 grid place-items-center rounded-full glass hover:text-gold"><Instagram size={16} /></a>
                  <a aria-label="Facebook" href="#" className="w-10 h-10 grid place-items-center rounded-full glass hover:text-gold"><Facebook size={16} /></a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div id="map" className="rounded-2xl overflow-hidden border border-border h-[360px] glass-strong">
              <iframe
                src={BRAND.mapsEmbed}
                title="Kelly B Motors location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 mt-24 md:mt-32 mb-12">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">FAQ</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Questions, answered.</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {[
            { q: "Do you offer car financing?", a: "Yes — we partner with leading Ghanaian banks to offer flexible financing options. Contact us for tailored quotes." },
            { q: "Can you import a specific car for me?", a: "Absolutely. We import vehicles from the UK, US, Germany, Japan and the UAE on request. Typical delivery is 6–10 weeks." },
            { q: "Do you accept trade-ins?", a: "Yes — bring your current vehicle for a complimentary valuation and apply the value toward your next purchase." },
            { q: "Are all vehicles inspected?", a: "Every car passes a 150-point pre-delivery inspection. Full documentation is provided." },
            { q: "Do you deliver outside Accra?", a: "Yes, nationwide delivery is available. Contact us for a quote." },
          ].map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group glass rounded-xl px-5 py-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none">
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
