"use client";

import { useState } from "react";
import { Search, BarChart3 } from "lucide-react";

const researchers = [
  {
    id: 1,
    name: "Marcus Chen",
    joined: "Apr 2023",
    avatar: "/person.jpg",
    submitted: 47,
    accepted: 38,
    rate: 81,
    bounty: "$24,850",
    activity: "High",
  },
  {
    id: 2,
    name: "Sophia Rodriguez",
    joined: "Jan 2022",
    avatar: "/person.jpg",
    submitted: 86,
    accepted: 72,
    rate: 84,
    bounty: "$37,200",
    activity: "High",
  },
  {
    id: 3,
    name: "Jamal Washington",
    joined: "Sep 2022",
    avatar: "/person.jpg",
    submitted: 63,
    accepted: 51,
    rate: 81,
    bounty: "$29,750",
    activity: "High",
  },
  {
    id: 4,
    name: "Emma Patel",
    joined: "Mar 2023",
    avatar: "/person.jpg",
    submitted: 32,
    accepted: 24,
    rate: 75,
    bounty: "$18,400",
    activity: "Medium",
  },
  {
    id: 5,
    name: "Tom O’Connor",
    joined: "Nov 2022",
    avatar: "/person.jpg",
    submitted: 28,
    accepted: 19,
    rate: 68,
    bounty: "$12,850",
    activity: "Medium",
  },
];

export default function Researchers() {
  const [search, setSearch] = useState("");

  const filtered = researchers.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Researchers</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Invite Researcher
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-100">
            Send Message
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
        <div className="font-semibold">Active Researchers</div>
        <div className="text-blue-600 font-medium cursor-pointer">42 Total</div>
        <div className="flex items-center gap-2 ml-auto">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search researchers..."
              className="border border-gray-300 px-3 py-2 rounded pl-10 w-64"
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>
          <select className="border border-gray-300 px-3 py-2 rounded text-sm">
            <option>Sort by: Activity Level</option>
            <option>Name</option>
            <option>Acceptance Rate</option>
          </select>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-7 text-sm text-gray-600 bg-white border-t border-gray-300 border-b py-2 px-4 font-semibold">
        <div>Researcher</div>
        <div>Reports Submitted</div>
        <div>Reports Accepted</div>
        <div>Acceptance Rate</div>
        <div>Total Bounty</div>
        <div>Activity Level</div>
        <div>Actions</div>
      </div>

      {/* Researcher Rows */}
      {filtered.map((r) => (
        <div
          key={r.id}
          className="grid grid-cols-7 bg-white items-center border-b  border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <img src={r.avatar} className="w-8 h-8 rounded-full" />
            <div>
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-gray-400">Joined {r.joined}</div>
            </div>
          </div>
          <div>{r.submitted}</div>
          <div>{r.accepted}</div>
          <div className="text-blue-600 font-medium">{r.rate}%</div>
          <div className="font-semibold">{r.bounty}</div>
          <div>
            <div className="text-sm">{r.activity}</div>
            <div className="w-full bg-gray-200 h-1 rounded-full mt-1">
              <div
                className={`h-1 rounded-full ${
                  r.activity === "High"
                    ? "bg-blue-500 w-4/5"
                    : "bg-yellow-500 w-2/4"
                }`}
              ></div>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              But
            </button>
            <button className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              Bu
            </button>
            <button className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              Ut
            </button>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>Showing {filtered.length} of 42 researchers</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`px-3 py-1 rounded ${
                num === 1
                  ? "bg-blue-500 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Researcher Stats */}
      <div className="mt-10 grid grid-cols-3 gap-6 bg-white p-6 rounded shadow-sm text-sm text-gray-700">
        <div>
          <div className="font-semibold text-gray-600">Top Performers</div>
          <div className="text-2xl font-bold mt-1">8</div>
          <div className="text-xs text-gray-400 mt-1">
            Researchers with 90%+ acceptance rate
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-600">Total Bounties Paid</div>
          <div className="text-2xl font-bold mt-1 text-blue-600">$287,450</div>
          <div className="text-xs text-gray-400 mt-1">
            Across all researchers
          </div>
        </div>
        <div>
          <div className="font-semibold text-gray-600">Average Acceptance</div>
          <div className="text-2xl font-bold mt-1 text-blue-600">76%</div>
          <div className="text-xs text-gray-400 mt-1">
            Of all submitted reports
          </div>
        </div>
      </div>

      {/* Horizontal Chart */}
      <div className="mt-6 bg-white p-6 rounded shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <BarChart3 className="w-4 h-4" /> Report Stats
        </h3>
        <div className="space-y-3">
          {researchers.map((r) => (
            <div key={r.id} className="flex items-center gap-2">
              <div className="w-2/3 bg-gray-200 h-3 rounded relative">
                <div
                  className="absolute h-3 bg-blue-500 rounded-l"
                  style={{ width: `${(r.accepted / r.submitted) * 100}%` }}
                ></div>
                <div
                  className="absolute h-3 bg-orange-400 rounded-r"
                  style={{
                    left: `${(r.accepted / r.submitted) * 100}%`,
                    width: `${100 - (r.accepted / r.submitted) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-xs w-1/3 text-right">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
