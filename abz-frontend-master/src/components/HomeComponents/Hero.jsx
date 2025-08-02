"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-8xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content with Animations */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            India's Bug Bounty Platform <br /> for Hackers & Companies
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find vulnerabilities. Get rewarded. Stay secure.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-base font-semibold">
              Start Hunting
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-100 px-6 py-2 rounded-full text-base font-semibold">
              Launch Program
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image with Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/banner.png"
            alt="Shield"
            width={600}
            height={600}
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
