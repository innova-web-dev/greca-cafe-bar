import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories, filterTabs, type FilterValue, type MenuCategory } from '../data/menuData';
import LiquidGlassButton from './LiquidGlassButton';

function CategoryCard({ category, index }: { category: MenuCategory; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14"
    >
      {/* Category Header with Image */}
      <div className="flex items-center gap-5 mb-8">
        <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.12)] ring-1 ring-brown-dark/6 flex-shrink-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            loading="lazy"
            width="112"
            height="112"
          />
        </div>
        <div>
          <h3
            className="text-green-dark text-3xl sm:text-4xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {category.title}
          </h3>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-10 h-[1.5px] bg-terracotta rounded-full" />
            <div className="w-1 h-1 rounded-full bg-terracotta/50" />
          </div>
        </div>
      </div>

      {/* Items — flat list */}
      {category.items && (
        <div className="space-y-0">
          {category.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
              className="flex items-baseline justify-between py-3 px-2 border-b border-brown-dark/6 last:border-b-0 group hover:bg-terracotta/[0.03] rounded-lg transition-colors"
            >
              <div className="flex-1 min-w-0 mr-4">
                <span
                  className="text-terracotta font-medium text-[15px] sm:text-base group-hover:text-terracotta-light transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.name}
                </span>
                {item.description && (
                  <span className="block text-brown-dark/50 text-xs mt-0.5 font-light">
                    {item.description}
                  </span>
                )}
              </div>
              <span
                className="text-brown-dark/80 font-medium text-sm whitespace-nowrap"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Items — subcategorized */}
      {category.subcategories && (
        <div className="space-y-10">
          {category.subcategories.map((sub) => (
            <div key={sub.title}>
              <h4
                className="text-green-dark/70 text-[11px] font-semibold tracking-[0.25em] uppercase mb-4 flex items-center gap-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="w-5 h-[1px] bg-terracotta/40 rounded-full" />
                {sub.title}
              </h4>
              <div className="space-y-0">
                {sub.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.02 }}
                    className="flex items-baseline justify-between py-3 px-2 border-b border-brown-dark/6 last:border-b-0 group hover:bg-terracotta/[0.03] rounded-lg transition-colors"
                  >
                    <div className="flex-1 min-w-0 mr-4">
                      <span
                        className="text-terracotta font-medium text-[15px] sm:text-base group-hover:text-terracotta-light transition-colors"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.name}
                      </span>
                      {item.description && (
                        <span className="block text-brown-dark/50 text-xs mt-0.5 font-light">
                          {item.description}
                        </span>
                      )}
                    </div>
                    <span
                      className="text-brown-dark/80 font-medium text-sm whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filtered = useMemo(() => {
    return activeFilter === 'all'
      ? menuCategories
      : menuCategories.filter((c) => c.id === activeFilter);
  }, [activeFilter]);

  return (
    <section id="menu" className="bg-cream min-h-screen pb-28 mt-[-1px]">
      {/* Storytelling intro */}
      <motion.div
        className="text-center pt-16 pb-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2
          className="text-terracotta text-5xl sm:text-5xl font-light tracking-tight text-balance"
          style={{ fontFamily: 'var(--font-cursive)' }}
        >
          Nuestra carta
        </h2>
        <p
          className="text-brown-dark/50 text-sm mt-3 max-w-xs mx-auto leading-relaxed font-light"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Cada plato hecho con amor y los mejores ingredientes de nuestra tierra
        </p>
      </motion.div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40">
        <div className="bg-cream/70 backdrop-blur-xl border-b border-brown-dark/5">
          <div className="max-w-xl mx-auto px-4 py-3 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2.5 w-max">
              {filterTabs.map((tab) => (
                <LiquidGlassButton
                  key={tab.value}
                  active={activeFilter === tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                >
                  {tab.label}
                </LiquidGlassButton>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-xl mx-auto px-5 pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {filtered.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
