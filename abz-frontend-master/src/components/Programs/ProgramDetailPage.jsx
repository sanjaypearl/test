import React from "react";

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
  },
};

const ProgramDetailPage = ({ params }) => {
  const program = dummyProgramDetails[params.slug];

  if (!program) return <div className="text-white p-10">Program not found</div>;

  return (
    <div className="min-h-screen bg-[#fdf5e6] text-black px-6 py-10">
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
          <span>Policy</span>
          <span>Scope</span>
          <span>Announcement</span>
          <span>Half of time</span>
          <span>Challenges</span>
        </div>

        <div className="bg-[#fff2da] border border-yellow-500 rounded-md p-6 space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailPage;
