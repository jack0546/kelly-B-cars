import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Hello Kelly B Motors, I'd like more information.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 18 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full grid place-items-center text-white pulse-glow"
      style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
