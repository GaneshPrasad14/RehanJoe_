import { motion } from "motion/react";

export default function Marquee() {
  const items = [
    "Growth-stage technology companies",
    "Software companies",
    "AI and deep-tech businesses",
    "Product-led organizations",
    "Founder-led teams",
  ];

  // Duplicate items to ensure smooth loop
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <section id="marquee" className="relative py-12 bg-black border-y border-white/5 overflow-hidden z-10">
      {/* Absolute overlay fades for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {loopItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              {/* Star-like node separator */}
              <span className="text-sm font-mono text-brand-gold tracking-widest opacity-80 select-none">
                ✦
              </span>
              <span className="font-display font-bold text-lg md:text-2xl lg:text-3xl tracking-tight text-white/90 hover:text-brand-gold transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtext description below marquee */}
      <div className="mt-4 text-center">
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          ✦ Focus Areas / Target Segmentations ✦
        </span>
      </div>
    </section>
  );
}
