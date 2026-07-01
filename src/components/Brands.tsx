import { motion } from "motion/react";
import venbaLogo from "../assets/venba.png";
import ysquareLogo from "../assets/ysquare.png";
import zaigoLogo from "../assets/zaigo.png";
import xpulsarLogo from "../assets/xpulsar.png";
import techintaLogo from "../assets/techinta.png";

export default function Brands() {
  const brands = [
    { name: "Venba Tech", logo: venbaLogo },
    { name: "Ysquare Technology", logo: ysquareLogo },
    { name: "Zaigo Infotech", logo: zaigoLogo },
    { name: "Xpulsar Technology", logo: xpulsarLogo },
    { name: "Techinta", logo: techintaLogo }
  ];

  return (
    <section className="py-20 lg:py-28 bg-black border-y border-white/5 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-mono text-[10px] tracking-widest text-zinc-500 uppercase mb-12 lg:mb-16">
          Brands I have worked with
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 md:gap-x-24">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex justify-center items-center hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-14 md:h-20 w-auto object-contain max-w-[200px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
