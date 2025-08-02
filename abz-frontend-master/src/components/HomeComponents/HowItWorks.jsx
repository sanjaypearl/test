"use client";
import { UserPlus, Search, ClipboardCheck, BadgeCheck } from "lucide-react"; // Optional: Replace with other icons

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={40} className="text-blue-500" />,
      title: "Step 1: Register",
      desc: "Sign up as a security researcher or company looking to secure your digital assets.",
    },
    {
      icon: <Search size={40} className="text-blue-500" />,
      title: "Step 2: Hunt or Launch Program",
      desc: "Researchers find vulnerabilities in programs, while companies set up bounty programs.",
    },
    {
      icon: <ClipboardCheck size={40} className="text-blue-500" />,
      title: "Step 3: Submit/Review Reports",
      desc: "Researchers submit detailed vulnerability reports, companies review and validate findings.",
    },
    {
      icon: <BadgeCheck size={40} className="text-blue-500" />,
      title: "Step 4: Get Rewarded",
      desc: "Valid vulnerabilities are rewarded with bounties, companies improve their security.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        How It Works
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Our platform connects ethical hackers with companies seeking to
        strengthen their security posture through a streamlined process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="bg-blue-100 rounded-full p-4 mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
