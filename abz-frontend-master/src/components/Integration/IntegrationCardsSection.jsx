"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    title: "Cross Sync With Jira",
    description:
      "Sync your tickets & issues bi-directionally, get meaningful updates across Jira and your security tools.",
    icon: "/icons/jira.jpg",
  },
  {
    title: "Slack Notifications",
    description:
      "Send real-time alerts for issues and tasks, including security and compliance-related updates, directly to Slack.",
    icon: "/icons/slack.png",
  },
  {
    title: "Microsoft Teams",
    description:
      "Work in Microsoft Teams? No problem. Get issue notifications and collaborate easily across channels.",
    icon: "/icons/teams.jpg",
  },
  {
    title: "Github Issues",
    description:
      "Quickly open and resolve security and compliance tickets in GitHub Issues for faster remediation.",
    icon: "/icons/github.png",
  },
  {
    title: "Custom Webhooks",
    description:
      "Integrate with any system using webhooks for trigger-based automation and external workflows.",
    icon: "/icons/webhook.png",
  },
  {
    title: "Asana Issues",
    description:
      "Align your issue tracking with task management in Asana for streamlined collaboration and visibility.",
    icon: "/icons/asana.png",
  },
  {
    title: "Sumo Logic",
    description:
      "Sync critical logs & alerts to analyze and react quickly with Sumo Logic’s real-time analytics platform.",
    icon: "/icons/sumo.jpg",
  },
  {
    title: "PagerDuty Issues",
    description:
      "PagerDuty alerts help security and ops teams take immediate action on critical vulnerabilities.",
    icon: "/icons/pagerduty.png",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
    },
  }),
};

export default function IntegrationCardsSection() {
  return (
    <section className="bg-[#eceaea] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Since We Made It <span className="text-blue-500">Simple</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          You Can Now Integrate With Ease
        </p>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {integrations.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <Image
                  width={50}
                  height={100}
                  src={item.icon}
                  alt={item.title}
                  className="h-10"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-sm text-blue-500 font-medium hover:underline"
              >
                Read More »
              </a>
            </motion.div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {integrations.slice(3, 6).map((item, index) => (
            <motion.div
              key={index + 3}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index + 3}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <Image
                  width={50}
                  height={100}
                  src={item.icon}
                  alt={item.title}
                  className="h-10"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-sm text-blue-500 font-medium hover:underline"
              >
                Read More »
              </a>
            </motion.div>
          ))}
        </div>

        {/* Row 3 - 2 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mx-auto max-w-3xl">
          {integrations.slice(6).map((item, index) => (
            <motion.div
              key={index + 6}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index + 6}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <Image
                  width={50}
                  height={100}
                  src={item.icon}
                  alt={item.title}
                  className="h-10"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-sm text-blue-500 font-medium hover:underline"
              >
                Read More »
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
