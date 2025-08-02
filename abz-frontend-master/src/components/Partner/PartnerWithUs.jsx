"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

export default function PartnerWithUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".content-block", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".image-block", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-22 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="content-block w-full md:w-1/2">
            <p className="text-gray-600 mb-2">Are you a hacker?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner With CyberNeoGen{" "}
              <span className="text-gray-400">Community Today!</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Fortune 500 companies, government agencies, educational
              institutions, non-profits and many others are among the
              organisations that are woefully unprepared to respond to security
              incidents.
            </p>
            <p className="text-gray-700 mb-6">
              The CyberNeoGen Partner Network was formed with the motive to
              increase awareness about this need and to help businesses around
              the globe easily build and strengthen their security posture by
              deploying our powerful solutions
            </p>
            <a
              href="#"
              className="inline-block bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
            >
              Become a Partner
            </a>
          </div>

          <motion.div
            className="image-block w-full md:w-1/2 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full max-w-md h-80">
              <Image
                src="/partner.jpg"
                alt="Hacker character"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
