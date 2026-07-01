import { useState, useRef, useEffect, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [activeBottleneck, setActiveBottleneck] = useState<number | null>(null);

  // Hidden causes of revenue slowing
  const bottlenecks = [
    {
      title: "Weak positioning.",
      details: "You look like every competitor in the market, forcing sales reps to compete on price rather than value."
    },
    {
      title: "Unclear go-to-market strategy.",
      details: "Acquisition channels are fragmented, customer capture is highly accidental, and CAC is skyrocketing."
    },
    {
      title: "Inconsistent pipeline.",
      details: "No automated engine feeds qualified leads. The sales funnel oscillates between feast and famine."
    },
    {
      title: "Poor conversion.",
      details: "Deals get stuck in late stages, sales cycles stretch, and the forecasting team loses credibility."
    },
    {
      title: "Lack of commercial systems.",
      details: "Data is siloed across sales, marketing, and CS. Metrics aren't standardized, causing blind decisions."
    },
    {
      title: "Revenue depending on a few key people.",
      details: "If your top seller leaves or founder stops selling, revenue stops. The model is unrepeatable."
    }
  ];

  // Headshot image path
  const headshotUrl = "/rehan.jpeg";

  // Magnetic button custom mouse-tracking spring effect
  const btnRef = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { damping: 20, stiffness: 150 });
  const springY = useSpring(btnY, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Cap displacement to make it subtle and premium
    btnX.set(x * 0.35);
    btnY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  // Profile image hover magnetic glow tracking
  const cardRef = useRef<HTMLDivElement>(null);
  const cardRotateX = useMotionValue(0);
  const cardRotateY = useMotionValue(0);
  const cardSmoothX = useSpring(cardRotateX, { damping: 25, stiffness: 150 });
  const cardSmoothY = useSpring(cardRotateY, { damping: 25, stiffness: 150 });

  const handleCardMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    // Map to soft rotation degrees
    cardRotateX.set(-mouseY / 20);
    cardRotateY.set(mouseX / 20);
  };

  const handleCardMouseLeave = () => {
    cardRotateX.set(0);
    cardRotateY.set(0);
  };

  return (
    <section className="relative min-h-screen pt-28 lg:pt-56 pb-24 lg:pb-32 flex flex-col justify-center items-center overflow-hidden bg-brand-dark px-4 sm:px-6 lg:px-8 z-10">
      
      {/* Decorative cyber grids and glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Abstract light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: BRANDING AND MAIN COPY */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Executive Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8 lg:mb-12 self-start px-3 py-1 bg-white/5 border border-white/10 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-zinc-300 uppercase">
              Revenue Growth Advisor • Fractional CRO
            </span>
          </motion.div>

          {/* Rehan Joe branding header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 lg:mb-8"
          >
            <h2 className="font-mono text-zinc-500 text-xs sm:text-sm tracking-[0.3em] uppercase">
              PERSPECTIVES FROM
            </h2>
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-white mt-1 leading-[0.85] uppercase">
              REHAN JOE
            </h1>
            <p className="font-mono text-brand-gold text-xs sm:text-sm mt-3 tracking-widest uppercase">
              Fractional CRO & GTM Strategist for Tech Teams
            </p>
          </motion.div>

          {/* Massive high-impact core thesis statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 lg:mt-14 mb-8 lg:mb-10"
          >
            <h2 className="font-display font-extrabold text-xl sm:text-3xl text-zinc-100 leading-tight tracking-tight">
              Revenue Problems Are <span className="text-gold-gradient underline decoration-brand-gold/30 underline-offset-8">Rarely</span> Revenue Problems.
            </h2>
          </motion.div>

          {/* Staggered explanation of hidden root causes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed lg:leading-loose mb-10 max-w-xl"
          >
            <p className="mb-4">
              When growth slows, the root cause is usually hidden. It sits quietly within the structural frameworks of your company:
            </p>

            {/* Interactive bottleneck listing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mt-6">
              {bottlenecks.map((item, index) => (
                <div 
                  key={index}
                  className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all duration-300 select-none ${
                    activeBottleneck === index 
                      ? "bg-zinc-900 border-brand-gold/50 shadow-md shadow-brand-gold-glow" 
                      : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/20"
                  }`}
                  onClick={() => setActiveBottleneck(activeBottleneck === index ? null : index)}
                >
                  <div className="flex items-center gap-2.5 justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${activeBottleneck === index ? 'bg-brand-gold' : 'bg-zinc-600'}`} />
                      <span className={`text-xs font-semibold ${activeBottleneck === index ? 'text-brand-gold' : 'text-zinc-300'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {activeBottleneck === index ? "▼ Hide" : "▲ Diagnose"}
                    </span>
                  </div>
                  
                  {activeBottleneck === index && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-zinc-400 mt-2 leading-relaxed pl-3.5 border-l border-brand-gold/30"
                    >
                      {item.details}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-zinc-500 font-mono italic">
              * Click any bottle neck above to diagnose the hidden symptom.
            </p>
          </motion.div>

          {/* Solution Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-t border-white/5 pt-8 lg:pt-10 mb-10 lg:mb-12 max-w-xl"
          >
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans font-light">
              The result is the same: <span className="text-zinc-100 font-medium">Revenue becomes unpredictable</span>. I help technology companies build scalable revenue engines that create predictable growth, stronger market positions, and sustainable competitive advantage.
            </p>
          </motion.div>

          {/* CTA magnetic button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              ref={btnRef}
              style={{ x: springX, y: springY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                const element = document.getElementById("footer-cta");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative cursor-pointer inline-flex items-center justify-center gap-3 bg-gradient-to-r from-zinc-100 to-white hover:from-brand-gold hover:to-[#ffdf91] text-black font-semibold text-xs sm:text-sm tracking-widest px-8 py-4.5 rounded-sm uppercase overflow-hidden transition-colors duration-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              
              {/* Button light sweep glow */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/60 opacity-40 group-hover:animate-none" />
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT IMAGE SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div 
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{ rotateX: cardSmoothX, rotateY: cardSmoothY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/4.5] rounded-[2.5rem] overflow-hidden glass-card p-3 transition-all duration-200 group"
          >
            {/* Ambient image glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-blue opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-[3rem] pointer-events-none" />
            
            {/* The main picture container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-zinc-950/90 border border-white/10 flex flex-col justify-end">
              
              {/* Stylized placeholder/real image combo */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={headshotUrl}
                  alt="Rehan Joe - Revenue Growth Advisor" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 select-none"
                />
                
                {/* Visual glass overlay elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85" />
                <div className="absolute inset-0 bg-zinc-950/20 mix-blend-color-burn" />
              </div>



              {/* Small branding watermark overlay in card footer */}
              <div className="relative p-6 z-10 bg-gradient-to-t from-black to-transparent">
                <div className="font-mono text-[9px] text-brand-gold tracking-widest mb-1 uppercase">AUTHENTIC LEADERSHIP</div>
                <h3 className="font-display font-bold text-xl text-zinc-100 tracking-tight">Rehan Joe</h3>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">Fractional CRO, Scaling growth for tech consultancies and enterprise platforms.</p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
