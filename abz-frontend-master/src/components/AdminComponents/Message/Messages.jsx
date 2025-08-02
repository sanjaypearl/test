"use client";

import { useState } from "react";
import Image from "next/image";
import personAvatar from "../../../../public/person.jpg"; // make sure this path is correct

import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const messages = [
  {
    from: "Sarah Chen",
    type: "Researcher",
    subject: "Vulnerability disclosure process question",
    content:
      "I’ve discovered a critical SQL injection vulnerability in the payment processing  system ...",
    date: "Today",
    time: "11:28 AM",
    urgent: false,
  },
  {
    from: "TestSecure",
    type: "Company",
    subject: "Urgent: Security breach notification",
    content:
      "We detected unusual activity on our production servers that may indicate a breach...",
    date: "Today",
    time: "07:12 AM",
    urgent: true,
  },
  {
    from: "Marcus Johnson",
    type: "Triager",
    subject: "Report classification guidelines update",
    content:
      "We’ve been reviewing how we classify reports and noticed some inconsistencies...",
    date: "Yesterday",
    time: "",
    urgent: false,
  },
  {
    from: "GlobalFinance",
    type: "Company",
    subject: "Program scope expansion request",
    content:
      "We are planning to launch a new mobile banking application next month...",
    date: "Oct 12, 2023",
    time: "",
    urgent: false,
  },
  {
    from: "Elena Rodriguez",
    type: "Researcher",
    subject: "Payment issue with bounty #4582",
    content:
      "I was awarded a bounty for report 4582 two weeks ago, but haven’t received the funds yet...",
    date: "Oct 10, 2023",
    time: "",
    urgent: false,
  },
];

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
  datasets: [
    {
      label: "Companies",
      backgroundColor: "#3B82F6",
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
    },
    {
      label: "Researchers",
      backgroundColor: "#F59E0B",
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15)),
    },
  ],
};

const Messages = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
        <div>
          <h1 className="text-xl font-semibold">Messages</h1>
          <p className="text-gray-500 text-sm">
            Manage and respond to researcher and company communications
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Broadcast Message
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search messages..."
          className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto flex-1"
        />
        <div className="flex flex-wrap gap-2">
          {["All", "Companies", "Researchers", "Triagers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded border ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2 ml-auto">
          <button className="border px-3 py-2 rounded">Filter</button>
          <button className="border px-3 py-2 rounded">Sort</button>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded shadow overflow-x-auto mb-6">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3 text-left">From</th>
              <th>Subject & Content</th>
              <th className="text-right pr-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, i) => (
              <tr key={i} className="border-t border-gray-300">
                <td className="p-3 flex items-center gap-2">
                  <Image
                    src={personAvatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                  />
                  <span className="font-medium">{msg.from}</span>
                </td>
                <td className="py-3">
                  <div className="font-semibold text-gray-800 flex items-center gap-2">
                    {msg.subject}
                    {msg.urgent && (
                      <span className="text-xs text-red-500 font-bold">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {msg.content}
                  </div>
                </td>
                <td className="text-right text-gray-500 pr-4">
                  {msg.date}
                  {msg.time && (
                    <div className="text-xs text-gray-400">{msg.time}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 text-gray-500 text-sm">
          <span>Showing 1–5 of 42 messages</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded border ${
                  n === 1 ? "bg-blue-600 text-white" : ""
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Message Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Total Messages</p>
          <h3 className="text-2xl font-semibold">1,247</h3>
          <p className="text-xs text-green-500">+12% from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Response Rate</p>
          <h3 className="text-2xl font-semibold">94%</h3>
          <p className="text-xs text-green-500">+2% from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Avg. Response Time</p>
          <h3 className="text-2xl font-semibold">4.2h</h3>
          <p className="text-xs text-green-500">+1h from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500 text-sm">Unread Messages</p>
          <h3 className="text-2xl font-semibold">23</h3>
          <p className="text-xs text-red-500">–3 from yesterday</p>
        </div>
      </div>

      {/* Message Volume Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-md font-medium mb-2">
          Message Volume by User Type
        </h3>
        <Bar data={chartData} height={220} />
      </div>
    </div>
  );
};

export default Messages;
