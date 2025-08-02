"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  {
    title: "Secure Coding Bootcamp",
    description:
      "A three-day intensive workshop teaching developers how to write secure code and identify common vulnerabilities.",
    date: "March 2024",
  },
  {
    title: "CTF Competition",
    description:
      "Our inaugural Capture The Flag competition with over 200 participants from across India competing for prizes and recognition.",
    date: "May 2024",
  },
  {
    title: "Web3 Security Summit",
    description:
      "A specialized conference focused on blockchain and smart contract security with industry experts as speakers.",
    date: "July 2024",
  },
];

const sessions = [
  {
    title: "BSides Delhi 2024",
    description: "Presentation on “Building Ethical Hacking Communities”",
    image: "/alas.jpg",
  },
  {
    title: "Monthly Webinar Series",
    description: "Free educational content for aspiring security researchers",
    image: "/Partners-banner.jpg",
  },
  {
    title: "Campus Outreach Program",
    description: "Introducing cybersecurity careers to engineering students",
    image: "/hero-bg.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Community() {
  return (
    <section className="bg-white px-6 py-20 md:px-20 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-black"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Our Community
      </motion.h2>
      <motion.p
        className="text-gray-600 max-w-2xl mx-auto mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
      >
        CyberNeoGen is more than a platform—it's a thriving community of
        security professionals dedicated to making the digital world safer
        through knowledge sharing and collaboration.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {/* Events */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-xl font-bold mb-4">Events & Workshops</h3>
          {events.map((event, i) => (
            <div
              key={i}
              className="mb-4 border-b border-gray-300 pb-4 last:border-none"
            >
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Sessions */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
        >
          <h3 className="text-xl font-bold mb-4">
            BSides & Community Sessions
          </h3>
          {sessions.map((session, i) => (
            <div
              key={i}
              className="flex items-center gap-4 mb-4 bg-white p-3 rounded shadow-sm hover:shadow-md transition"
            >
              <Image
                src={session.image}
                alt={session.title}
                width={60}
                height={60}
                className=" object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{session.title}</h4>
                <p className="text-sm text-gray-600">{session.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
