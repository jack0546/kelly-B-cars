import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Fuel, Gauge, Calendar, ArrowUpRight } from "lucide-react";
import { Car, formatGHS } from "@/data/cars";

export function CarCard({ car, index = 0 }: { car: Car; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="luxe-card group"
    >
      <Link to="/cars/$id" params={{ id: car.id }} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={car.images[0]}
            alt={car.name}
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full glass-strong text-gold">
            {car.condition}
          </span>
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full glass-strong">
            {car.bodyType}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{car.brand}</p>
              <h3 className="text-xl mt-0.5 leading-tight">{car.name}</h3>
            </div>
            <span className="w-9 h-9 rounded-full grid place-items-center glass group-hover:bg-gradient-gold group-hover:text-primary-foreground transition-all">
              <ArrowUpRight size={16} />
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Calendar size={12} className="text-gold" />{car.year}</span>
            <span className="inline-flex items-center gap-1.5"><Gauge size={12} className="text-gold" />{car.mileage}</span>
            <span className="inline-flex items-center gap-1.5"><Fuel size={12} className="text-gold" />{car.fuel}</span>
          </div>

          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Price</span>
            <span className="font-display text-2xl text-gold">{formatGHS(car.priceGHS)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
