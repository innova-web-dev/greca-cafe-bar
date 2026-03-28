import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-green-dark overflow-hidden"
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta/5 blur-[120px]" />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top decorative border */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-terracotta" />
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-terracotta" />
        </motion.div>

        {/* Brand Lockup */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-terracotta/80 text-xl sm:text-2xl tracking-[0.55em] uppercase font-light mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            El café que
          </p>
          <p
            className="text-terracotta text-4xl sm:text-5xl mb-6"
            style={{ fontFamily: 'var(--font-cursive)' }}
          >
            necesitas
          </p>

          <div className="flex flex-col items-center leading-[0.85]">
            <span
              className="text-terracotta text-[80px] sm:text-[100px] font-light tracking-[0.02em] text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              GRECA
            </span>
            <span
              className="text-terracotta/80 text-xl sm:text-2xl tracking-[0.55em] uppercase font-light mt-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              CAFÉ
            </span>
            <span
              className="text-terracotta/80 text-sm tracking-[0.7em] uppercase font-light mt-2"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              BAR
            </span>
          </div>
        </motion.div>

        {/* Bottom decorative border */}
        <motion.div
          className="flex items-center gap-4 mt-10 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-terracotta" />
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta" />
          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-terracotta" />
        </motion.div>

        {/* Storytelling line */}
        <motion.p
          className="text-cream/30 text-xs tracking-[0.2em] uppercase max-w-[240px] leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Desliza para descubrir nuestra historia
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-terracotta/60 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
