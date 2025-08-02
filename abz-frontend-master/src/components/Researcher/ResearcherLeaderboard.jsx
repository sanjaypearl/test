"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const researchers = [
  {
    name: "Marcus Chen",
    title: "Elite Researcher",
    reports: 87,
    bounty: "$156,750",
    points: 24890,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Sophia Rodriguez",
    title: "Elite Researcher",
    reports: 76,
    bounty: "$142,300",
    points: 21450,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Jamal Washington",
    title: "Elite Researcher",
    reports: 65,
    bounty: "$118,900",
    points: 19780,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
  {
    name: "Alex Rivera",
    title: "Elite Researcher",
    reports: 42,
    bounty: "$78,350",
    points: 12450,
    avatar: "https://i.pravatar.cc/40?img=4",
  },
  {
    name: "Emily Tanaka",
    title: "Senior Researcher",
    reports: 38,
    bounty: "$64,200",
    points: 10980,
    avatar: "https://i.pravatar.cc/40?img=5",
  },
  {
    name: "David Kim",
    title: "Senior Researcher",
    reports: 31,
    bounty: "$52,800",
    points: 9340,
    avatar: "https://i.pravatar.cc/40?img=6",
  },
];

export default function ResearcherLeaderboard() {
  const [timePeriod, setTimePeriod] = useState("Month");

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Researcher Leaderboard</h2>
        <div className="flex gap-4 items-center">
          <select className="border border-gray-300 px-2 py-1 text-sm rounded">
            <option>All Programs</option>
            <option>SecureBank</option>
          </select>
          <div className="flex border border-gray-300 rounded overflow-hidden text-sm">
            <button
              className={`px-4 py-1 ${
                timePeriod === "Month" ? "bg-blue-600 text-white" : "bg-white"
              }`}
              onClick={() => setTimePeriod("Month")}
            >
              Month
            </button>
            <button
              className={`px-4 py-1 ${
                timePeriod === "All Time"
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
              onClick={() => setTimePeriod("All Time")}
            >
              All Time
            </button>
          </div>
        </div>
      </div>

      {/* Ranking Banner */}
      <div className="bg-gray-600 text-white p-6 rounded shadow-md flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">#4 Your Current Ranking</p>
          <p className="text-sm text-blue-200">
            Keep up the good work! You’re in the top 5%
          </p>
        </div>
        <div className="text-right space-y-1">
          <p>
            Accepted Reports: <strong>42</strong>
          </p>
          <p>
            Total Bounty: <strong>$78,350</strong>
          </p>
          <p>
            Points: <strong>12,450</strong>
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-300 rounded">
        <div className="flex justify-between p-4">
          <p className="font-semibold">Top Researchers</p>
          <div className="flex items-center text-sm">
            <span className="mr-1">Sort by:</span>
            <select className="border border-gray-300 px-2 py-1 rounded text-sm">
              <option>Points</option>
              <option>Total Bounty</option>
              <option>Reports</option>
            </select>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Rank</th>
              <th className="p-3">Researcher</th>
              <th className="p-3">Accepted Reports</th>
              <th className="p-3">Total Bounty</th>
              <th className="p-3">Points</th>
            </tr>
          </thead>
          <tbody>
            {researchers.map((r, i) => (
              <tr
                key={r.name}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3 font-medium">#{i + 1}</td>
                <td className="p-3 flex items-center gap-3">
                  <img src={r.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-gray-500">{r.title}</p>
                  </div>
                </td>
                <td className="p-3">{r.reports}</td>
                <td className="p-3">{r.bounty}</td>
                <td className="p-3 font-semibold">
                  {r.points.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between p-4 text-sm items-center">
          <p>Showing 6 of 250 researchers</p>
          <div className="flex gap-2">
            <button className="border border-gray-300 px-3 py-1 rounded">
              Previous
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Your Progress */}
        <div className="bg-white border border-gray-300 rounded p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Your Progress</p>
          <p className="text-xl font-bold">2,330 points</p>
          <p className="text-xs text-gray-400 mb-4">To next rank</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            View Your Stats
          </button>
        </div>

        {/* Top Program */}
        <div className="bg-white border border-gray-300 rounded p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Top Program</p>
          <p className="font-medium">SecureBank</p>
          <p className="text-xs text-gray-400">Financial Services</p>
          <div className="mt-2 text-sm">
            <p>
              Your Reports: <strong>12</strong>
            </p>
            <p>
              Your Earnings: <strong>$24,500</strong>
            </p>
          </div>
          <button className="mt-3 border border-gray-300 text-blue-600 px-4 py-1 rounded text-sm">
            View Programs
          </button>
        </div>

        {/* Messages */}
        <div className="bg-white border border-gray-300 rounded p-4">
          <p className="text-sm text-gray-500 mb-2">Messages</p>
          <div className="space-y-2 text-sm">
            <div>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-gray-600 text-xs">
                Your report has been validated...
              </p>
            </div>
            <div>
              <p className="font-medium">Michael Torres</p>
              <p className="text-gray-600 text-xs">
                Can you provide more details...
              </p>
            </div>
          </div>
          <button className="mt-4 border border-gray-300 text-blue-600 px-4 py-1 rounded text-sm w-full">
            View Messages
          </button>
        </div>
      </div>
    </div>
  );
}
