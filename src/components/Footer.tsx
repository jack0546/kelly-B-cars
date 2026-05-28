import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { BRAND, waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-0 bg-radial-gold opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-gradient-gold grid place-items-center font-display text-primary-foreground font-bold">K</span>
            <span className="font-display text-xl">Kelly B <span className="text-gold">Motors</span></span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
            {BRAND.tagline} — Ghana's destination for premium imported vehicles, white-glove service, and lasting value.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="#" className="w-10 h-10 grid place-items-center rounded-full glass hover:text-gold transition"><Instagram size={16} /></a>
            <a aria-label="Facebook" href="#" className="w-10 h-10 grid place-items-center rounded-full glass hover:text-gold transition"><Facebook size={16} /></a>
            <a aria-label="WhatsApp" href={waLink("Hello Kelly B Motors")} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass hover:text-gold transition"><MessageCircle size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/inventory" className="hover:text-foreground">Inventory</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone size={14} className="mt-0.5 text-gold" /> <a href={`tel:${BRAND.phoneIntl}`}>{BRAND.phone}</a></li>
            <li className="flex gap-2"><MapPin size={14} className="mt-0.5 text-gold" /> {BRAND.location}</li>
            <li className="flex gap-2"><Mail size={14} className="mt-0.5 text-gold" /> {BRAND.email}</li>
          </ul>
        </div>
      </div>
      <div className="divider-gold" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Kelly B Motors. All rights reserved.</p>
        <p>Crafted with luxury in Accra, Ghana.</p>
      </div>
    </footer>
  );
}
