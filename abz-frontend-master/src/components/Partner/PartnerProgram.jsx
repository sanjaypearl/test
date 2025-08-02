"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Referral Fees",
    description:
      "Partner referrals have a generous fee component; our top partners can look forward to earning more than $10K a year!",
    icon: "/icons/partner-referral.png",
  },
  {
    title: "Exclusive Discounts",
    description:
      "Referrals will get special discounts to launch their Pentest or Bug Bounty program.",
    icon: "/icons/partner-discount.png",
  },
  {
    title: "Co-Marketing Opportunities",
    description:
      "Our partners get co-marketing opportunities including access to promote security events and joint PR campaigns.",
    icon: "/icons/partner-marketing.png",
  },
  {
    title: "Expedited Onboarding",
    description:
      "We expedite the onboarding process for all referrals and are able to complete the process in under 24 hours, for free.",
    icon: "/icons/partner-onboarding.png",
  },
  {
    title: "Robust Partner Ecosystem",
    description:
      "We have always strived to build a partner ecosystem that allows you to share your expertise and network with your peers.",
    icon: "/icons/partner-ecosystem.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

export default function PartnerProgram() {
  return (
    <section className="bg-[#eceaea] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What's Included In{" "}
          <span className="text-blue-500">The Partner Program</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We're looking for companies who can use our premium in-platform
          services — Responsible Vulnerability Disclosure Programs, Managed Bug
          Bounty Programs, and Pentesting Services — to extend or complement
          their own offerings.
        </p>

        {/* Row 1 - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {benefits.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 2 - 2 cards centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {benefits.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33%-1rem)] lg:w-[360px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index + 3}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
