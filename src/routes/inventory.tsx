import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { useMemo, useState } from "react";
import { CARS, formatGHS } from "@/data/cars";
import { CarCard } from "@/components/CarCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/inventory")({
  head: () => ({
    meta: [
      { title: "Inventory — Luxury Cars for Sale | Kelly B Motors" },
      { name: "description", content: "Browse our curated inventory of luxury vehicles for sale in Accra — Mercedes-Benz, BMW, Range Rover, Lexus, Audi and more." },
      { property: "og:title", content: "Inventory — Kelly B Motors" },
      { property: "og:description", content: "Luxury cars for sale in Accra, Ghana." },
      { property: "og:url", content: "/inventory" },
    ],
    links: [{ rel: "canonical", href: "/inventory" }],
  }),
  component: Inventory,
});

const BRANDS = ["All", ...Array.from(new Set(CARS.map((c) => c.brand)))];
const YEARS = ["All", ...Array.from(new Set(CARS.map((c) => String(c.year)))).sort().reverse()];
const SORTS = [
  { v: "featured", l: "Featured" },
  { v: "price-asc", l: "Price: Low to High" },
  { v: "price-desc", l: "Price: High to Low" },
  { v: "year-desc", l: "Newest First" },
];

function Inventory() {
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("All");
  const [year, setYear] = useState("All");
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [sort, setSort] = useState("featured");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let r = [...CARS];
    if (q) r = r.filter((c) => `${c.name} ${c.brand} ${c.model}`.toLowerCase().includes(q.toLowerCase()));
    if (brand !== "All") r = r.filter((c) => c.brand === brand);
    if (year !== "All") r = r.filter((c) => String(c.year) === year);
    r = r.filter((c) => c.priceGHS <= maxPrice);
    if (sort === "price-asc") r.sort((a, b) => a.priceGHS - b.priceGHS);
    if (sort === "price-desc") r.sort((a, b) => b.priceGHS - a.priceGHS);
    if (sort === "year-desc") r.sort((a, b) => b.year - a.year);
    return r;
  }, [q, brand, year, maxPrice, sort]);

  return (
    <>
      <section className="pt-32 md:pt-40 pb-10 max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold">The Inventory</span>
          <h1 className="mt-3 font-display text-5xl md:text-7xl leading-[1.02]">
            Find your <span className="italic text-gold">drive</span>.
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Every vehicle hand-selected and inspected. Use the filters below to narrow your search.
          </p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="glass-strong rounded-2xl p-5 md:p-6 grid md:grid-cols-[1.5fr_1fr_1fr_1.5fr_auto] gap-4 items-end">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Search</label>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Model, brand…"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-input/60 border border-border outline-none focus:border-gold text-sm" />
            </div>
          </div>
          <Select label="Brand" value={brand} onChange={setBrand} options={BRANDS} />
          <Select label="Year" value={year} onChange={setYear} options={YEARS} />
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Max Price · <span className="text-gold">{formatGHS(maxPrice)}</span>
            </label>
            <input type="range" min={400000} max={2500000} step={50000} value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[oklch(0.78_0.14_78)]" />
          </div>
          <div className="flex gap-2 items-center justify-end">
            <Select label="Sort" value={sort} onChange={setSort} options={SORTS.map((s) => s.v)} display={(v) => SORTS.find((s) => s.v === v)?.l ?? v} />
            <div className="flex gap-1 p-1 rounded-lg border border-border bg-input/40">
              <button onClick={() => setLayout("grid")} aria-label="Grid" className={`p-2 rounded ${layout === "grid" ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground"}`}><LayoutGrid size={14} /></button>
              <button onClick={() => setLayout("list")} aria-label="List" className={`p-2 rounded ${layout === "list" ? "bg-gradient-gold text-primary-foreground" : "text-muted-foreground"}`}><List size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        <div className="flex items-center justify-between mb-6 text-sm">
          <p className="text-muted-foreground"><SlidersHorizontal className="inline mr-2" size={14} />Showing <span className="text-foreground">{filtered.length}</span> of {CARS.length} vehicles</p>
        </div>

        {filtered.length === 0 ? (
          <div className="glass rounded-2xl p-16 text-center">
            <p className="font-display text-2xl text-gold">No matches.</p>
            <p className="mt-2 text-muted-foreground">Try widening your filters.</p>
          </div>
        ) : layout === "grid" ? (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
          </motion.div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((c, i) => (
              <motion.a key={c.id} href={`/cars/${c.id}`}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="luxe-card grid md:grid-cols-[280px_1fr_auto] gap-0 overflow-hidden group">
                <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                  <img src={c.images[0]} alt={c.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.brand} · {c.year}</p>
                  <h3 className="text-xl mt-1">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {[c.mileage, c.fuel, c.transmission, c.condition].map((x) => (
                      <span key={x} className="px-2.5 py-1 rounded-full glass">{x}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col items-end justify-between">
                  <span className="font-display text-2xl text-gold">{formatGHS(c.priceGHS)}</span>
                  <span className="btn-gold !py-2 !px-4">View</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function Select<T extends string>({
  label, value, onChange, options, display,
}: { label: string; value: T; onChange: (v: T) => void; options: T[] | string[]; display?: (v: string) => string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value as T)}
        className="w-full px-3 py-2.5 rounded-lg bg-input/60 border border-border outline-none focus:border-gold text-sm">
        {(options as string[]).map((o) => <option key={o} value={o}>{display ? display(o) : o}</option>)}
      </select>
    </div>
  );
}
