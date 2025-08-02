"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const leadership = [
  {
    name: "Shubham Tiwari",
    role: "Founder & CEO",
    bio: "Former security researcher with over 10 years of experience in vulnerability discovery. Recognized in Hall of Fame programs like Google, Microsoft, and Apple.",
    image: "/person.jpg",
    socials: ["twitter", "linkedin"],
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Full-stack developer with experience in secure application development. Passionately led engineering teams at cybersecurity firms and contributed to open-source security tools.",
    image: "/person.jpg",
    socials: ["twitter", "linkedin"],
  },
  {
    name: "Rajiv Mehta",
    role: "Chief Operations Officer",
    bio: "Business strategist with 15+ years of experience in tech company operations. Specialized in building cybersecurity delivery pipelines and managing growth ventures.",
    image: "/person.jpg",
    socials: ["linkedin"],
  },
];

const coreTeam = [
  {
    name: "Ananya Patel",
    role: "Security Researcher",
    image: "/person.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Platform Developer",
    image: "/person.jpg",
  },
  { name: "Meena Joshi", role: "Community Manager", image: "/person.jpg" },
  {
    name: "Arjun Kumar",
    role: "Business Development",
    image: "/person.jpg",
  },
];

const advisors = [
  {
    name: "Dr. Neha Gupta",
    role: "Cybersecurity Expert",
    image: "/person.jpg",
  },
  {
    name: "Sanjay Kapoor",
    role: "Venture Capitalist",
    image: "/person.jpg",
  },
  { name: "Aisha Reddy", role: "Legal Advisor", image: "/person.jpg" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Team() {
  return (
    <section className="bg-white px-6 py-20 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
        Meet the Team
      </h2>

      {/* Leadership */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {leadership.map((person, i) => (
          <motion.div
            key={person.name}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={120}
              height={120}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">{person.name}</h3>
            <p className="text-blue-600 text-sm font-semibold">{person.role}</p>
            <p className="text-gray-600 text-sm mt-3">{person.bio}</p>
            <div className="flex justify-center gap-3 mt-4">
              {person.socials?.includes("linkedin") && (
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 text-xl"
                >
                  in
                </a>
              )}
              {person.socials?.includes("twitter") && (
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 text-xl"
                >
                  x
                </a>
              )}
              {person.socials?.includes("github") && (
                <a href="#" className="text-black hover:text-gray-800 text-xl">
                  GH
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Team */}
      <h3 className="text-2xl font-bold mb-10 text-black">Core Team Members</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
        {coreTeam.map((person, i) => (
          <motion.div
            key={person.name}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-3 object-cover"
            />
            <h4 className="font-semibold text-black">{person.name}</h4>
            <p className="text-sm text-blue-600">{person.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Advisors */}
      <h3 className="text-2xl font-bold mb-10 text-black">
        Advisors & Mentors
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {advisors.map((person, i) => (
          <motion.div
            key={person.name}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Image
              src={person.image}
              alt={person.name}
              width={100}
              height={100}
              className="rounded-full mx-auto mb-3 object-cover"
            />
            <h4 className="font-semibold text-black">{person.name}</h4>
            <p className="text-sm text-blue-600">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
