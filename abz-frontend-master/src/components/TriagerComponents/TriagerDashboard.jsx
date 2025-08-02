"use client";

import { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import { Plus, Minus, CheckCircle, XCircle, User, Search } from "lucide-react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function TriagerDashboard() {
  const [selectedView, setSelectedView] = useState("Monthly");

  const metrics = [
    {
      title: "New Incoming",
      count: 78,
      change: "+12 since yesterday",
    },
    {
      title: "Assigned",
      count: 35,
      change: "-5 since yesterday",
    },
    {
      title: "Validated",
      count: 312,
      change: "+28 this week",
    },
    {
      title: "Rejected",
      count: 21,
      change: "+5 this week",
    },
  ];

  const lineChartData = {
    labels: Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`),
    datasets: [
      {
        label: "Incoming Reports",
        data: [30, 35, 32, 40, 50, 47, 44, 38, 31, 27, 25, 22],
        borderColor: "#1E40AF",
        backgroundColor: "#1E40AF",
        tension: 0.4,
      },
      {
        label: "Validated Reports",
        data: [25, 28, 30, 36, 40, 42, 44, 47, 50, 53, 56, 60],
        borderColor: "#F97316",
        backgroundColor: "#F97316",
        tension: 0.4,
      },
      {
        label: "Rejected Reports",
        data: [5, 8, 7, 6, 6, 7, 8, 9, 10, 12, 13, 14],
        borderColor: "#2563EB",
        backgroundColor: "#2563EB",
        tension: 0.4,
      },
    ],
  };

  const pieChartData = {
    labels: ["Validated (93.7%)", "Rejected (6.3%)"],
    datasets: [
      {
        data: [93.7, 6.3],
        backgroundColor: ["#3B82F6", "#F97316"],
        borderWidth: 1,
      },
    ],
  };

  const recentActivity = [
    {
      id: 1,
      name: "Marcus Johnson",
      action: "submitted a new vulnerability report",
      detail: "SQL Injection in login form - Critical Severity",
      time: "2 minutes ago",
    },
    {
      id: 2,
      name: "You",
      action: "validated report #4582",
      detail: "XSS Vulnerability in User Profile - High Severity",
      time: "15 minutes ago",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      action: "updated report #4579",
      detail: "Added proof of concept for CSRF vulnerability",
      time: "22 minutes ago",
    },
    {
      id: 4,
      name: "David Kim",
      action: "rejected report #4576",
      detail: "Duplicate of previously reported issue #4498",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold">Welcome, Sarah Chen</h1>
      <p className="text-sm text-gray-500">
        Here's your triage overview for today
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.count}</h2>
            <p className="text-xs text-blue-500">{item.change}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Report Trends</h2>
            <div className="space-x-2">
              {["Weekly", "Monthly", "Yearly"].map((label) => (
                <button
                  key={label}
                  onClick={() => setSelectedView(label)}
                  className={`px-3 py-1 text-sm border rounded ${
                    selectedView === label
                      ? "bg-blue-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <Line data={lineChartData} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Report Distribution</h2>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <a href="#" className="text-blue-600 text-sm">
            View all
          </a>
        </div>
        <div className="space-y-4">
          {recentActivity.map((act) => (
            <div key={act.id} className="flex items-start space-x-4">
              <User className="w-6 h-6 mt-1 text-blue-600" />
              <div>
                <p className="text-sm font-medium">
                  {act.name}{" "}
                  <span className="font-normal text-gray-600">
                    {act.action}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{act.detail}</p>
                <p className="text-xs text-gray-400">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
