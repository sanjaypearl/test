import React from "react";
import {
  Users,
  Bug,
  ShieldCheck,
  Clock,
  Filter,
  PlusCircle,
} from "lucide-react";

const programs = [
  {
    name: "Web Application Security Program",
    status: "Active",
    description:
      "Comprehensive security assessment of our customer-facing web applications and APIs, focusing on OWASP Top 10 vulnerabilities.",
    lastUpdated: "2 days ago",
    researchers: 15,
    submissions: 47,
    verified: 23,
    avatars: ["/person.jpg", "/person.jpg", "/person.jpg"],
  },
  {
    name: "Mobile Application Security Audit",
    status: "Paused",
    description:
      "Security assessment of iOS and Android mobile applications, focusing on data storage, authentication mechanisms, and API communications.",
    lastUpdated: "2 weeks ago",
    researchers: 10,
    submissions: 32,
    verified: 18,
    avatars: ["/person.jpg", "/person.jpg", "/person.jpg"],
  },
  {
    name: "Cloud Infrastructure Assessment",
    status: "Active",
    description:
      "Security review of AWS cloud infrastructure, including IAM configurations, S3 bucket permissions, and network security groups.",
    lastUpdated: "5 days ago",
    researchers: 8,
    submissions: 29,
    verified: 14,
    avatars: ["/person.jpg", "/person.jpg", "/person.jpg"],
  },
  {
    name: "Internal Network Security Assessment",
    status: "Draft",
    description:
      "Evaluation of internal network security, including firewall configurations, VPN access, and internal access controls.",
    lastUpdated: "1 week ago",
    researchers: 0,
    submissions: 0,
    verified: 0,
    avatars: [],
  },
  {
    name: "Payment Processing Security Review",
    status: "Completed",
    description:
      "Comprehensive security assessment of payment processing systems, focusing on PCI DSS compliance and secure transaction handling.",
    lastUpdated: "3 months ago",
    researchers: 10,
    submissions: 53,
    verified: 31,
    avatars: ["/person.jpg", "/person.jpg", "/person.jpg"],
  },
];

const statusColors = {
  Active: "text-green-600",
  Paused: "text-orange-500",
  Draft: "text-gray-500",
  Completed: "text-blue-600",
};

const ProgramCard = ({
  name,
  status,
  description,
  lastUpdated,
  researchers,
  submissions,
  verified,
  avatars,
}) => (
  <div className="border border-gray-300 rounded-lg bg-white p-4 shadow-sm">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-lg flex items-center gap-2">
          {name}
          <span className={`text-xs font-medium ${statusColors[status]}`}>
            ● {status}
          </span>
        </h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <div className="text-sm text-gray-500">Last updated: {lastUpdated}</div>
    </div>

    <div className="flex justify-between mt-4 items-center flex-wrap gap-4">
      <div className="flex items-center gap-2">
        {/* Avatars */}
        <div className="flex -space-x-2">
          {avatars.length ? (
            avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="avatar"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            ))
          ) : (
            <span className="text-xs text-gray-500">⚪ Not yet launched</span>
          )}
        </div>
        {researchers > 0 && (
          <span className="text-sm text-gray-700">
            {researchers} researchers participating
          </span>
        )}
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-700 font-medium">
          {submissions} submissions
        </span>
        <span className="text-gray-700 font-medium">
          {verified} verified vulnerabilities
        </span>
        <button className="bg-white border border-gray-300 text-blue-600 hover:bg-gray-100 px-3 py-1.5 rounded-md text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const ProgramsList = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Programs</h2>
          <p className="text-sm text-gray-500">
            Manage your vulnerability disclosure program
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1">
          <PlusCircle size={16} />
          Create New Program
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-md shadow-sm border border-gray-300 mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search programs..."
          className="border border-gray-300 px-3 py-2 rounded-md text-sm w-full md:w-1/3"
        />
        <select className="border border-gray-300 px-3 py-2 rounded-md text-sm">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Paused</option>
          <option>Completed</option>
          <option>Draft</option>
        </select>
        <button className="ml-auto bg-gray-100 border border-gray-300 px-3 py-2 rounded-md text-sm flex items-center gap-1">
          <Filter size={16} />
          More Filter
        </button>
      </div>

      {/* Program Cards */}
      <div className="space-y-4">
        {programs.map((program, idx) => (
          <ProgramCard key={idx} {...program} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
        <p>Showing 5 of 12 programs</p>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 rounded bg-gray-100 border border-gray-300">
            1
          </button>
          <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
          <button className="px-2 py-1 rounded hover:bg-gray-100">›</button>
          <button className="px-2 py-1 rounded hover:bg-gray-100">»</button>
        </div>
      </div>
    </main>
  );
};

export default ProgramsList;
