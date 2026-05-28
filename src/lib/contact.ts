export const BRAND = {
  name: "Kelly B Motors",
  tagline: "Drive Luxury. Drive Confidence.",
  phone: "020 949 1789",
  phoneIntl: "+233209491789",
  whatsapp: "233209491789",
  location: "MW6F+HP3, Accra, Ghana",
  mapsEmbed:
    "https://www.google.com/maps?q=MW6F%2BHP3+Accra+Ghana&output=embed",
  rating: 4.7,
  reviews: 63,
  email: "sales@kellybmotors.com",
};

// Replace with your real Formspree endpoint: https://formspree.io/f/xxxxxxx
export const FORMSPREE_ENDPOINT =
  (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/your-form-id";

export const waLink = (message: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
