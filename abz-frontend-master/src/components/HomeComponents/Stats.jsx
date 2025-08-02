"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // const ctx = gsap.context(() => {
    //   gsap.from(".stat-item", {
    //     y: 50,
    //     opacity: 0,
    //     stagger: 0.2,
    //     duration: 0.8,
    //     scrollTrigger: {
    //       trigger: statsRef.current,
    //       start: "top 80%",
    //     },
    //   });
    // }, statsRef);
    // return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="bg-[#000518] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Protecting What Matters — Your Digital Assets, Secured.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our company has extensive experience in working with a wide range of
            startups and enterprise companies in Payments, SaaS and more! We
            have a proven track record of providing reliable and secure
            services, so you can trust us to deliver the best results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          <motion.div
            className="stat-item flex flex-col items-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">24/7</h3>
            <p className="text-center">Customer Support</p>
          </motion.div>

          <motion.div
            className="stat-item flex flex-col items-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">100+</h3>
            <p className="text-center">Engagements Conducted</p>
          </motion.div>

          <motion.div
            className="stat-item flex flex-col items-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">50+</h3>
            <p className="text-center">Companies Secured</p>
          </motion.div>

          <motion.div
            className="stat-item flex flex-col items-center"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">2500+</h3>
            <p className="text-center">Bounty Hunters Onboarded</p>
          </motion.div>

          <div className="w-20 h-20 relative rounded-full flex items-center justify-center pt-[-2]">
            <Image
              //   width={500}
              //   height={500}
              fill
              src="/redalert.png"
              alt="Security illustration"
              className="object-contain w-20 h-20  bottom-16 right-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
