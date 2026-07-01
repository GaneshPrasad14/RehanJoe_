import { motion } from "motion/react";
import { ENGAGEMENTS } from "../types";
import { Calendar, ArrowRight, Shield, Zap, Sparkles, HelpCircle } from "lucide-react";

export default function Engagement() {
  
  // Icon picker helper based on ID
  const getIcon = (id: string) => {
    switch (id) {
      case "audit":
        return <HelpCircle className="w-5 h-5 text-brand-gold" />;
      case "gtm-sprint":
        return <Zap className="w-5 h-5 text-brand-blue" />;
      case "fractional-cro":
        return <Shield className="w-5 h-5 text-brand-gold animate-pulse" />;
      case "advisor":
        return <Sparkles className="w-5 h-5 text-brand-blue" />;
      default:
        return <Zap className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <section id="engagement" className="py-32 lg:py-48 bg-brand-dark relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Decorative vertical divider line behind elements for visual anchor */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/3 pointer-events-none hidden lg:block" />

      <div className="w-full max-w-7xl mx-auto relative z-20">
        
        {/* Header Block */}
        <div className="mb-20 lg:mb-28 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-blue tracking-[0.25em] uppercase">
            04 / Collaboration
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl mt-3 text-white tracking-tight uppercase break-words">
            Engagement Options
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-6 font-sans font-light">
            Whether you need rapid tactical realignment or multi-quarter strategic executive steering, select a deployment mode designed for immediate impact.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          {ENGAGEMENTS.map((item, index) => {
            const isGold = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full bg-brand-card/70 border cursor-pointer ${
                  isGold 
                    ? 'border-white/5 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold-glow' 
                    : 'border-white/5 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue-glow'
                } transition-all duration-300`}
                onClick={() => {
                  const element = document.getElementById("footer-cta");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {/* Decorative Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl pointer-events-none ${
                  isGold ? 'from-brand-gold to-transparent' : 'from-brand-blue to-transparent'
                }`} />

                {/* Card Top */}
                <div>
                  {/* Category Pill Tag & Index */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`font-mono text-[9px] tracking-widest px-2.5 py-1 rounded border font-semibold ${
                      isGold 
                        ? 'bg-brand-gold/10 text-brand-gold border-brand-gold/25' 
                        : 'bg-brand-blue/10 text-brand-blue border-brand-blue/25'
                    }`}>
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded border shrink-0 ${
                      isGold ? 'bg-brand-gold/5 border-brand-gold/15' : 'bg-brand-blue/5 border-brand-blue/15'
                    }`}>
                      {getIcon(item.id)}
                    </div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8 font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Duration and CTA action */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4">
                    <span className="flex items-center gap-1.5 font-bold uppercase text-[9px] tracking-widest text-zinc-400">
                      <Calendar className="w-3.5 h-3.5" />
                      DURATION
                    </span>
                    <span className="text-zinc-200 font-semibold">{item.duration}</span>
                  </div>

                  {/* Arrow prompt trigger */}
                  <div className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isGold ? 'text-brand-gold group-hover:text-[#ffdf91]' : 'text-brand-blue group-hover:text-[#90e0ff]'
                  }`}>
                    <span>Select Engagement</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
