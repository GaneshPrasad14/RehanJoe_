import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../types";
import { Plus, Minus, ArrowRight, Check, TrendingUp } from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Growth visualization image path
  const graphicUrl = "/growth_visualization.png";

  return (
    <section id="services" className="py-24 bg-brand-dark border-t border-white/5 relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Visual glowing grid dots in bg */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: PHILOSOPHY & ILLUSTRATION */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="font-mono text-xs text-brand-blue tracking-[0.25em] uppercase">
              02 / Capabilities
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl mt-3 text-white tracking-tight uppercase">
              Core Advisory Services
            </h2>
            <div className="h-0.5 w-16 bg-brand-blue mt-4 mb-6" />
            <p className="text-zinc-400 text-sm sm:text-base font-sans font-light leading-relaxed mb-8">
              I do not trade in bulk reports, theoretical decks, or generic growth playbooks. My solutions are structured operational frameworks built directly into your CRM, sales channels, and corporate systems to persist long after our engagement concludes.
            </p>

            {/* Graphic Illustration Box */}
            <div className="relative rounded-xl overflow-hidden glass-card p-3 group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-gold opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              <div className="relative aspect-[16/10] bg-zinc-950 rounded-lg overflow-hidden border border-white/5">
                <img 
                  src={graphicUrl} 
                  alt="Revenue Growth Architecture Chart" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0"
                />
                
                {/* Visual Glass overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* Floating analytics indicators */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-blue" />
                    <span className="font-mono text-[10px] tracking-wider text-zinc-300 uppercase">SYSTEM ARCHITECTURE STATUS</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase font-semibold">● OPTIMIZED</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ACCORDION COMPONENT */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES.map((service, index) => {
              const isOpen = activeIndex === index;
              const isGold = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? isGold 
                        ? "bg-zinc-900/50 border-brand-gold/30 shadow-lg shadow-brand-gold-glow" 
                        : "bg-zinc-900/50 border-brand-blue/30 shadow-lg shadow-brand-blue-glow"
                      : "bg-zinc-900/20 border-white/5 hover:border-white/10 hover:bg-zinc-900/40"
                  }`}
                >
                  {/* Clickable Accordion Header */}
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className={`font-mono text-sm font-semibold shrink-0 ${
                        isOpen 
                          ? isGold ? 'text-brand-gold' : 'text-brand-blue'
                          : 'text-zinc-500'
                      }`}>
                        0{index + 1}
                      </span>
                      <h3 className={`font-display font-bold text-lg sm:text-2xl tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-zinc-300 hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="shrink-0 flex items-center gap-4">
                      {/* Metric Badge */}
                      <span className={`hidden sm:inline-block font-mono text-[10px] tracking-wider px-2.5 py-1 rounded border uppercase ${
                        isOpen
                          ? isGold 
                            ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/25' 
                            : 'bg-brand-blue/10 text-brand-blue border-brand-blue/25'
                          : 'bg-white/5 text-zinc-500 border-white/5'
                      }`}>
                        {service.metrics}
                      </span>
                      
                      {/* Icon Toggle */}
                      <div className={`p-1.5 rounded-full border transition-all duration-300 ${
                        isOpen 
                          ? isGold ? 'bg-brand-gold/15 border-brand-gold/30 text-brand-gold' : 'bg-brand-blue/15 border-brand-blue/30 text-brand-blue'
                          : 'bg-white/5 border-white/5 text-zinc-400'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-8 sm:px-8 sm:pb-8 border-t border-white/5 pt-6 bg-black/20">
                          {/* Core Description */}
                          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light mb-6">
                            {service.description}
                          </p>

                          {/* Detail Bullet List */}
                          <div className="flex flex-col gap-3">
                            <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase font-bold">
                              WHAT IS DELIVERED & CODIFIED
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                                  <Check className={`w-4.5 h-4.5 mt-0.5 shrink-0 ${
                                    isGold ? 'text-brand-gold' : 'text-brand-blue'
                                  }`} />
                                  <span className="leading-tight">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Quick Mobile Metric Fallback */}
                          <div className="mt-6 sm:hidden flex justify-end">
                            <span className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded border uppercase ${
                              isGold ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/25' : 'bg-brand-blue/10 text-brand-blue border-brand-blue/25'
                            }`}>
                              {service.metrics}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
