"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function WhyCybersecurity() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="content-block w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Does <span className="text-cyan-500">Cybersecurity</span>{" "}
              Matter for Your <span className="text-cyan-500">Business</span>?
            </h2>
            <p className="text-gray-700 mb-4">
              Cybersecurity protects your business from data breaches, financial
              loss, and reputational damage.
            </p>
          </motion.div>

          <motion.div
            className="content-block w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800">
              Cybersecurity safeguards your business by preventing unauthorized
              access to sensitive data, protecting against cyberattacks, and
              maintaining your reputation by ensuring customer trust and
              compliance with data protection regulations. In today's digital
              world, it's essential for business continuity and resilience
              against evolving threats.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
