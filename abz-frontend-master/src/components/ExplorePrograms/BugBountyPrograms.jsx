"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    name: "PaySecure",
    status: "Active",
    description:
      "Global payment processor with focus on secure transactions and fraud prevention",
    tags: ["Web", "API", "Finance"],
    range: "$500 – $15,000",
    badge: "View Program",
  },
  {
    name: "CloudStack",
    status: "Active",
    description:
      "Enterprise cloud infrastructure provider with global data centers",
    tags: ["Web", "API", "Technology"],
    range: "$1,000 – $25,000",
    badge: "View Program",
  },
  {
    name: "ShopNow",
    status: "Active",
    description:
      "Leading e-commerce platform with millions of daily transactions",
    tags: ["Web", "Mobile", "Ecommerce"],
    range: "$250 – $10,000",
    badge: "View Program",
  },
  {
    name: "MediSecure",
    status: "Invite Only",
    description:
      "Healthcare data management platform with strict compliance requirements",
    tags: ["Web", "API", "Healthcare"],
    range: "$1,000 – $20,000",
    badge: "Request Invite",
  },
  {
    name: "FinTrust Bank",
    status: "Active",
    description: "Digital banking platform with advanced security features",
    tags: ["Web", "Mobile", "Finance"],
    range: "$500 – $30,000",
    badge: "View Program",
  },
  {
    name: "TravelSafe",
    status: "Private",
    description:
      "Online travel booking platform with customer-data protection focus",
    tags: ["Web", "Mobile"],
    range: "$300 – $5,000",
    badge: "Apply",
  },
];

const BugBountyPrograms = () => {
  const [range, setRange] = useState(25000);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Filters */}
        <aside className="w-64 bg-white rounded-md shadow p-4 h-fit">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          <div className="mb-6">
            <label className="text-sm font-medium block mb-2">
              Bounty Range
            </label>
            <input
              type="range"
              min={100}
              max={50000}
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-2">
              Min: $500 — Max: ${range}
            </p>
          </div>

          {["Program Type", "Scope", "Industry"].map((section) => (
            <div className="mb-5" key={section}>
              <p className="font-medium text-sm mb-2">{section}</p>
              {[
                "Web",
                "Mobile",
                "API",
                "Finance",
                "Healthcare",
                "Technology",
              ].map((item) => (
                <div key={item} className="flex items-center mb-1">
                  <input type="checkbox" id={item + section} className="mr-2" />
                  <label
                    htmlFor={item + section}
                    className="text-sm text-gray-700"
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          ))}

          <button className="text-blue-600 text-sm mt-4 hover:underline">
            Reset Filters
          </button>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          {/* Header Actions */}
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-semibold">Bug Bounty Programs</h1>
              <p className="text-gray-600 text-sm">
                Discover and participate in security programs from leading
                organizations
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded font-medium text-sm">
                Submit Report
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium text-sm">
                Join as Researcher
              </button>
            </div>
          </div>

          {/* Search & Sort */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search programs by name, scope, or technology..."
              className="w-full md:w-[60%] border rounded-md px-4 py-2 text-sm"
            />
            <div>
              <label className="text-sm mr-2 text-gray-700">Sort by</label>
              <select className="border px-3 py-1 text-sm rounded-md">
                <option>Newest</option>
                <option>Highest Bounty</option>
              </select>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {programs.map((program, index) => (
              <div
                key={program.name}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white p-4 rounded shadow-md relative"
              >
                {program.status === "Active" && (
                  <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    Active
                  </span>
                )}
                {program.status === "Invite Only" && (
                  <span className="absolute top-2 right-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                    Invite Only
                  </span>
                )}
                {program.status === "Private" && (
                  <span className="absolute top-2 right-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                    Private
                  </span>
                )}
                <h3 className="font-semibold text-lg mb-2">{program.name}</h3>
                <p className="text-sm text-gray-700 mb-3">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {program.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Bounty Range: <strong>{program.range}</strong>
                </p>
                <button
                  className={`w-full text-sm font-medium px-4 py-2 rounded ${
                    program.badge === "View Program"
                      ? "bg-blue-600 text-white"
                      : program.badge === "Request Invite"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {program.badge}
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing 6 of 42 programs</span>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-full ${
                    page === 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugBountyPrograms;
