import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Challenges from "./components/Challenges";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Engagement from "./components/Engagement";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden selection:bg-brand-gold selection:text-black">
      {/* Dynamic Cursor Glow trackers */}
      <CursorGlow />

      {/* Elite subtle film grain paper overlay */}
      <div className="grain-overlay" />

      {/* Primary Floating Header */}
      <Header />

      {/* Full-Page Section Stack with smooth slide transitions */}
      <main>
        {/* HERO BRIGHT INTRO */}
        <Hero />

        {/* INFINITE TICKER MARQUEE */}
        <Marquee />

        {/* 01: BENTO BOX CHALLENGES */}
        <Challenges />

        {/* 02: ADVISORY ACCORDION SERVICES */}
        <Services />

        {/* 03: MANIFESTO STATEMENT */}
        <WhyMe />

        {/* 04: ENGAGEMENT CONTRACT OPTIONS */}
        <Engagement />
      </main>

      {/* 05: FINAL CTA & CONVERSATION SCHEDULER FOOTER */}
      <Footer />
    </div>
  );
}
