"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    date: "January 2024",
    text: "CyberNeoGen founded by Shubham Tiwari with a vision to revolutionize cybersecurity in India",
  },
  {
    date: "March 2024",
    text: "Initial team formed and development of the platform begins",
  },
  {
    date: "August 2024",
    text: "First private beta launched with select security researchers and partner companies",
  },
  {
    date: "November 2024",
    text: "Secured seed funding to expand operations and enhance platform capabilities",
  },
  {
    date: "January 2025",
    text: "Public launch of CyberNeoGen platform with nationwide media coverage",
  },
];

export default function Story() {
  return (
    <section className="relative bg-white px-6 py-20 md:px-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          Our Story
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 z-0" />

          {/* Timeline items */}
          <div className="flex flex-col gap-20">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center md:items-start ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Text */}
                  <div
                    className={`w-full md:w-1/2 px-4 ${
                      isLeft ? "text-right md:pr-12" : "text-left md:pl-12"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-black mb-1">
                      {item.date}
                    </h3>
                    <p className="text-sm text-gray-700">{item.text}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
