"use client";
import React, { useState } from "react";

const StatCard = ({ title, value, change, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex-1">
    <div className="text-gray-600">{title}</div>
    <div className="text-2xl font-bold text-blue-600 mt-1">{value}</div>
    <div className="text-green-500 text-sm mt-1">{change}</div>
    <div className="mt-2">{icon}</div>
  </div>
);

const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-block w-11 h-6 align-middle select-none">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all duration-300" />
    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-5" />
  </label>
);

const RecentActivity = ({ activities }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex-1">
    <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
    <ul className="space-y-2 text-sm text-gray-700">
      {activities.map((act, i) => (
        <li key={i} className={`border-l-4 pl-2 ${act.color}`}>
          <strong>{act.title}</strong> <br />
          <span className="text-gray-500">{act.time}</span>
        </li>
      ))}
    </ul>
    <button className="mt-3 text-blue-600 text-sm hover:underline">
      View All Activity
    </button>
  </div>
);

const TopPrograms = ({ programs }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-md font-semibold mb-2">Top Programs</h2>
    <ul className="space-y-2 text-sm">
      {programs.map((p, i) => (
        <li key={i} className="flex justify-between">
          <span>{p.name}</span>
          <span className="text-green-600">{p.range}</span>
        </li>
      ))}
    </ul>
    <button className="mt-3 text-blue-600 text-sm hover:underline">
      View All Programs
    </button>
  </div>
);

const SkillsCard = ({ skills }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-md font-semibold mb-2">Your Skills</h2>
    {skills.map((s, i) => (
      <div key={i} className="mb-2">
        <div className="flex justify-between text-sm">
          <span>{s.name}</span>
          <span className="text-gray-500">{s.level}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded">
          <div
            className={`h-2 rounded ${s.color}`}
            style={{ width: s.percent }}
          ></div>
        </div>
      </div>
    ))}
    <button className="mt-3 text-sm text-blue-600 hover:underline">
      Update Skills
    </button>
  </div>
);

const LeaderboardCard = ({ position, stats }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h2 className="text-md font-semibold mb-2">Leaderboard Position</h2>
    <div className="text-3xl font-bold text-blue-500 mb-1">#{position}</div>
    <div className="text-xs text-gray-500 mb-2">Global Rank</div>
    <div className="grid grid-cols-1 gap-1 text-sm text-gray-700">
      <div>Total Points: {stats.total}</div>
      <div>This Month : {stats.month}</div>
      <div>Critical Findings: {stats.critical}</div>
    </div>
    <button className="mt-3 text-blue-600 text-sm hover:underline">
      View Leaderboard
    </button>
  </div>
);

const ResearcherDashboard = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome back, Alex Rivera</h1>
        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Programs
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit New Report
          </button>
          <button className="border px-4 py-2 rounded">Update Profile</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Reports Submitted"
          value="127"
          change="↑5% from last month"
        />
        <StatCard
          title="Reports Accepted"
          value="89"
          change="↑8% from last month"
        />
        <StatCard
          title="Total Bounty"
          value="$24,750"
          change="↑5% from last month"
        />
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-64">
          <h2 className="text-md font-semibold mb-2">
            Reports Submitted Over Time
          </h2>
          {/* Simulated Chart Area */}
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            [Chart Placeholder]
          </div>
        </div>
        <RecentActivity
          activities={[
            {
              title: "Report #R-9872 Accepted",
              time: "2 hours ago - $1,200 bounty",
              color: "border-green-500",
            },
            {
              title: "Report #R-9875 Needs More Info",
              time: "Yesterday - Awaiting response",
              color: "border-yellow-400",
            },
            {
              title: "Joined FinTech Security Program",
              time: "2 days ago",
              color: "border-blue-400",
            },
            {
              title: "Report #R-9867 Accepted",
              time: "3 days ago - $850 bounty",
              color: "border-green-500",
            },
            {
              title: "Report #R-9870 Rejected",
              time: "4 days ago - Duplicate finding",
              color: "border-red-500",
            },
          ]}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TopPrograms
          programs={[
            { name: "TechGuard Inc.", range: "$5,000–$10,000" },
            { name: "SecureBan", range: "$1,500–$5,000" },
            { name: "K-L Security", range: "$2,000–$3,000" },
            { name: "ShopSafe", range: "$500–$1,500" },
            { name: "MediSecure", range: "$100–$1,000" },
          ]}
        />
        <SkillsCard
          skills={[
            {
              name: "XSS",
              level: "Expert",
              percent: "100%",
              color: "bg-blue-500",
            },
            {
              name: "SQL Injection",
              level: "Advanced",
              percent: "90%",
              color: "bg-blue-400",
            },
            {
              name: "CSR",
              level: "Advanced",
              percent: "85%",
              color: "bg-blue-400",
            },
            {
              name: "Authentication Bypass",
              level: "Intermediate",
              percent: "60%",
              color: "bg-yellow-400",
            },
            {
              name: "Business Logic",
              level: "Intermediate",
              percent: "55%",
              color: "bg-yellow-400",
            },
          ]}
        />
        <LeaderboardCard
          position={14}
          stats={{ total: 12450, month: 2150, critical: 17 }}
        />
      </div>
    </div>
  );
};

export default ResearcherDashboard;
