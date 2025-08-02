"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

export default function GuardingFuture() {
  const sectionRef = useRef(null);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionItems = [
    {
      id: 1,
      title: "Protects Sensitive Data",
      content:
        "Our advanced security measures ensure your  sensitive data remains confidential and protected from unauthorized access.",
    },
    {
      id: 2,
      title: "Prevents Cyber Attacks",
      content:
        "Proactive monitoring and defense systems identify and neutralize potential threats before they can cause damage.",
    },
    {
      id: 3,
      title: "Reduces Financial Losses",
      content:
        "By preventing breaches and downtime, our solutions help you avoid the significant financial impact of cyber incidents.",
    },
    {
      id: 4,
      title: "Ensures Regulatory Compliance",
      content:
        "Stay compliant with industry regulations and data protection laws, avoiding costly penalties and legal issues.",
    },
    {
      id: 5,
      title: "Enables Real-Time Threat Detection",
      content:
        "Our 24/7 monitoring systems identify suspicious activities in real-time, allowing for immediate response.",
    },
    {
      id: 6,
      title: "Supports Business Continuity",
      content:
        "Minimize downtime and ensure your operations continue smoothly even in the face of cyber threats.",
    },
    {
      id: 7,
      title: "Builds Trust with Customers",
      content:
        "Demonstrate your commitment to protecting customer data, building confidence and loyalty in your brand.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-content > *", {
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

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-content text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Guarding the <span className="text-cyan-500">Future</span>,{" "}
            <span className="text-cyan-500">Securing</span> the Now
          </h2>
          <p className="text-gray-600 mb-8">— Cyber Neo Gen.</p>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Cyber Neo Gen delivers advanced cybersecurity solutions to protect
            your data today and defend against tomorrow's threats. Secure now,
            safe always.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80">
              <Image
                src="/Security.png"
                alt="Cybersecurity illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-md overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span className="font-medium">{item.title}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === item.id
                          ? "transform rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {activeAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{item.content}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
