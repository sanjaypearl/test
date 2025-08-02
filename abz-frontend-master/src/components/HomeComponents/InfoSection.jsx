"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

export default function InfoSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".info-card", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-cyan-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="info-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/q.png"
              width={500}
              height={500}
              alt="Q"
              className="w-40 h-40"
            />
            <h3 className="text-2xl font-bold mb-4">Why CyberNeoGen?</h3>
            <p>
              CyberNeoGen is a cybersecurity company founded by expert ShubhSam
              Team, delivering innovative and scalable defense solutions.
            </p>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/heart.png"
              width={500}
              height={500}
              alt="Q"
              className="w-40 h-40"
            />
            <h3 className="text-2xl font-bold mb-4">Build User Trust</h3>
            <p>
              Your security is our priority. We use advanced tech and
              transparency to earn your trust.
            </p>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/file.png"
              width={500}
              height={500}
              alt="Q"
              className="w-40 h-40"
            />
            <h3 className="text-2xl font-bold mb-4">
              Safe harbor for vulnerability reports.
            </h3>
            <p>
              We offer safe harbor to ethical hackers—encouraging responsible
              vulnerability reporting without fear.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
