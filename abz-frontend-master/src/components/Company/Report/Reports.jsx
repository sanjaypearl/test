// app/(dashboard)/vulnerability-reports/page.js
"use client";

import { useState } from "react";
import { FileSearch, CalendarDays } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "SQL Injection in Login Form",
    category: "Web Application",
    submitter: "Marcus Chen",
    avatar: "/person.jpg",
    severity: "Critical",
    status: "In Review",
    date: "Oct 12, 2023",
  },
  {
    id: 2,
    title: "Authentication Bypass in Password Reset",
    category: "Web Application",
    submitter: "Sarah Johnson",
    avatar: "/person.jpg",
    severity: "Critical",
    status: "Accepted",
    date: "Oct 10, 2023",
  },
  {
    id: 3,
    title: "Cross-Site Scripting in Comment Section",
    category: "Web Application",
    submitter: "David Rodriguez",
    avatar: "/person.jpg",
    severity: "High",
    status: "Need Info",
    date: "Oct 8, 2023",
  },
  {
    id: 4,
    title: "Insecure Direct Object Reference",
    category: "API Services",
    submitter: "Emily Watkins",
    avatar: "/person.jpg",
    severity: "High",
    status: "New",
    date: "Oct 7, 2023",
  },
  {
    id: 5,
    title: "Hardcoded API Keys in Mobile App",
    category: "Mobile App",
    submitter: "Michael Thompson",
    avatar: "/person.jpg",
    severity: "Medium",
    status: "Rejected",
    date: "Oct 5, 2023",
  },
];

const getSeverityColor = (level) => {
  switch (level) {
    case "Critical":
      return "text-red-600";
    case "High":
      return "text-orange-500";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-green-500";
    default:
      return "";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "In Review":
      return "text-orange-600";
    case "Accepted":
      return "text-green-600";
    case "Rejected":
      return "text-red-600";
    case "New":
      return "text-purple-600";
    case "Need Info":
      return "text-blue-600";
    default:
      return "";
  }
};

const reportData = {
  title: "SQL Injection in Login Form",
  submitter: "Marcus Chen",
  date: "Oct 12, 2023",
  severity: "Critical",
  status: "In Review",
  program: "Web Application",
  description:
    "I discovered a SQL injection vulnerability in the login form of the main web application. By inserting a specially crafted payload in the username field, I was able to bypass authentication and gain access to administrative functions. This vulnerability could allow an attacker to extract sensitive data from the database, including user credentials and personal information.",
  steps: [
    "Navigate to the login page at https://example.com/login",
    "Enter the following payload in the username field: `' OR 1=1 --`",
    "Enter any value in the password field",
    "Click the login button",
    "Observe that you are logged in as an administrator",
  ],
  impact:
    "This vulnerability allows unauthorized access to the application, potentially exposing all user data and administrative functions. An attacker could extract sensitive information from the database, modify data, or perform actions on behalf of any user, including administrators.",
  notes: [
    {
      id: 1,
      author: "Alex Morgan",
      timestamp: "Today at 10:23 AM",
      text: "I've verified this vulnerability and it's indeed critical. We need to patch this immediately. I've already notified the development team.",
    },
    {
      id: 2,
      author: "Jessica Wu",
      timestamp: "Today at 9:45 AM",
      text: "Development team is working on a fix. ETA is end of day. We should prepare a security advisory for our customers.",
    },
  ],
};

export default function Reports() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState(reportData.notes);
  const [newNote, setNewNote] = useState("");

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: notes.length + 1,
      author: "You",
      timestamp: "Just now",
      text: newNote,
    };
    setNotes([note, ...notes]);
    setNewNote("");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Vulnerability Reports</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Export
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100">
            Filters
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select className="border border-gray-300 px-3 py-2 rounded w-48">
          <option>All Severities</option>
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded w-48">
          <option>All Statuses</option>
        </select>
        <select className="border border-gray-300 px-3 py-2 rounded w-48">
          <option>All Programs</option>
        </select>
        <input
          type="text"
          placeholder="Search reports..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded w-64 ml-auto"
        />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-6 bg-white border-b font-semibold text-sm text-gray-600 py-2 px-4">
        <div className="col-span-2">Report Title</div>
        <div>Submitter</div>
        <div>Severity</div>
        <div>Status</div>
        <div>Submission Date</div>
      </div>

      {/* Table Rows */}
      {filteredReports.map((report) => (
        <div
          key={report.id}
          className="grid grid-cols-6 items-center bg-white border-b border-gray-300 px-4 py-4 text-sm hover:bg-gray-50"
        >
          <div className="col-span-2">
            <div className="flex items-start gap-2">
              <FileSearch className="text-blue-600 mt-1" size={18} />
              <div>
                <div className="font-medium">{report.title}</div>
                <div className="text-gray-400 text-xs">{report.category}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={report.avatar}
              alt={report.submitter}
              className="w-7 h-7 rounded-full"
            />
            <span>{report.submitter}</span>
          </div>
          <div className={getSeverityColor(report.severity)}>
            {report.severity}
          </div>
          <div className={getStatusColor(report.status)}>{report.status}</div>
          <div className="flex items-center gap-1 text-gray-600">
            <CalendarDays size={16} />
            <span>{report.date}</span>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <div>Showing {filteredReports.length} reports</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
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

      {/* Report Details Section */}
      <div className="p-6 mt-10 bg-white max-w-5xl mx-auto shadow-sm rounded">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>

        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{reportData.title}</h3>
            <div className="flex gap-4 text-sm text-gray-600 mt-1">
              <span>
                Submitted by <strong>{reportData.submitter}</strong>
              </span>
              <span className="flex items-center gap-1">
                <CalendarDays size={16} /> {reportData.date}
              </span>
            </div>
            <div className="flex gap-3 mt-2 text-sm">
              <span className={getSeverityColor(reportData.severity)}>
                ● {reportData.severity} Severity
              </span>
              <span className={getStatusColor(reportData.status)}>
                ● {reportData.status}
              </span>
              <span className="text-blue-600">● {reportData.program}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Accept
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Reject
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Request Info
            </button>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <h4 className="font-semibold mb-1">Description</h4>
          <p className="text-sm text-gray-700">{reportData.description}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-1">Steps to Reproduce</h4>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            {reportData.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-1">Impact</h4>
          <p className="text-sm text-gray-700">{reportData.impact}</p>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <h4 className="font-semibold mb-2">Internal Notes</h4>
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-50 border border-gray-300 rounded px-4 py-2 text-sm"
              >
                <div className="font-semibold">{note.author}</div>
                <div className="text-gray-500 text-xs">{note.timestamp}</div>
                <div className="mt-1 text-gray-700">{note.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-start gap-2">
            <input
              type="text"
              placeholder="Add an internal note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="border  border-gray-300 px-3 py-2 rounded w-full text-sm"
            />
            <button
              onClick={handleAddNote}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
