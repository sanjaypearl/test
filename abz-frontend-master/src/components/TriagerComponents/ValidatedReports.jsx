"use client";
import { useState } from "react";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const reportsData = [
  {
    title: "SQL Injection in Login Form",
    researcher: "Marcus Johnson",
    username: "@marcsecurity",
    date: "Oct 12, 2023",
    severity: "Critical",
    status: "Fixed",
    avatar: "/person.jpg",
  },
  {
    title: "Authentication Bypass in API",
    researcher: "Sophia Rodriguez",
    username: "@sophiasec",
    date: "Oct 10, 2023",
    severity: "Critical",
    status: "Fixed",
    avatar: "/person.jpg",
  },
  {
    title: "XSS in User Profile Page",
    researcher: "Aiden Park",
    username: "@aidensec",
    date: "Oct 8, 2023",
    severity: "High",
    status: "Fixed",
    avatar: "/person.jpg",
  },
  {
    title: "CSRF in Account Settings",
    researcher: "Leila Hassan",
    username: "@leilahsec",
    date: "Oct 5, 2023",
    severity: "High",
    status: "In Progress",
    avatar: "/person.jpg",
  },
  {
    title: "Insecure Direct Object Reference",
    researcher: "David Wilson",
    username: "@davidfence",
    date: "Oct 2, 2023",
    severity: "Medium",
    status: "Won't Fix",
    avatar: "/person.jpg",
  },
  {
    title: "Server-Side Request Forgery",
    researcher: "Elena Volkov",
    username: "@elenavolkov",
    date: "Sep 28, 2023",
    severity: "Critical",
    status: "Fixed",
    avatar: "/person.jpg",
  },
];

const statusColor = {
  Fixed: "text-green-600",
  "In Progress": "text-blue-600",
  "Won't Fix": "text-purple-600",
};

const severityColor = {
  Critical: "text-red-600 font-semibold",
  High: "text-orange-500",
  Medium: "text-yellow-500",
};

export default function ValidatedReports() {
  const [tab, setTab] = useState("Monthly");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Validated Reports</h2>
        <div className="flex gap-2">
          <button className="border border-gray-300 px-4 py-1 rounded bg-white">
            Export CSV
          </button>
          <button className="border border-gray-300 px-4 py-1 rounded bg-white">
            Export PDF
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded">
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between mb-3">
          <div className="flex gap-2">
            <span className="font-semibold">Validated Reports</span>
            <span className="text-blue-600 underline cursor-pointer">
              243 Reports
            </span>
          </div>
          <input
            className="border border-gray-300 px-3 py-1 rounded w-64"
            type="text"
            placeholder="Search reports..."
          />
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-200 text-sm">
            <tr>
              <th className="p-2">Report Title</th>
              <th className="p-2">Researcher</th>
              <th className="p-2">Date Validated</th>
              <th className="p-2">Severity</th>
              <th className="p-2">Forwarded</th>
              <th className="p-2">Disposition</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report, i) => (
              <tr
                key={i}
                className="border-b border-gray-300 hover:bg-gray-50 text-sm"
              >
                <td className="p-2 font-medium">{report.title}</td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={report.avatar}
                    alt={report.researcher}
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <div>{report.researcher}</div>
                    <div className="text-gray-500 text-xs">
                      {report.username}
                    </div>
                  </div>
                </td>
                <td className="p-2">{report.date}</td>
                <td className={`p-2 ${severityColor[report.severity]}`}>
                  {report.severity}
                </td>
                <td className="p-2 text-green-600">
                  <FaCheckCircle />
                </td>
                <td className={`p-2 ${statusColor[report.status]}`}>
                  {report.status}
                </td>
                <td className="p-2 text-blue-500 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <span>Showing 1-6 of 243 reports</span>
          <div className="flex gap-1">
            <button className="px-2 py-1 border border-gray-300 rounded">
              Previous
            </button>
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`px-2 py-1 border border-gray-300 rounded ${
                  n === 1 ? "bg-blue-600 text-white" : ""
                }`}
              >
                {n}
              </button>
            ))}
            <button className="px-2 py-1 border border-gray-300 rounded">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-8 bg-white p-4 rounded shadow">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold text-lg">Validation Statistics</h3>
          <div className="flex gap-2">
            {["Weekly", "Monthly", "Yearly"].map((type) => (
              <button
                key={type}
                onClick={() => setTab(type)}
                className={`px-3 py-1 rounded ${
                  tab === type ? "bg-blue-600 text-white" : "bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pie Chart Placeholder */}
          <div className="bg-gray-100 rounded h-64 flex items-center justify-center text-gray-500">
            Validation Status Distribution (Pie Chart)
          </div>

          {/* Bar Chart Placeholder */}
          <div className="bg-gray-100 rounded h-64 flex items-center justify-center text-gray-500">
            Severity Distribution (Bar Chart)
          </div>
        </div>
      </div>
    </div>
  );
}
