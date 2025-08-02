"use client";
import { useState } from "react";

const categories = ["General", "For Companies", "For Researchers"];

const generalFaqs = [
  {
    question: "What is bug bounty?",
    answer:
      "Bug bounty is a program where organizations reward individuals for discovering and reporting security vulnerabilities in their software, websites, or applications. These rewards, or 'bounties', incentivize ethical hackers to help improve security rather than exploit vulnerabilities.",
  },
  {
    question: "Who can join CyberNeoGen?",
    answer:
      "CyberNeoGen welcomes both companies looking to secure their digital assets and security researchers (ethical hackers) who want to contribute to cybersecurity. Companies of all sizes can launch bug bounty programs, and researchers with various skill levels can participate in finding vulnerabilities.",
  },
  {
    question: "How does CyberNeoGen work?",
    answer:
      "CyberNeoGen connects companies with security researchers through our platform. Companies create bounty programs defining scope and rewards, while researchers discover and report vulnerabilities. Our team validates reports, facilitates communication, and ensures fair payouts for legitimate findings.",
  },
  {
    question: "Is CyberNeoGen available internationally?",
    answer:
      "Yes, CyberNeoGen is available globally. While we’re based in India, our platform serves companies and researchers worldwide. We support international payments and have a diverse community of security researchers from across the globe.",
  },
];

const companyFaqs = [
  {
    question: "How do I launch a bug bounty program?",
    answer:
      "Launching a program is simple: create an account, define your program scope (what systems can be tested), set bounty amounts, and provide clear guidelines. Our team will help you optimize your program before it goes live to researchers. You can choose between Private (invitation-only) or public programs depending on your needs.",
  },
  {
    question: "What is the pricing model for companies?",
    answer:
      "CyberNeoGen offers flexible pricing models based on your needs. We have subscription plans starting from ₹25,000/month that include platform access, report triage, and researcher management. We also offer a success-based model where we charge a percentage of bounties paid. Custom enterprise plans are available for larger organizations.",
  },
  {
    question: "How much should we budget for bounty rewards?",
    answer:
      "Bounty budgets vary based on your organization’s size, industry, and security maturity. Typical rewards range from ₹5,000 for low-severity issues to ₹100,000+ for critical vulnerabilities. We recommend starting with a minimum monthly budget of ₹50,000 for bounties. Our team can help you establish appropriate reward ranges based on industry standards.",
  },
  {
    question: "How are vulnerabilities verified?",
    answer:
      "Our security experts perform initial triage on all submitted reports to filter out false positives and duplicates. Valid reports are forwarded to your team for confirmation. You maintain final decision authority on severity ratings and bounty amounts, though we provide recommendations based on industry standards like CVSS.",
  },
];

const researcherFaqs = [
  {
    question: "How do payouts work?",
    answer:
      "Once a vulnerability is validated and accepted, bounty payments are processed within 15 business days. We support multiple payout methods including bank transfers, UPI (for Indian researchers), PayPal, and cryptocurrency. Researchers can track payment status through their dashboard and will receive notifications at each stage of the process.",
  },
  {
    question: "How are reports validated?",
    answer:
      "Our security team reviews each submission for completeness, accuracy, and impact. Valid reports must include clear reproduction steps, impact assessment, and potential mitigation suggestions. Reports are evaluated based on technical accuracy, severity of the vulnerability, and quality of documentation. We aim to provide initial feedback within 48–72 hours of submission.",
    tips: [
      "Include clear, step-by-step reproduction instructions",
      "Explain the security impact of the vulnerability",
      "Provide screenshots or videos when applicable",
      "Suggest potential fixes or mitigations",
      "Be responsive to any follow-up questions",
    ],
  },
  {
    question: "Can I participate in private programs?",
    answer:
      "Yes, researchers can receive invitations to private programs based on their skills, reputation, and activity on the platform. To increase your chances of receiving invitations, maintain a high-quality submission record, complete your profile with your areas of expertise, and consistently participate in public programs to build your reputation.",
  },
  {
    question: "What types of vulnerabilities are accepted?",
    answer:
      "Each program has specific scope guidelines, but generally, we accept vulnerabilities that pose genuine security risks such as SQL injection, XSS, CSRF, authentication bypasses, privilege escalation, and business logic flaws. Low-impact issues like missing HTTP headers, clickjacking on non-sensitive pages, and self-XSS are typically considered out of scope or low priority.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-10 md:px-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full text-blue-100 opacity-10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C150,300 350,100 500,200 C650,300 850,100 1000,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0,400 C150,500 350,300 500,400 C650,500 850,300 1000,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0,600 C150,700 350,500 500,600 C650,700 850,500 1000,600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6">
          <h2 className="text-[16px] font-semibold text-gray-800">
            Categories
          </h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`block w-full text-left text-[14px] font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "text-blue-600 border-l-4 border-blue-600 pl-3 bg-blue-50 py-1 rounded-sm"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md mt-10">
            <p className="text-[13px] text-gray-700">
              Need more help? <br />
              Can’t find what you’re looking for? Our support team is ready to
              assist.
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700 transition">
              Contact Support
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:w-3/4 space-y-10">
          {/* Page Heading */}
          <div>
            <h1 className="text-[24px] font-bold text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-[14px] text-gray-700 max-w-3xl leading-relaxed mt-2">
              Find answers to common questions about CyberNeoGen’s{" "}
              <span className="text-blue-600 underline">bug bounty</span>{" "}
              platform and how it works for both companies and{" "}
              <span className="text-blue-600 underline">
                security researchers
              </span>
              .
            </p>
          </div>

          {/* General Questions */}
          <FAQCard title="General Questions" faqs={generalFaqs} />

          {/* For Companies */}
          <FAQCard title="For Companies" faqs={companyFaqs} />

          {/* For Researchers */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md">
            <div className="bg-gray-100 text-blue-600 font-semibold px-6 py-4 text-[14px] rounded-t-xl">
              For Researchers
            </div>
            {researcherFaqs.map((faq, index) => (
              <div
                key={index}
                className="px-6 py-5 hover:bg-gray-50 transition duration-150 space-y-3"
              >
                <h3 className="font-semibold text-gray-900 text-[14px]">
                  {faq.question}
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>

                {faq.tips && (
                  <div className="bg-gray-100 px-4 py-3 rounded-md text-[13px] text-gray-700">
                    <p className="font-semibold mb-2">
                      Tips for successful reports:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {faq.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Reusable FAQ card component
function FAQCard({ title, faqs }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md">
      <div className="bg-gray-100 text-blue-600 font-semibold px-6 py-4 text-[14px] rounded-t-xl">
        {title}
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="px-6 py-5 hover:bg-gray-50 transition duration-150"
        >
          <h3 className="font-semibold text-gray-900 text-[14px] mb-1">
            {faq.question}
          </h3>
          <p className="text-[13px] text-gray-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
