import { motion } from "motion/react";
import { CHALLENGES } from "../types";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function Challenges() {
  
  // Custom helper to map bento sizes to tailwind grid-column spans
  const getColSpan = (id: string, index: number) => {
    switch (id) {
      case "stall":
        return "lg:col-span-7 md:col-span-2";
      case "pipeline":
        return "lg:col-span-5 md:col-span-1";
      case "gtm":
        return "lg:col-span-5 md:col-span-1";
      case "pmf":
        return "lg:col-span-7 md:col-span-2";
      case "leaking":
        return "lg:col-span-4 md:col-span-1";
      case "forecasting":
        return "lg:col-span-4 md:col-span-1";
      case "people":
        return "lg:col-span-4 md:col-span-1";
      case "expansion":
        return "lg:col-span-12 md:col-span-2"; // Full-width bottom banner anchor
      default:
        return "lg:col-span-4 md:col-span-1";
    }
  };

  // Container motion presets for staggered entrance on scroll
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="challenges" className="py-24 bg-[#0a0a0c] relative z-10 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute right-10 top-1/4 w-[350px] h-[350px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs text-brand-gold tracking-[0.25em] uppercase">
            01 / Diagnostics
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl mt-3 text-white tracking-tight uppercase">
            The Challenges I Solve
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto mt-4" />
          <p className="text-zinc-400 text-sm sm:text-base mt-6 font-sans font-light">
            Revenue struggles are rarely symptoms of market forces; they are symptoms of operational misalignments. Hover over each bento node to preview the systemic growth outcome.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {CHALLENGES.map((item, index) => {
            const colSpan = getColSpan(item.id, index);
            const isGoldTheme = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-xl p-6 md:p-8 flex flex-col justify-between cursor-pointer ${colSpan} ${
                  isGoldTheme ? 'glass-card' : 'glass-card-blue'
                }`}
              >
                {/* Visual Glow overlay background element */}
                <div className={`absolute -right-20 -top-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${
                  isGoldTheme ? 'bg-brand-gold' : 'bg-brand-blue'
                }`} />

                {/* Card Header Tag */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                    {item.tag}
                  </span>
                  <span className={`font-mono text-[11px] font-bold ${
                    isGoldTheme ? 'text-brand-gold' : 'text-brand-blue'
                  }`}>
                    0{index + 1}
                  </span>
                </div>

                {/* Challenge Block */}
                <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className={`w-5 h-5 shrink-0 mt-0.5 ${
                      isGoldTheme ? 'text-brand-gold' : 'text-brand-blue'
                    } opacity-80`} />
                    <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Divider Line */}
                <div className="w-full h-[1px] bg-white/5 my-4 group-hover:bg-white/15 transition-colors duration-300" />

                {/* Outcome Block */}
                <div className="mt-2 transform group-hover:translate-y-0.5 transition-transform duration-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400 opacity-85 animate-pulse" />
                    <div>
                      <span className="font-mono text-[9px] text-emerald-400 tracking-wider uppercase block mb-0.5 font-bold">
                        SYSTEMIC OUTCOME
                      </span>
                      <p className="text-zinc-300 font-sans text-xs sm:text-sm font-medium">
                        {item.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner accent notch */}
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 opacity-20 group-hover:opacity-100 transition-opacity duration-300 ${
                  isGoldTheme ? 'border-brand-gold' : 'border-brand-blue'
                }`} />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
