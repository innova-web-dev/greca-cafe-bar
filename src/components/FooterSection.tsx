import { motion } from 'framer-motion';
import LiquidGlassButton from './LiquidGlassButton';
import { LocationMap } from './expand-map';

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer id="contacto" className="bg-green-dark text-cream py-20 px-5 pb-32">
      <div className="max-w-xl mx-auto">
        {/* Brand */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-terracotta text-2xl mb-2"
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            visítanos
          </p>
          <h2
            className="text-5xl font-light tracking-tight text-cream text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            GRECA
          </h2>
          <p
            className="text-cream/40 text-xs tracking-[0.5em] uppercase mt-2"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            CAFÉ BAR
          </p>
        </motion.div>

        {/* Map */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <LocationMap
            location="Calle 9 #1-68N, Roldanillo"
            coordinates="4.4168° N, 76.1514° W"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="space-y-5 mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <span className="text-terracotta mt-0.5">
              <MapPinIcon />
            </span>
            <p className="text-cream text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Calle 9 #1-68N esquina cementerio,
              <br />
              Roldanillo, Valle del Cauca, Colombia
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-terracotta mt-0.5">
              <ClockIcon />
            </span>
            <div className="text-cream text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>Lunes a Domingo 8:00 am a 10:00 pm</p>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <LiquidGlassButton
            variant="terracotta"
            href="https://wa.me/+573137071107"
            className="text-base px-8 py-4"
          >
            <WhatsAppIcon />
            Contáctanos / Haz tu Pedido
          </LiquidGlassButton>
          <p className="text-cream text-sm mt-4" style={{ fontFamily: 'var(--font-sans)' }}>
            +57 313 707 1107
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-cream text-center">
          <p className="text-cream text-[10px] tracking-[0.15em]" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2026 GRECA CAFÉ BAR — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
