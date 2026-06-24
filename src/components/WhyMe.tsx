import { motion } from "motion/react";
import { ShieldCheck, Target, Zap, Milestone, Layers, Network } from "lucide-react";

export default function WhyMe() {
  const pillars = [
    { icon: <Target className="w-5 h-5 text-brand-gold" />, label: "Revenue Growth" },
    { icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />, label: "Pipeline Predictability" },
    { icon: <Milestone className="w-5 h-5 text-brand-gold" />, label: "Market Expansion" },
    { icon: <Zap className="w-5 h-5 text-brand-gold" />, label: "Commercial Efficiency" },
    { icon: <Layers className="w-5 h-5 text-brand-gold" />, label: "Scalable Systems" },
    { icon: <Network className="w-5 h-5 text-brand-gold" />, label: "Long-Term Advantage" },
  ];

  return (
    <section id="why-me" className="py-24 bg-[#0a0a0c] relative overflow-hidden z-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Dynamic background light flares */}
      <div className="absolute right-[-10%] top-[20%] w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[450px] h-[450px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: THE CORE MANIFESTO STATEMENT */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-brand-gold tracking-[0.25em] uppercase">
              03 / Manifesto
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl mt-3 text-white tracking-tight uppercase leading-none">
              Why Companies <br />Work With Me
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mt-4 mb-8" />

            {/* Main Manifesto Statement */}
            <blockquote className="relative">
              <span className="absolute -left-6 -top-10 font-display font-black text-zinc-900 text-9xl select-none leading-none z-0">
                “
              </span>
              <p className="relative z-10 font-display font-extrabold text-2xl sm:text-4xl text-zinc-100 leading-tight tracking-tight max-w-2xl">
                Most advisors focus on <span className="text-zinc-500 line-through decoration-red-500/50 decoration-2">activities</span>. <br />
                I focus exclusively on <span className="text-gold-gradient italic">outcomes</span>.
              </p>
            </blockquote>

            <p className="text-zinc-400 text-sm sm:text-base mt-8 leading-relaxed font-sans font-light max-w-xl">
              The goal is not simply to increase sales. The goal is to build a business capable of generating predictable, scale-invariant revenue at speed. I construct the engines that sustain competitive superiority.
            </p>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE PILLARS GRID */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-xl relative border border-white/10 bg-brand-card/80">
              
              {/* Gold rim accent glowing line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />
              
              <h3 className="font-mono text-xs text-brand-gold tracking-widest uppercase mb-6 font-bold">
                CORE FOCUS METRICS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-3.5 p-3.5 rounded-lg bg-zinc-950 border border-white/5 hover:border-brand-gold/30 hover:bg-zinc-900/40 transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-2 bg-brand-gold/10 rounded border border-brand-gold/20 shrink-0">
                      {pillar.icon}
                    </div>
                    <span className="font-sans font-semibold text-zinc-200 text-xs sm:text-sm tracking-tight">
                      {pillar.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Mini watermark logo signature inside why me */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase block">REVENUE LEADERSHIP</span>
                  <span className="font-display font-bold text-xs text-zinc-300">SYSTEMIC & REPEATABLE</span>
                </div>
                <div className="font-mono text-[10px] text-zinc-500 border border-white/10 px-2 py-0.5 rounded">
                  CRO-GTM-v1.4
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
