import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

type Props = {
  carName?: string;
  subject?: string;
  compact?: boolean;
};

export function InquiryForm({ carName, subject = "General inquiry", compact }: Props) {
  const [state, handleSubmit] = useForm('mqewdvrn');

  return (
    <form onSubmit={handleSubmit} className={`relative ${compact ? "" : "glass-strong p-6 md:p-8 rounded-2xl"}`}>
      <input type="hidden" name="_subject" value={`[Kelly B Motors] ${subject}${carName ? ` — ${carName}` : ""}`} />
      {carName && <input type="hidden" name="car" value={carName} />}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Field label="Full Name" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive mt-1" />
        </div>
        <div>
          <Field label="Phone" name="phone" type="tel" required />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-sm text-destructive mt-1" />
        </div>
        <div className="sm:col-span-2">
          <Field label="Email" name="email" type="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive mt-1" />
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Car of Interest"
            name="car_interested"
            defaultValue={carName ?? ""}
          />
          <ValidationError prefix="Car" field="car_interested" errors={state.errors} className="text-sm text-destructive mt-1" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition"
            placeholder="Tell us how we can help..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive mt-1" />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-gold mt-6 w-full disabled:opacity-60"
      >
        {state.submitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
        {state.submitting ? "Sending..." : "Send Inquiry"}
      </button>

      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-gold"
          >
            <span className="w-6 h-6 grid place-items-center rounded-full bg-gradient-gold text-primary-foreground"><Check size={14} /></span>
            Thank you! A specialist will contact you shortly.
          </motion.div>
        )}
        {state.errors && state.errors.length > 0 && !state.succeeded && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-destructive">
            Could not send inquiry. Please check your details or WhatsApp us.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label, name, type = "text", required, className = "", defaultValue,
}: {
  label: string; name: string; type?: string; required?: boolean; className?: string; defaultValue?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-gold transition"
      />
    </div>
  );
}
