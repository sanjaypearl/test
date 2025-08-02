"use client";

import { use } from "react";

const dummyProgramDetails = {
  CyberNeoGen: {
    name: "Hike - CyberNeoGen",
    reports: 163,
    assets: 6,
    range: "$100-$500",
    policy: `At Hike Private Limited, we are committed to the safety and security of our services and the integrity of its data...`,
    disclosurePolicy: [
      "Please inform us promptly about potential vulnerabilities.",
      "Our team will work quickly to resolve the issue.",
      "Avoid actions that disrupt or damage our services.",
    ],
    reportingGuidelines: [
      "Provide detailed reports with steps to reproduce.",
      "Include screenshots or PoC code.",
      "Submit one vulnerability per report.",
    ],
    eligibility: [
      "Must be the first person to responsibly report the vulnerability.",
      "Must follow the scope and rules outlined.",
    ],
    exclusions: [
      "Physical or social engineering attempts (this includes phishing attacks against Hike employees)",
      "Ability to send push notifications/SMS messages/emails without the ability to change content",
      "Issues that exist on third-party pages (Twitter, Facebook, LinkedIn, etc.)",
      "Vulnerabilities in third-party applications that integrate with Hike",
      "Best practice concerns like cookie is not marked secure and http only, missing HSTS, CSL/TLS configuration, missing security headers, etc.",
      "Negligible security impact",
      "Attacks requiring physical access to a user's device/computer",
      "Highly speculative reports about theoretical damage",
      "Vulnerabilities as reported by automated tools without additional analysis as to how they're an issue",
      "Denial of Service attacks or performance issues without demonstrating vulnerability",
      "Subdomain takeovers - please demonstrate that you are able to take over the page by leaving a non-offensive message, such as your username",
      "CSV injection",
      "Tabnabbing",
      "Rate limiting",
      "Vulnerabilities that cannot be used to exploit other users or Hike - e.g. self-xss or having a user paste JavaScript into the browser console",
      "Cross-site request forgery issues",
      "Clickjacking on pages with no sensitive actions",
      "Missing cookie flags on non-authentication cookies",
      "Classic CSRF issues (with CORS) without security implications (Logout CSRF, etc.)",
      "Issues that require physical access to a victim's computer/device",
      "Stack traces that disclose of directory listings",
      "General Distributed and Distributed Denial of Service(DDoS) attacks",
      "Assets with DNS entries for 'Test', 'Stag', 'Staging' and Dev environments are not eligible for testing in our bug bounty program.",
      "Issues on non-hike assets like hikapp.domain.tld, hikapp.internal.tld",
    ],
    androidExclusions: [
      "Exploits using custom ROMs",
      "Absence of certificate pinning",
      "Logcat/Xposed/Frida/Clipboard data leakage",
      "Tapjacking attacks",
      "Exploits reproducible only on rooted/jailbroken devices",
      "Android backup vulnerability",
      "Any vulnerability that requires root",
      "Application crashes",
      "Discovery of hardcoded keys in mobile applications without a feasible attack scenario",
      "Sensitive data stored in file in app private directory",
      "Any exploit that requires tricking the user into installing a malicious app",
    ],
    inScope: ["GetRushApp"],
    rewards: [
      { severity: "Critical", amount: "$1000" },
      { severity: "High", amount: "$1000" },
      { severity: "Medium", amount: "$1000" },
      { severity: "Low", amount: "$1000" },
    ],
    eligibilityOptions: ["CyberNeoGen", "Swag"],
  },
  airmeet: {
    name: "Hike - CyberNeoGen",
    reports: 163,
    assets: 6,
    range: "$100-$500",
    policy: `At Hike Private Limited, we are committed to the safety and security of our services and the integrity of its data...`,
    disclosurePolicy: [
      "Please inform us promptly about potential vulnerabilities.",
      "Our team will work quickly to resolve the issue.",
      "Avoid actions that disrupt or damage our services.",
    ],
    reportingGuidelines: [
      "Provide detailed reports with steps to reproduce.",
      "Include screenshots or PoC code.",
      "Submit one vulnerability per report.",
    ],
    eligibility: [
      "Must be the first person to responsibly report the vulnerability.",
      "Must follow the scope and rules outlined.",
    ],
    exclusions: [
      "Physical or social engineering attempts (this includes phishing attacks against Hike employees)",
      "Ability to send push notifications/SMS messages/emails without the ability to change content",
      "Issues that exist on third-party pages (Twitter, Facebook, LinkedIn, etc.)",
      "Vulnerabilities in third-party applications that integrate with Hike",
      "Best practice concerns like cookie is not marked secure and http only, missing HSTS, CSL/TLS configuration, missing security headers, etc.",
      "Negligible security impact",
      "Attacks requiring physical access to a user's device/computer",
      "Highly speculative reports about theoretical damage",
      "Vulnerabilities as reported by automated tools without additional analysis as to how they're an issue",
      "Denial of Service attacks or performance issues without demonstrating vulnerability",
      "Subdomain takeovers - please demonstrate that you are able to take over the page by leaving a non-offensive message, such as your username",
      "CSV injection",
      "Tabnabbing",
      "Rate limiting",
      "Vulnerabilities that cannot be used to exploit other users or Hike - e.g. self-xss or having a user paste JavaScript into the browser console",
      "Cross-site request forgery issues",
      "Clickjacking on pages with no sensitive actions",
      "Missing cookie flags on non-authentication cookies",
      "Classic CSRF issues (with CORS) without security implications (Logout CSRF, etc.)",
      "Issues that require physical access to a victim's computer/device",
      "Stack traces that disclose of directory listings",
      "General Distributed and Distributed Denial of Service(DDoS) attacks",
      "Assets with DNS entries for 'Test', 'Stag', 'Staging' and Dev environments are not eligible for testing in our bug bounty program.",
      "Issues on non-hike assets like hikapp.domain.tld, hikapp.internal.tld",
    ],
    androidExclusions: [
      "Exploits using custom ROMs",
      "Absence of certificate pinning",
      "Logcat/Xposed/Frida/Clipboard data leakage",
      "Tapjacking attacks",
      "Exploits reproducible only on rooted/jailbroken devices",
      "Android backup vulnerability",
      "Any vulnerability that requires root",
      "Application crashes",
      "Discovery of hardcoded keys in mobile applications without a feasible attack scenario",
      "Sensitive data stored in file in app private directory",
      "Any exploit that requires tricking the user into installing a malicious app",
    ],
    inScope: ["GetRushApp"],
    rewards: [
      { severity: "Critical", amount: "$1000" },
      { severity: "High", amount: "$1000" },
      { severity: "Medium", amount: "$1000" },
      { severity: "Low", amount: "$1000" },
    ],
    eligibilityOptions: ["CyberNeoGen", "Swag"],
  },
};

