import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  
  // Use motion values to track coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag effect (highly organic)
  const springConfig = { damping: 35, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of glow dimension (400px / 2 = 200px)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Background radial glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] z-[1] opacity-35 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(226, 176, 92, 0.25) 0%, rgba(56, 189, 248, 0.1) 50%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Secondary accent glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] z-[1] opacity-25 mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </>
  );
}
