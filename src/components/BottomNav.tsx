import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CoffeeIcon, UtensilsIcon, MessageCircleIcon } from './Icons';

const navItems = [
  { id: 'inicio', label: 'Inicio', Icon: CoffeeIcon },
  { id: 'menu', label: 'Menú', Icon: UtensilsIcon },
  { id: 'contacto', label: 'Contacto', Icon: MessageCircleIcon },
];

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [visible, setVisible] = useState(false);
  const [cursorProps, setCursorProps] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show nav after scrolling past hero
          setVisible(window.scrollY > window.innerHeight * 0.5);

          // Determine active section using a fast loop
          let minTop = Infinity;
          let closestId = navItems[0].id;

          for (let i = 0; i < navItems.length; i++) {
            const item = navItems[i];
            const el = document.getElementById(item.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const absTop = Math.abs(rect.top);
              if (absTop < minTop) {
                minTop = absTop;
                closestId = item.id;
              }
            }
          }

          setActiveSection(closestId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // We intentionally delay state setting using requestAnimationFrame
    // to avoid synchronous setState inside useEffect cascading re-renders
    const rafId = window.requestAnimationFrame(() => {
      const activeIndex = navItems.findIndex(item => item.id === activeSection);
      if (activeIndex !== -1) {
        const el = document.getElementById(`nav-btn-${navItems[activeIndex].id}`);
        if (el) {
          const { width } = el.getBoundingClientRect();
          setCursorProps({ left: el.offsetLeft, width, opacity: 1 });
        }
      }
    });
    return () => window.cancelAnimationFrame(rafId);
  }, [activeSection, visible]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          aria-label="Navegación principal"
        >
          <div 
            className="liquid-glass-nav relative flex items-center gap-1 rounded-full px-2 py-1.5"
            onMouseLeave={() => {
              const activeIndex = navItems.findIndex(item => item.id === activeSection);
              if (activeIndex !== -1) {
                const el = document.getElementById(`nav-btn-${navItems[activeIndex].id}`);
                if (el) {
                  const { width } = el.getBoundingClientRect();
                  setCursorProps({ left: el.offsetLeft, width, opacity: 1 });
                }
              }
            }}
          >
            {/* Sliding Cursor */}
            <motion.div
              animate={cursorProps}
              className="absolute z-0 h-[36px] rounded-full bg-terracotta/20 border border-terracotta/30"
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            />

            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const { Icon } = item;
              return (
                <motion.button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    const { width } = el.getBoundingClientRect();
                    setCursorProps({ left: el.offsetLeft, width, opacity: 1 });
                  }}
                  className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 ${isActive
                      ? 'text-terracotta'
                      : 'text-cream/50 hover:text-cream/80'
                    }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={`Ir a ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative">
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </span>
                  <span className="relative">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
