"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function FaqSection() {
  const sectionRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "Who can join your chess coaching classes?",
      answer:
        "Our chess coaching classes are open to students of all ages and skill levels, from complete beginners to advanced players looking to improve their game.",
    },
    {
      id: 2,
      question: "Do you offer online classes?",
      answer:
        "Yes, we offer both in-person and online classes to accommodate students from different locations and with different scheduling needs.",
    },
    {
      id: 3,
      question: "What will I learn in the beginner course?",
      answer:
        "In the beginner course, you'll learn the basic rules of chess, piece movements, simple tactics, opening principles, and fundamental endgame techniques.",
    },
    {
      id: 4,
      question: "Are there trial classes available?",
      answer:
        "Yes, we offer trial classes for new students to experience our teaching methodology before committing to a full course.",
    },
    {
      id: 5,
      question: "What are the timings for the classes?",
      answer:
        "We offer flexible timing options including weekday evenings and weekend sessions. Specific schedules are provided upon registration.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="faq-container max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item mb-4">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="font-medium">
                  {faq.id}. {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeQuestion === faq.id ? "transform rotate-180" : ""
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
                {activeQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
