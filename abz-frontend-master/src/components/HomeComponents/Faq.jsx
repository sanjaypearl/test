"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

export default function Faq() {
  const sectionRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
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

  //   const faqs = [
  //     {
  //       id: 1,
  //       question: "What is CyberNeoGen?",
  //       answer:
  //         "CyberNeoGen is a comprehensive cybersecurity platform that provides advanced protection against digital threats, vulnerability assessment, and security monitoring for businesses of all sizes.",
  //     },
  //     {
  //       id: 2,
  //       question: "What is CyberNeoGen?",
  //       answer:
  //         "CyberNeoGen is a comprehensive cybersecurity platform that provides advanced protection against digital threats, vulnerability assessment, and security monitoring for businesses of all sizes.",
  //     },
  //     {
  //       id: 3,
  //       question: "What is CyberNeoGen?",
  //       answer:
  //         "CyberNeoGen is a comprehensive cybersecurity platform that provides advanced protection against digital threats, vulnerability assessment, and security monitoring for businesses of all sizes.",
  //     },
  //     {
  //       id: 4,
  //       question: "What is CyberNeoGen?",
  //       answer:
  //         "CyberNeoGen is a comprehensive cybersecurity platform that provides advanced protection against digital threats, vulnerability assessment, and security monitoring for businesses of all sizes.",
  //     },
  //     {
  //       id: 5,
  //       question: "What is CyberNeoGen?",
  //       answer:
  //         "CyberNeoGen is a comprehensive cybersecurity platform that provides advanced protection against digital threats, vulnerability assessment, and security monitoring for businesses of all sizes.",
  //     },
  //   ];

  const faqs = [
    {
      id: 1,
      question: "What is CyberNeoGen?",
      answer:
        "CyberNeoGen is a next-gen cybersecurity platform that empowers businesses with real-time threat detection, continuous vulnerability scanning, and a secure bug bounty ecosystem.",
    },
    {
      id: 2,
      question: "Who can participate in CyberNeoGen’s Bug Bounty Program?",
      answer:
        "Any ethical hacker, security researcher, or cybersecurity enthusiast can register and participate in our bounty program. We welcome both beginners and seasoned professionals.",
    },
    {
      id: 3,
      question: "How does CyberNeoGen ensure data privacy during assessments?",
      answer:
        "We follow strict data security protocols. All vulnerability scans and bug submissions are handled in isolated environments, ensuring client confidentiality and data integrity.",
    },
    {
      id: 4,
      question: "What kind of vulnerabilities does CyberNeoGen help detect?",
      answer:
        "We help detect a wide range of vulnerabilities including XSS, SQL injection, privilege escalation, insecure storage, misconfigurations, and more — following OWASP standards.",
    },
    {
      id: 5,
      question: "How can my company onboard with CyberNeoGen?",
      answer:
        "You can start by scheduling a demo or creating an account. Our onboarding team will guide you through asset registration, scope definition, and setting up your first scan or bounty program.",
    },
    {
      id: 6,
      question: "Is CyberNeoGen suitable for startups?",
      answer:
        "Absolutely. We offer scalable plans tailored for startups, SMBs, and large enterprises. Our goal is to make enterprise-grade security accessible to all.",
    },
    {
      id: 7,
      question: "What rewards are offered in the Bug Bounty Program?",
      answer:
        "Rewards depend on the severity and impact of the vulnerability found. We follow CVSS guidelines to evaluate submissions and ensure fair payouts in INR or crypto, based on your preference.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Got <span className="text-cyan-500">Questions</span>? We've Got{" "}
            <span className="text-cyan-500">Answers</span>.
          </h2>
          <p className="text-gray-600">-Frequently Asked Questions</p>
        </div>

        <div className="faq-container max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item mb-4">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                onClick={() => toggleQuestion(faq.id)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      activeQuestion === faq.id
                        ? "M19 9l-7 7-7-7"
                        : "M9 5l7 7-7 7"
                    }
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
                    <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
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