export default function ProgramDetailPage({ params }) {
  const { id } = use(params);
  const program = dummyProgramDetails[id];

  if (!program)
    return (
      <div className="mt-40 text-black p-10">
        <h1 className="text-2xl font-bold mb-4">Program not found</h1>
        <p>No data available for "{id}".</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#ffffff] text-black px-6 py-10 pt-28">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">{program.name}</h1>
          <div className="flex gap-6 text-sm text-gray-700 mb-4">
            <div>
              <strong>{program.reports}</strong> Total Reports
            </div>
            <div>
              <strong>{program.assets}</strong> Assets in Scope
            </div>
            <div>
              <strong>{program.range}</strong> Range
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit Report
          </button>
        </div>

        <div className="border-b border-gray-300 mb-4 flex gap-6 text-blue-600 font-medium">
          <span className="cursor-pointer pb-2 border-b-2 border-blue-600">
            Policy
          </span>
          <span className="cursor-pointer pb-2">Scope</span>
          <span className="cursor-pointer pb-2">Announcement</span>
          <span className="cursor-pointer pb-2">Hall of Fame</span>
          <span className="cursor-pointer pb-2">Challenges</span>
        </div>

        {/* Policy Section - Your original content */}
        <div className="bg-[#fff2da] border border-yellow-500 rounded-md p-6 space-y-6 mb-6">
          <div>
            <h2 className="font-bold text-lg mb-2">
              Welcome to the Hike Bug Bounty Policy 👋
            </h2>
            <p className="text-sm">{program.policy}</p>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-1">Disclosure Policy:</h3>
            <ul className="list-disc pl-6 text-sm">
              {program.disclosurePolicy.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-1">
              Reporting Guidelines:
            </h3>
            <ul className="list-disc pl-6 text-sm">
              {program.reportingGuidelines.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-1">Eligibility:</h3>
            <ul className="list-disc pl-6 text-sm">
              {program.eligibility.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">Exclusions</h2>
            <p className="text-sm mb-3">
              Reports falling into the categories listed below are considered
              out of scope for our Bug Bounty program:
            </p>

            <ul className="list-disc pl-6 text-sm space-y-1.5">
              {program.exclusions.map((exclusion, i) => (
                <li key={i} className="text-gray-800">
                  {exclusion}
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-md mt-6 mb-2">
              Out of scope for Rush android application:
            </h3>
            <ul className="list-disc pl-6 text-sm space-y-1.5">
              {program.androidExclusions.map((exclusion, i) => (
                <li key={i} className="text-gray-800">
                  {exclusion}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In-Scope Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {program.inScope.map((item, i) => (
              <span key={i} className="font-medium">
                {item} In-Scope
              </span>
            ))}
          </div>
          <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded">
            In Scope
          </button>
        </div>

        {/* Rewards Information */}
        <div className="mb-4">
          <h3 className="text-sm mb-2">Rewards Information</h3>
          <div className="flex gap-4">
            {program.rewards.map((reward, i) => {
              const colors = {
                Critical: "bg-red-500",
                High: "bg-orange-500",
                Medium: "bg-yellow-500",
                Low: "bg-green-500",
              };

              return (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      colors[reward.severity]
                    }`}
                  ></span>
                  <span className="text-sm">{reward.severity}</span>
                  <span className="text-sm font-medium">{reward.amount}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Eligibility Badges */}
        <div className="flex gap-4 mt-4">
          {program.eligibilityOptions.includes("CyberNeoGen") && (
            <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
              Eligibility for CyberNeoGen
            </span>
          )}
          {program.eligibilityOptions.includes("Swag") && (
            <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
              Eligibility for Swag
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
