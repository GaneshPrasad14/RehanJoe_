import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CHALLENGES } from "../types";
import { AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

export default function Challenges() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="challenges" className="py-24 bg-[#0a0a0c] relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute right-10 top-1/4 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-brand-gold tracking-[0.25em] uppercase">
            01 / Diagnostics
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl mt-3 text-white tracking-tight uppercase">
            The Challenges I Solve
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-6 font-sans font-light">
            Revenue struggles are rarely symptoms of market forces; they are symptoms of operational misalignments. Expand each node to preview the systemic growth outcome.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {CHALLENGES.map((item, index) => {
            const isOpen = openId === item.id;
            const isGoldTheme = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className={`group border border-white/5 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? (isGoldTheme ? 'bg-zinc-900/80 border-brand-gold/30' : 'bg-zinc-900/80 border-brand-blue/30') : 'bg-zinc-950/50 hover:bg-zinc-900/50'}`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${
                      isGoldTheme ? 'text-brand-gold' : 'text-brand-blue'
                    }`}>
                      0{index + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                      {item.tag}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-white/5 mt-2">
                        <div className="flex items-start gap-3 mt-4">
                          <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                            isGoldTheme ? 'text-brand-gold' : 'text-brand-blue'
                          } opacity-80`} />
                          <p className="text-zinc-400 text-sm leading-relaxed font-sans font-light">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-3 mt-6 bg-black/40 p-4 rounded-lg border border-white/5">
                          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400 opacity-85" />
                          <div>
                            <span className="font-mono text-[10px] text-emerald-400 tracking-wider uppercase block mb-1 font-bold">
                              SYSTEMIC OUTCOME
                            </span>
                            <p className="text-zinc-300 font-sans text-sm font-medium">
                              {item.outcome}
                            </p>
                          </div>
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
    </section>
  );
}
