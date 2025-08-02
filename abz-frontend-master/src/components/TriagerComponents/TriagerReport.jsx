"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown, Search } from "lucide-react";

export default function TriagerReport() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    program: "All Programs",
    researcher: "All Researchers",
    sortBy: "Newest First",
  });

  const reports = [
    {
      id: "RPT-2023-0458",
      title: "SQL Injection in Login Form",
      submittedBy: "Marcus Johnson",
      submittedByLevel: "Level 5 Researcher",
      submittedTo: "Web Application Security",
      timestamp: "Oct 12, 2023",
      time: "14:32:45 UTC",
      severity: "Unassigned",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: "RPT-2023-0457",
      title: "Authentication Bypass in Admin Panel",
      submittedBy: "Sophia Rodriguez",
      submittedByLevel: "Level 5 Researcher",
      submittedTo: "Web Application Security",
      timestamp: "Oct 12, 2023",
      time: "11:15:22 UTC",
      severity: "Unassigned",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: "RPT-2023-0456",
      title: "Cross-Site Scripting in Comment Section",
      submittedBy: "Aiden Thompson",
      submittedByLevel: "Level 5 Researcher",
      submittedTo: "Web Application Security",
      timestamp: "Oct 11, 2023",
      time: "23:47:10 UTC",
      severity: "Unassigned",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: "RPT-2023-0455",
      title: "Insecure Direct Object Reference in API",
      submittedBy: "Elena Patel",
      submittedByLevel: "Level 4 Researcher",
      submittedTo: "Mobile Security",
      timestamp: "Oct 11, 2023",
      time: "18:23:05 UTC",
      severity: "Unassigned",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: "RPT-2023-0454",
      title: "Server Misconfiguration in Cloud Instance",
      submittedBy: "Jamal Wilson",
      submittedByLevel: "Level 5 Researcher",
      submittedTo: "Cloud Security",
      timestamp: "Oct 11, 2023",
      time: "09:12:37 UTC",
      severity: "Unassigned",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold mb-2">Incoming Reports</h1>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-4 flex gap-4">
        <div className="col-span-1">
          <label className="text-xs text-gray-600">Date Range</label>
          <div className="flex gap-2 items-center">
            <input
              type="date"
              className="border border-gray-300 px-2 py-1 text-sm rounded w-full"
              value={filters.dateFrom}
              onChange={(e) =>
                setFilters({ ...filters, dateFrom: e.target.value })
              }
            />
            <span>to</span>
            <input
              type="date"
              className="border border-gray-300 px-2 py-1 text-sm rounded w-full"
              value={filters.dateTo}
              onChange={(e) =>
                setFilters({ ...filters, dateTo: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-6 space-x-4 gap-2 ">
          <select className="border border-gray-300 px-2  py-1 text-sm rounded">
            <option>All Programs</option>
          </select>
          <select className="border border-gray-300 px-2 py-1 text-sm rounded">
            <option>All Researchers</option>
          </select>
          <select className="border border-gray-300 px-2 py-1 text-sm rounded">
            <option>Newest First</option>
          </select>
        </div>
        <div className="flex items-end gap-2">
          <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">
            Apply Filters
          </button>
          <button className="border border-gray-300 px-3 py-1 text-sm rounded">
            Reset
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="p-2">Report Title</th>
              <th className="p-2">Submitted By</th>
              <th className="p-2">Submitted To</th>
              <th className="p-2">Timestamp</th>
              <th className="p-2">Severity</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                <td className="p-2">
                  <div className="font-semibold">{report.title}</div>
                  <div className="text-xs text-gray-500">ID: {report.id}</div>
                </td>
                <td className="p-2 flex items-center gap-2">
                  <img
                    src={report.avatar}
                    className="w-8 h-8 rounded-full"
                    alt="avatar"
                  />
                  <div>
                    <div className="font-medium">{report.submittedBy}</div>
                    <div className="text-xs text-gray-500">
                      {report.submittedByLevel}
                    </div>
                  </div>
                </td>
                <td className="p-2">{report.submittedTo}</td>
                <td className="p-2">
                  <div>{report.timestamp}</div>
                  <div className="text-xs text-gray-500">{report.time}</div>
                </td>
                <td className="p-2">
                  <span className="text-orange-500 font-medium text-xs">
                    {report.severity}
                  </span>
                </td>
                <td className="p-2 space-x-1">
                  <button className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
                    Button 1
                  </button>
                  <button className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
                    Button 2
                  </button>
                  <button className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
                    Button 3
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
