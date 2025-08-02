"use client";

import { Lock, UserCheck, ListChecks, BarChart2 } from "lucide-react"; // Icons from lucide-react

const features = [
  {
    title: "Secure Platform",
    description:
      "End-to-end encryption and secure communication channels protect sensitive vulnerability information and researcher identities.",
    icon: <Lock className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Verified Researchers",
    description:
      "All security researchers undergo thorough verification to ensure companies work with trusted professionals.",
    icon: <UserCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "End-to-End Triage",
    description:
      "Comprehensive vulnerability management workflow from submission to resolution with built-in collaboration tools.",
    icon: <ListChecks className="w-5 h-5 text-blue-600" />,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Detailed insights and metrics to track program performance, researcher activity, and security improvements.",
    icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
  },
];

export default function PlatformFeatures() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-900">Platform Features</h2>
        <p className="text-gray-600 text-sm mt-2">
          CyberNeoGen offers a comprehensive suite of features designed to make
          vulnerability discovery and management seamless.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition"
          >
            <div className="bg-blue-100 rounded-full p-2">{feature.icon}</div>
            <div>
              <h3 className="text-[14px] font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-[13px] text-gray-600 mt-1 leading-snug">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
