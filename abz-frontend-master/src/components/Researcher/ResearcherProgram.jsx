"use client";
import React, { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

const data = [
  {
    id: 1,
    name: "SecureBank VDP",
    industry: "Financial Services",
    bountyRange: "$500-$10,000",
    scope: "Web Applications, Mobile Apps",
    updated: "May 12, 2023",
    submissions: 747,
    description:
      "SecureBank’s vulnerability disclosure program focuses on their online banking platform, mobile applications, and customer-facing APIs.",
    logo: "https://cdn-icons-png.flaticon.com/512/2889/2889676.png",
  },
  {
    id: 2,
    name: "TechNova Security",
    industry: "Technology",
    bountyRange: "$1,000-$25,000",
    scope: "Cloud Services, API",
    updated: "June 3, 2023",
    submissions: 583,
    description:
      "TechNova’s program covers their cloud infrastructure, developer APIs, and connected device ecosystem with generous rewards.",
    logo: "https://cdn-icons-png.flaticon.com/512/3004/3004451.png",
  },
  {
    id: 3,
    name: "HealthGuard Systems",
    industry: "Healthcare",
    bountyRange: "$300-$5,000",
    scope: "Web Portal, Patient Systems",
    updated: "April 28, 2023",
    submissions: 1932,
    description:
      "HealthGuard’s program focuses on their patient portal, healthcare provider systems, and medical data security.",
    logo: "https://cdn-icons-png.flaticon.com/512/859/859270.png",
  },
  {
    id: 4,
    name: "ShopSmart Security",
    industry: "Ecommerce",
    bountyRange: "$300-$8,000",
    scope: "Web Store, Mobile Apps",
    updated: "May 30, 2023",
    submissions: 1325,
    description:
      "ShopSmart’s program covers their e-commerce platform, payment processing systems, and customer data protection.",
    logo: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
  },
  {
    id: 5,
    name: "GovSecure Program",
    industry: "Government",
    bountyRange: "$500-$7,500",
    scope: "Public Websites, Citizen Portals",
    updated: "June 10, 2023",
    submissions: 723,
    description:
      "GovSecure’s program focuses on public-facing government websites, citizen service portals, and data protection systems.",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },
  {
    id: 6,
    name: "ConnectSocial VDP",
    industry: "Social Media",
    bountyRange: "$700-$30,000",
    scope: "Web Platform, Mobile",
    updated: "June 15, 2023",
    submissions: 1473,
    description:
      "ConnectSocial’s program covers their social media platform, messaging systems, and user privacy protection mechanisms.",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
  },
];

export default function ResearcherProgram() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-bold mb-1">Bug Bounty Programs</h1>
      <p className="text-sm text-gray-500 mb-6">
        Browse and submit to public vulnerability disclosure programs
      </p>

      {/* Filter */}
      <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by name or keyword..."
            className="border border-gray-300 px-4 py-2 rounded-md w-64 text-sm"
          />
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
            <option>All Industries</option>
          </select>
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
            <option>All Scopes</option>
          </select>
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
            <option>Any Amount</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <select className="border border-gray-300 px-4 py-2 rounded-md text-sm">
            <option>Recently Updated</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
            Submit Report
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-10 h-10 rounded-md object-contain"
                  />
                  <div>
                    <h2 className="text-md text-gray-900  font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">{item.industry}</p>
                  </div>
                </div>
                <span className="text-blue-600 text-sm font-semibold">
                  {item.bountyRange}
                </span>
              </div>

              <p className="text-sm text-gray-700 mt-3">{item.scope}</p>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <CalendarDays className="w-4 h-4" />
                <span>Updated: {item.updated}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                <Clock className="w-4 h-4" />
                <span>{item.submissions} submissions</span>
              </div>

              <p className="text-sm text-gray-600 mt-3">{item.description}</p>
            </div>

            <button className="mt-4 w-full bg-gray-300 text-gray-800 font-bold py-2 rounded hover:bg-gray-400 text-sm">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Showing {currentData.length} of {data.length} programs
        </p>

        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border border-gray-300 text-sm ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
