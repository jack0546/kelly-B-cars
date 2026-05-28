import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Calendar, Gauge, Fuel, Cog, Settings, Palette, Check,
  MessageCircle, ArrowLeft, Phone,
} from "lucide-react";
import { useState } from "react";
import { CARS, getCar, formatGHS } from "@/data/cars";
import { CarCard } from "@/components/CarCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Reveal } from "@/components/Reveal";
import { waLink, BRAND } from "@/lib/contact";

export const Route = createFileRoute("/cars/$id")({
  loader: ({ params }) => {
    const car = getCar(params.id);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.car;
    if (!c) return { meta: [{ title: "Vehicle — Kelly B Motors" }] };
    return {
      meta: [
        { title: `${c.name} (${c.year}) — Kelly B Motors` },
        { name: "description", content: `${c.name} — ${c.engine}, ${c.mileage}. ${formatGHS(c.priceGHS)}. Available now at Kelly B Motors, Accra.` },
        { property: "og:title", content: `${c.name} — Kelly B Motors` },
        { property: "og:description", content: `${c.year} ${c.name} — ${formatGHS(c.priceGHS)}` },
        { property: "og:image", content: c.images[0] },
        { property: "og:url", content: `/cars/${c.id}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/cars/${c.id}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Product",
          name: c.name, image: c.images, description: c.description, brand: c.brand,
          offers: { "@type": "Offer", priceCurrency: "GHS", price: c.priceGHS, availability: "https://schema.org/InStock" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center">
        <h1 className="font-display text-5xl text-gold">Vehicle not found</h1>
        <Link to="/inventory" className="btn-gold mt-6">Back to Inventory</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen grid place-items-center px-4 text-center">
      <div>
        <p className="text-destructive">{error.message}</p>
        <button onClick={reset} className="btn-gold mt-4">Retry</button>
      </div>
    </div>
  ),
  component: CarDetail,
});

function CarDetail() {
  const { car } = Route.useLoaderData() as { car: import("@/data/cars").Car };
  const [active, setActive] = useState(0);
  const similar = CARS.filter((c) => c.id !== car.id && c.brand === car.brand).slice(0, 3);
  const fillerSimilar = CARS.filter((c) => c.id !== car.id).slice(0, 3 - similar.length);
  const recs = [...similar, ...fillerSimilar].slice(0, 3);

  const waMsg = `Hello Kelly B Motors, I'm interested in the ${car.year} ${car.name} (${formatGHS(car.priceGHS)}).`;

  return (
    <>
      <section className="pt-28 md:pt-32 pb-6 max-w-7xl mx-auto px-5 md:px-8">
        <Link to="/inventory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
          <ArrowLeft size={14} /> Back to Inventory
        </Link>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-10">
        {/* GALLERY */}
        <div>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-luxe)]"
          >
            <img src={car.images[active]} alt={car.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full glass-strong text-gold">{car.condition}</span>
          </motion.div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {car.images.map((img, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`aspect-[16/10] rounded-xl overflow-hidden border transition ${active === i ? "border-gold shadow-[var(--shadow-gold)]" : "border-border opacity-70 hover:opacity-100"}`}>
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INFO + STICKY CTA */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">{car.brand} · {car.bodyType}</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl leading-tight">{car.name}</h1>
            <p className="mt-3 text-muted-foreground">{car.year} · {car.color}</p>
            <p className="mt-6 font-display text-4xl text-gold">{formatGHS(car.priceGHS)}</p>
          </Reveal>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <Spec icon={Calendar} label="Year" value={String(car.year)} />
            <Spec icon={Gauge} label="Mileage" value={car.mileage} />
            <Spec icon={Fuel} label="Fuel" value={car.fuel} />
            <Spec icon={Settings} label="Trans" value={car.transmission} />
            <Spec icon={Cog} label="Engine" value={car.engine} />
            <Spec icon={Palette} label="Color" value={car.color} />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="btn-gold flex-1">
              <MessageCircle size={14} /> WhatsApp Inquiry
            </a>
            <a href={`tel:${BRAND.phoneIntl}`} className="btn-ghost flex-1">
              <Phone size={14} /> Call Dealer
            </a>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + FEATURES */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-20 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Overview</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">The story behind the machine.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{car.description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-strong rounded-2xl p-7">
            <h3 className="font-display text-2xl">Feature Highlights</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {car.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 w-5 h-5 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground shrink-0">
                    <Check size={12} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* INQUIRY FORMS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24 grid lg:grid-cols-2 gap-8">
        <Reveal>
          <h3 className="font-display text-3xl">Request Price</h3>
          <p className="mt-2 text-muted-foreground">Get tailored pricing, financing options and trade-in valuations.</p>
          <div className="mt-6"><InquiryForm carName={car.name} subject="Price request" /></div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="font-display text-3xl">Book Inspection</h3>
          <p className="mt-2 text-muted-foreground">Visit our Accra showroom or schedule a private viewing at your convenience.</p>
          <div className="mt-6"><InquiryForm carName={car.name} subject="Inspection booking" /></div>
        </Reveal>
      </section>

      {/* SIMILAR */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 mt-24">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">You may also like</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Similar Vehicles</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recs.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
        </div>
      </section>
    </>
  );
}

function Spec({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-3 text-center">
      <Icon size={16} className="mx-auto text-gold" />
      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm">{value}</p>
    </div>
  );
}
