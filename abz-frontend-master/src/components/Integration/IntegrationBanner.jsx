"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function IntegrationBanner() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url(/IntegrationBanner.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Radial Light Effect Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(10, 14, 25, 0.7) 0%, rgba(10, 14, 25, 0.95) 100%)`,
        }}
      ></div>

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-navy-950 opacity-80 z-10"></div>

      <div className="container mx-auto px-4 z-20 py-20 mt-16">
        <div className="hero-text max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#56C7FF]">Integrations</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We've created a unique set of Integrations and collaboration tools
            that seamlessly integrate with popular softwares and developer
            environments such as Teams, Slack and more!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#"
              className="bg-white hover:bg-gray-200 text-black font-medium py-2 px-14 rounded-md transition-colors duration-300"
            >
              Explore
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
