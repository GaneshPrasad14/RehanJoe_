import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, Clock, User, Mail, Briefcase, ChevronRight, 
  CheckCircle, ArrowUpRight, Linkedin, Twitter, MessageSquare, ShieldCheck
} from "lucide-react";

export default function Footer() {
  const [bookingStep, setBookingStep] = useState<"idle" | "form" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    consultationType: "GTM Diagnostic (15 mins)",
    customType: "",
    selectedDate: "2026-06-25",
    selectedTime: "10:00 AM EST"
  });

  const timeSlots = ["09:00 AM EST", "10:00 AM EST", "02:00 PM EST", "04:30 PM EST"];
  const dates = [
    { day: "Thu", num: "25", full: "2026-06-25" },
    { day: "Fri", num: "26", full: "2026-06-26" },
    { day: "Mon", num: "29", full: "2026-06-29" },
    { day: "Tue", num: "30", full: "2026-06-30" },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBook = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || (formData.consultationType === "Others" && !formData.customType)) {
      alert("Please fill in all details to schedule your consult.");
      return;
    }
    
    const finalType = formData.consultationType === "Others" ? formData.customType : formData.consultationType;

    // Construct WhatsApp message
    const message = `Hi Rehan,\n\nI would like to schedule a consultation.\n\nDetails:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Company: ${formData.company}\n- Type: ${finalType}\n- Date: ${formData.selectedDate}\n- Time: ${formData.selectedTime}`;
    const whatsappUrl = `https://wa.me/918110929028?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setBookingStep("success");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-cta" className="relative bg-black pt-24 pb-12 overflow-hidden z-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Visual neon light spots */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        
        {/* TOP PANEL: FINAL DIRECT APPEAL AND SCHEDULER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/5">
          
          {/* LEFT COLUMN: THE GTM TEXT APPEAL */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-brand-gold tracking-[0.25em] uppercase">
              05 / Action
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl mt-4 text-white tracking-tight leading-none uppercase">
              LET'S DISCUSS YOUR <br />
              <span className="text-gold-gradient">NEXT STAGE</span> OF GROWTH
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold mt-6 mb-8" />
            
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light mb-6 max-w-xl">
              If revenue growth has become less predictable than it should be, the issue is rarely effort. It is usually the system behind the growth.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans font-light mb-8 max-w-xl">
              Let's identify what's holding your growth back and build the repeatable revenue engine required to scale your customer capture.
            </p>

            {/* Direct Professional Trust stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="p-4 rounded-lg bg-zinc-900/40 border border-white/5">
                <div className="font-display font-extrabold text-2xl text-brand-gold">24hr</div>
                <div className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase mt-1">Average Response</div>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/40 border border-white/5">
                <div className="font-display font-extrabold text-2xl text-brand-blue">No-Cost</div>
                <div className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase mt-1">Diagnostic Strategy Call</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE INTERACTIVE CONVERSATION SCHEDULER */}
          <div className="lg:col-span-6">
            <div className="relative w-full rounded-xl p-6 sm:p-8 glass-card border border-white/10 bg-brand-card/80">
              
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />
              
              <AnimatePresence mode="wait">
                {/* STEP 1: INITIAL CTA */}
                {bookingStep === "idle" && (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col text-center py-6"
                  >
                    <Calendar className="w-12 h-12 text-brand-gold mx-auto mb-4 animate-bounce" />
                    <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">
                      Ready to build predictable growth?
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light mb-8 max-w-sm mx-auto">
                      Schedule a secure 15-minute diagnostic. We will review your pipeline leakage map directly.
                    </p>
                    <button
                      onClick={() => setBookingStep("form")}
                      className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-gold to-[#ffdf91] text-black font-semibold text-xs sm:text-sm tracking-widest px-8 py-4.5 rounded-sm uppercase font-mono shadow-md border-glow-gold hover:scale-[1.01] transition-transform duration-300"
                    >
                      Book a Call
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: BOOKING FORM */}
                {bookingStep === "form" && (
                  <motion.form 
                    key="form"
                    onSubmit={handleBook}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">DIAGNOSTIC SCHEDULER</span>
                      <button 
                        type="button"
                        onClick={() => setBookingStep("idle")}
                        className="text-xs font-mono text-zinc-400 hover:text-brand-gold"
                      >
                        ← Back
                      </button>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950/80 border border-white/5 rounded-md py-3 pl-11 pr-4 text-zinc-200 text-sm focus:border-brand-blue outline-none transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Company Email" 
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950/80 border border-white/5 rounded-md py-3 pl-11 pr-4 text-zinc-200 text-sm focus:border-brand-blue outline-none transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                        <input 
                          type="text" 
                          name="company" 
                          placeholder="Company / Website" 
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950/80 border border-white/5 rounded-md py-3 pl-11 pr-4 text-zinc-200 text-sm focus:border-brand-blue outline-none transition-colors"
                        />
                      </div>

                      {/* Dropdown Type */}
                      <div className="space-y-1">
                        <label className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">CONSULT TYPE</label>
                        <select
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-950 border border-white/5 rounded-md py-3 px-3 text-zinc-300 text-sm focus:border-brand-blue outline-none transition-colors"
                        >
                          <option>GTM Diagnostic (15 mins)</option>
                          <option>CRO Pipeline Audit (30 mins)</option>
                          <option>Fractional CRO Exploration (45 mins)</option>
                          <option value="Others">Others (Please specify)</option>
                        </select>
                        {formData.consultationType === "Others" && (
                          <input 
                            type="text" 
                            name="customType" 
                            placeholder="Please specify consultation type..." 
                            required
                            value={formData.customType}
                            onChange={handleInputChange}
                            className="w-full bg-zinc-950/80 border border-white/5 rounded-md py-3 px-4 mt-2 text-zinc-200 text-sm focus:border-brand-blue outline-none transition-colors"
                          />
                        )}
                      </div>
                    </div>

                    {/* Date Selector */}
                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">SELECT DATE</label>
                      <div className="grid grid-cols-4 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.full}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedDate: d.full })}
                            className={`p-2 rounded text-center border font-sans cursor-pointer transition-all ${
                              formData.selectedDate === d.full
                                ? "bg-brand-blue/15 border-brand-blue text-brand-blue font-bold"
                                : "bg-zinc-950 border-white/5 text-zinc-400 hover:border-white/10"
                            }`}
                          >
                            <div className="text-[10px] uppercase">{d.day}</div>
                            <div className="text-sm">{d.num}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selector */}
                    <div className="space-y-1">
                      <label className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">AVAILABLE SLOTS</label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, selectedTime: time })}
                            className={`p-2.5 rounded text-center border font-mono text-[10px] cursor-pointer transition-all ${
                              formData.selectedTime === time
                                ? "bg-brand-gold/15 border-brand-gold text-brand-gold font-bold"
                                : "bg-zinc-950 border-white/5 text-zinc-400 hover:border-white/10"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Action Submit */}
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-white text-black py-3.5 rounded font-bold uppercase text-xs tracking-wider hover:bg-brand-gold transition-colors duration-300 font-mono mt-2"
                    >
                      Confirm Booking
                    </button>
                  </motion.form>
                )}

                {/* STEP 3: SUCCESS ANIMATED SCREEN */}
                {bookingStep === "success" && (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-pulse" />
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">
                      Briefing Confirmed!
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light mb-6 max-w-sm mx-auto">
                      Thank you, <span className="text-zinc-100 font-medium">{formData.name}</span>. A secure calendar invitation and growth briefing agenda have been dispatched to: <span className="text-zinc-100 font-medium">{formData.email}</span>.
                    </p>

                    {/* Confirmed meeting briefing slip */}
                    <div className="p-4 rounded-lg bg-zinc-950/80 border border-white/10 text-left space-y-2 mb-6 max-w-xs mx-auto">
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                        <span>CONSULTATION</span>
                        <span className="text-brand-gold uppercase font-bold">{formData.consultationType === "Others" ? formData.customType : formData.consultationType.split(" (")[0]}</span>
                      </div>
                      <div className="h-[1px] bg-white/5" />
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{formData.selectedDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{formData.selectedTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{formData.company}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingStep("idle")}
                      className="cursor-pointer font-mono text-xs text-brand-gold hover:underline"
                    >
                      Schedule Another Slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER: BRAND SIGN-OFF AND SOCIAL LINKS */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo Brand Slip */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-brand-gold font-display font-black text-2xl tracking-tighter">REHAN JOE</span>
              <span className="font-mono text-[9px] text-zinc-500 border border-white/10 px-1.5 py-0.5 rounded">CRO</span>
            </div>
            <p className="text-zinc-500 text-xs mt-1 font-sans font-light">
              Revenue Growth Advisor | Fractional CRO | GTM Strategist
            </p>
            <p className="text-zinc-600 text-[11px] mt-0.5 font-sans font-light">
              Helping Technology Companies Build Predictable Revenue Engines.
            </p>
          </div>

          {/* Social connections */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/rehan-joe-j" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 rounded-full bg-zinc-900/50 border border-white/5 hover:border-brand-gold text-zinc-400 hover:text-brand-gold transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:rehan.joe@jorosystems.com" 
                className="p-2.5 rounded-full bg-zinc-900/50 border border-white/5 hover:border-brand-gold text-zinc-400 hover:text-brand-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top clicker */}
            <button
              onClick={handleScrollToTop}
              className="cursor-pointer flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-zinc-400 hover:text-brand-gold uppercase font-bold self-start sm:self-center"
            >
              Back to Top 
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* COPYRIGHT & CREDITS */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-zinc-600 text-[10px] font-mono gap-4">
          <span>&copy; {new Date().getFullYear()} REHAN JOE. ALL RIGHTS RESERVED.</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-brand-gold" />
            SECURE STRATEGIC DEPLOYMENT
          </span>
        </div>

      </div>
    </footer>
  );
}
