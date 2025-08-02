"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const chartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Total Reports",
      data: [10, 14, 12, 9, 18, 16, 20, 24, 22, 15, 10, 12],
      backgroundColor: "#3B82F6", // Tailwind Blue-500
      barThickness: 12,
    },
    {
      label: "Accepted Reports",
      data: [4, 8, 6, 5, 10, 9, 15, 20, 18, 11, 6, 8],
      backgroundColor: "#F97316", // Tailwind Orange-500
      barThickness: 12,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: 20,
      },
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: false,
      beginAtZero: true,
      ticks: {
        stepSize: 5,
      },
    },
  },
};

const mockReports = [
  {
    title: "SQL Injection in User Authentication",
    program: "SecureTech Cloud",
    severity: "Critical",
    status: "Accepted",
    date: "Oct 12, 2023",
  },
  {
    title: "Cross-Site Scripting in Comment Section",
    program: "RetailShield E-commerce",
    severity: "High",
    status: "Triaging",
    date: "Oct 8, 2023",
  },
  {
    title: "Insecure Direct Object Reference",
    program: "FinGuard Banking",
    severity: "High",
    status: "Resolved",
    date: "Sep 29, 2023",
  },
  {
    title: "Authentication Bypass in API Endpoint",
    program: "GovSecure Portal",
    severity: "High",
    status: "Accepted",
    date: "Sep 22, 2023",
  },
  {
    title: "Sensitive Data Exposure in Patient Records",
    program: "MediSafe Healthcare",
    severity: "Medium",
    status: "Duplicate",
    date: "Sep 15, 2023",
  },
  {
    title: "Server Misconfiguration in Cloud Storage",
    program: "SecureTech Cloud",
    severity: "Low",
    status: "Rejected",
    date: "Sep 10, 2023",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Accepted":
      return "text-green-600";
    case "Triaging":
      return "text-yellow-600";
    case "Resolved":
      return "text-emerald-600";
    case "Duplicate":
      return "text-yellow-500";
    case "Rejected":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

const getSeverityColor = (severity) => {
  switch (severity) {
    case "Critical":
      return "text-red-600";
    case "High":
      return "text-orange-600";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-blue-600";
    default:
      return "text-gray-600";
  }
};

export default function ResearcherReports() {
  const [filters, setFilters] = useState({
    program: "All Programs",
    severity: "All Severities",
    status: "All Statuses",
    sort: "Newest First",
  });

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">My Reports</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit New Report
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {["program", "severity", "status", "sort"].map((key, idx) => (
          <select
            key={idx}
            className="border border-gray-300 px-3 py-2 rounded text-sm"
            value={filters[key]}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, [key]: e.target.value }))
            }
          >
            {key === "program" && (
              <>
                <option>All Programs</option>
                <option>SecureTech Cloud</option>
                <option>RetailShield E-commerce</option>
                <option>FinGuard Banking</option>
                <option>GovSecure Portal</option>
              </>
            )}
            {key === "severity" && (
              <>
                <option>All Severities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </>
            )}
            {key === "status" && (
              <>
                <option>All Statuses</option>
                <option>Accepted</option>
                <option>Triaging</option>
                <option>Resolved</option>
                <option>Duplicate</option>
                <option>Rejected</option>
              </>
            )}
            {key === "sort" && (
              <>
                <option>Newest First</option>
                <option>Oldest First</option>
              </>
            )}
          </select>
        ))}
      </div>

      {/* Report Table */}
      <div className="border border-gray-300 rounded-md overflow-hidden">
        <div className="divide-y">
          {mockReports.map((report, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center px-4 py-3 text-sm hover:bg-gray-50"
            >
              <div className="col-span-2">{report.title}</div>
              <div>{report.program}</div>
              <div className="flex gap-2">
                <span className={getSeverityColor(report.severity)}>
                  {report.severity}
                </span>
                <span className={getStatusColor(report.status)}>
                  {report.status}
                </span>
              </div>
              <div className="flex items-center justify-end gap-3">
                <span>{report.date}</span>
                <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center text-sm">
        <span>Showing 6 of 24 reports</span>
        <div className="flex gap-1">
          {["Previous", 1, 2, 3, 4, "Next"].map((p, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                p === 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Report Statistics */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Report Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm">total Reports</p>
          </div>
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="text-2xl font-bold">18</p>
            <p className="text-sm">Accepted Reports</p>
          </div>
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="text-2xl font-bold">$8,750</p>
            <p className="text-sm">total Bounties</p>
          </div>
          <div className="bg-gray-100 rounded p-4 text-center">
            <p className="text-2xl font-bold">3</p>
            <p className="text-sm">Critical Findings</p>
          </div>
        </div>

        {/* Bar Chart (Mocked) */}
        <div className="h-64 w-full">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}
