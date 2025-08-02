"use client";
import React from "react";

const legalLinks = [
  "Privacy Policy",
  "Responsible Disclosure",
  "Cookie Policy ",
];

const termsContent = [
  {
    title: "1. Introduction",
    body: `Welcome to CyberNeoGen. These Terms of Service govern your use of our websites and services. By accessing or using CyberNeoGen, you agree to be bound by these Terms.
    
CyberNeoGen is a bug bounty platform that connects ethical hackers with organizations seeking to improve their cybersecurity. These Terms outline the rules for using our platform and the relationship between users, hackers, and client companies.`,
  },
  {
    title: "2. Definitions",
    body: `Platform: The CyberNeoGen website, applications, and services.\nUser: Any individual who accesses or uses the Platform.\nResearcher: An ethical hacker who participates in bug bounty programs.\nClient: A company or organization that hosts bug bounty programs on the Platform.`,
  },
  {
    title: "3. Account Registration",
    body: `To use certain features of the Platform, you must register for an account. You agree to provide accurate information during registration and to keep your account credentials secure.`,
    subpoints: [
      {
        subtitle: "3.1 Account Types",
        bullets: [
          "Researcher accounts are for individuals who wish to participate in bug bounty programs.",
          "Client accounts are for organizations that wish to host bug bounty programs.",
          "Each account type has specific verification requirements and privileges.",
        ],
      },
    ],
  },
  {
    title: "4. Platform Rules",
    bullets: [
      "All users must adhere to the following rules when using the Platform.",
      "Do not engage in illegal activities.",
      "Do not attempt to compromise the security of the Platform itself unless explicitly authorized.",
      "Do not share submitted information obtained through the Platform without proper authorization.",
      "Do not misuse multiple accounts or misrepresent yourself.",
      "Do not interfere with other users’ access or use of the Platform.",
      "Violation of these rules may result in account suspension or termination.",
    ],
  },
  {
    title: "5. Intellectual Property",
    body: `The Platform and its content are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from the Platform without proper authorization.`,
  },
  {
    title: "6. Limitation of Liability",
    body: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, CYBERNEOGEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.
    
CYBERNEOGEN’S TOTAL LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID CYBERNEOGEN (IF ANY) IN THE SIX (6) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY.`,
  },
  {
    title: "7. Changes to Terms",
    body: `We may modify these Terms at any time. You will receive notice of significant changes. Your continued use of the Platform after such changes constitutes your agreement to the revised Terms.`,
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10 md:px-20 relative">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6">
          <h2 className="text-[16px] font-semibold text-gray-800">
            Legal Documents
          </h2>
          <ul className="space-y-3">
            {legalLinks.map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-blue-600 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg shadow-md mt-10">
            <p className="text-[13px] text-gray-700 mb-2">
              Need legal help? <br />
              See a question about our legal policies?
            </p>
            <div className="space-y-2">
              <a href="#" className="text-blue-600 text-sm underline block">
                Visit our FAQ
              </a>
              <a href="#" className="text-blue-600 text-sm underline block">
                Contact Support
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="md:w-3/4 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: April 11, 2025</p>

          {termsContent.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 space-y-4"
            >
              <h2 className="font-semibold text-gray-900 text-[15px]">
                {section.title}
              </h2>
              {section.body && (
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {section.body}
                </p>
              )}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {section.subpoints &&
                section.subpoints.map((sub, j) => (
                  <div key={j}>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                      {sub.subtitle}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {sub.bullets.map((point, k) => (
                        <li key={k}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
          <p className="text-sm text-gray-500 mt-4">
            For questions about these Terms, contact us at{" "}
            <a
              href="mailto:legal@cyberneogen.com"
              className="text-blue-600 underline"
            >
              legal@cyberneogen.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
