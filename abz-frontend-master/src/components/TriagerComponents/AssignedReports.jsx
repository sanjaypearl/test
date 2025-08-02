"use client";

import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssignedReports() {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: "#VLN-2023-4872",
      title: "SQL Injection in User Profile API",
      status: "Pending Review",
      assignedDate: "Oct 12, 2023",
      deadline: "Oct 19, 2023",
      date: "Oct 12, 2023",
      reportedBy: "Marcus Reynolds",
      description:
        "I discovered a SQL-injection vulnerability in the user.profile API endpoint at /api/v1/users/profile. By manipulating the ‘userId’ parameter, I was able to extract database information. This vulnerability could allow an attacker to access sensitive user data including emails and hashed passwords.",
      steps: [
        "Send a GET request to /api/v1/users/profile?userId=1",
        "Modify the request to /api/v1/users/profile?userId=1' OR '1'='1",
        "Observe that the system returns data for all users",
      ],
      evidence: ["request_payload.txt", "vulnerability_proof.png"],
    },
    {
      id: "#VLND-2023-48742",
      title: "SQL Injection in User Profile API",
      status: "Pending Review",
      assignedDate: "Oct 12, 2023",
      deadline: "Oct 19, 2023",
      date: "Oct 12, 2023",
      reportedBy: "Marcus Reynolds",
      description:
        "I discovered a SQL-injection vulnerability in the user.profile API endpoint at /api/v1/users/profile. By manipulating the ‘userId’ parameter, I was able to extract database information. This vulnerability could allow an attacker to access sensitive user data including emails and hashed passwords.",
      steps: [
        "Send a GET request to /api/v1/users/profile?userId=1",
        "Modify the request to /api/v1/users/profile?userId=1' OR '1'='1",
        "Observe that the system returns data for all users",
      ],
      evidence: ["request_payload.txt", "vulnerability_proof.png"],
    },
  ];
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      name: "Marcus Reynolds",
      timestamp: "Oct 12, 2023 • 10:45 AM",
      avatar: "https://i.pravatar.cc/40?img=11", // dummy avatar
      text: "I've also tested this on the staging environment and confirmed the vulnerability exists there as well.",
    },
  ]);

  const [severity, setSeverity] = useState("");
  const [type, setType] = useState("SQL Injection");
  const [component, setComponent] = useState("User Profile API");
  const [decision, setDecision] = useState("");
  const [company, setCompany] = useState("");

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setComments([
      ...comments,
      {
        name: "You",
        timestamp: new Date().toLocaleString(),
        avatar: "https://i.pravatar.cc/40?img=5",
        text: comment,
      },
    ]);
    setComment("");
  };

  const reportsPerPage = 5;
  const [page, setPage] = useState(1);

  const allReports = [
    {
      id: "#VLN-2023-4865",
      title: "Authentication Bypass in Admin Panel",
      status: "In Progress",
      date: "Oct 10, 2023",
      deadline: "Oct 17, 2023",
      statusColor: "text-blue-500",
    },
    {
      id: "#VLN-2023-4853",
      title: "Cross-Site Scripting in Comment Section",
      status: "Need More Info",
      date: "Oct 9, 2023",
      deadline: "Oct 16, 2023",
      statusColor: "text-yellow-500",
    },
    {
      id: "#VLN-2023-4841",
      title: "CSRF Vulnerability in Payment Processing",
      status: "Validated",
      date: "Oct 7, 2023",
      deadline: "Oct 14, 2023",
      statusColor: "text-green-600",
    },
    {
      id: "#VLN-2023-4832",
      title: "Insecure Direct Object Reference in Order API",
      status: "Invalid",
      date: "Oct 5, 2023",
      deadline: "Oct 12, 2023",
      statusColor: "text-red-500",
    },
  ];

  const communications = [
    {
      sender: "Researcher: Marcus Reynolds",
      message:
        "I've provided additional information about the SQL injection vulnerability as requested.",
      time: "2 hours ago",
      color: "border-blue-500",
    },
    {
      sender: "Company: TechCorp Inc.",
      message:
        "Forwarded validated report #VLN-2023-4841 regarding CSRF vulnerability.",
      time: "1 day ago",
      color: "border-green-500",
    },
    {
      sender: "Researcher: Alicia Zhang",
      message:
        "Requested additional proof of concept for the XSS vulnerability report.",
      time: "2 days ago",
      color: "border-orange-500",
    },
  ];

  const chartData = {
    labels: [
      "Valid (42%)",
      "Invalid (26%)",
      "Pending (18%)",
      "Need Info (14%)",
    ],
    datasets: [
      {
        data: [42, 26, 18, 14],
        backgroundColor: ["#3B82F6", "#EF4444", "#F59E0B", "#8B5CF6"],
        borderWidth: 1,
      },
    ],
  };

  const totalPages = Math.ceil(allReports.length / reportsPerPage);
  const paginatedReports = allReports.slice(
    (page - 1) * reportsPerPage,
    page * reportsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white max-w-6xl mx-auto shadow rounded-lg p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Assigned Reports</h2>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Export
          </button>
        </div>

        {/* Subheading */}
        <div className="text-gray-700 text-sm mb-2">
          Your Assigned Reports ({reports.length})
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-5 bg-gray-100 p-3 text-sm font-semibold border border-gray-200">
          <div>Report ID/Title</div>
          <div>Current Status</div>
          <div>Assigned Date</div>
          <div>Deadline</div>
          <div>Actions</div>
        </div>

        {/* Report List */}
        {reports.map((report, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 text-sm items-center p-3 border-b border-gray-200"
          >
            <div
              className="text-blue-600 cursor-pointer"
              onClick={() => setSelectedReport(report)}
            >
              <span className="font-medium">{report.id}</span>
              <div>{report.title}</div>
            </div>
            <div className="text-yellow-600">{report.status}</div>
            <div>{report.assignedDate}</div>
            <div>{report.deadline}</div>
            <div>
              <button
                onClick={() => setSelectedReport(report)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Review
              </button>
            </div>
          </div>
        ))}

        {/* Detail View */}
        {selectedReport && (
          <div className="mt-6 border border-gray-200 rounded-lg p-5 bg-gray-50">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold">{selectedReport.title}</h3>
              <span className="text-sm text-gray-500">
                {selectedReport.date}
              </span>
            </div>
            <div className="text-sm text-blue-600 mb-3">
              {selectedReport.id} - Reported by {selectedReport.reportedBy}
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800">Report Description</h4>
              <p className="text-sm text-gray-700 mt-1">
                {selectedReport.description}
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-gray-800">Steps to Reproduce</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1">
                {selectedReport.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-800">Attached Evidence</h4>
              <div className="flex gap-4 mt-2">
                {selectedReport.evidence.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1 rounded shadow-sm text-sm"
                  >
                    <FaFileAlt className="text-gray-600" />
                    <span>{file}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <h2 className="text-sm font-semibold mb-3">Comments</h2>
          <div className="space-y-4">
            {comments.map((cmt, idx) => (
              <div key={idx} className="flex gap-3 text-sm">
                <img
                  src={cmt.avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between text-gray-800 font-medium">
                    <span>{cmt.name}</span>
                    <span className="text-gray-500 text-xs">
                      {cmt.timestamp}
                    </span>
                  </div>
                  <p className="text-gray-700">{cmt.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 border border-gray-300 px-3 py-2 rounded text-sm"
            />
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </div>

          {/* Triage Actions */}
          <h2 className="text-sm font-semibold mt-6 mb-3 border-t border-gray-300 pt-4">
            Triage Actions
          </h2>

          {/* Severity Assessment */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Severity Assessment
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
            >
              <option>Select severity level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          {/* Vulnerability Type */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Vulnerability Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
            >
              <option>SQL Injection</option>
              <option>XSS</option>
              <option>CSRF</option>
              <option>Authentication Bypass</option>
            </select>
          </div>

          {/* Affected Components */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Affected Components
            </label>
            <input
              type="text"
              value={component}
              onChange={(e) => setComponent(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
            />
          </div>

          {/* Triage Decision */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Triage Decision
            </label>
            <div className="flex gap-3">
              <button
                className={`px-4 py-1 rounded border border-gray-300 ${
                  decision === "valid"
                    ? "bg-green-100 border-green-500"
                    : "border-gray-300"
                }`}
                onClick={() => setDecision("valid")}
              >
                Valid
              </button>
              <button
                className={`px-4 py-1 rounded border ${
                  decision === "invalid"
                    ? "bg-red-100 border-red-500"
                    : "border-gray-300"
                }`}
                onClick={() => setDecision("invalid")}
              >
                Invalid
              </button>
              <button
                className={`px-4 py-1 rounded border ${
                  decision === "need_info"
                    ? "bg-yellow-100 border-yellow-500"
                    : "border-gray-300"
                }`}
                onClick={() => setDecision("need_info")}
              >
                Need Info
              </button>
            </div>
          </div>

          {/* Forward to Company */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Forward to Company
            </label>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
            >
              <option>Select company</option>
              <option>Button Ltd.</option>
              <option>Acme Corp.</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Save Assessment
          </button>
        </div>
        <div className="p-6  space-y-6">
          {/* Report List */}
          <div className="bg-white rounded shadow p-4">
            {paginatedReports.map((report, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 border-b border-gray-300 py-3 text-sm items-center"
              >
                <div className="text-blue-600 font-medium cursor-pointer">
                  {report.id}
                  <div className="text-black font-normal">{report.title}</div>
                </div>
                <div className={`${report.statusColor}`}>{report.status}</div>
                <div>{report.date}</div>
                <div>{report.deadline}</div>
                <div>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Review
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-4 text-sm">
              <span>
                Showing {paginatedReports.length} of {allReports.length} reports
              </span>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  className="border px-2 rounded hover:bg-gray-200"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx + 1)}
                    className={`w-8 h-8 rounded ${
                      page === idx + 1
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  className="border px-2 rounded hover:bg-gray-200"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Communications & Performance */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recent Communications */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-sm font-semibold mb-4">
                Recent Communications
              </h3>
              <div className="space-y-4 text-sm">
                {communications.map((msg, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 pl-3"
                    style={{ borderColor: msg.color }}
                  >
                    <p className="font-medium">{msg.sender}</p>
                    <p className="text-gray-700">{msg.message}</p>
                    <p className="text-xs text-gray-500 mt-1">• {msg.time}</p>
                    <a
                      href="#"
                      className="text-blue-600 text-xs hover:underline"
                    >
                      View conversation
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-blue-600 hover:underline cursor-pointer">
                View all communications
              </div>
            </div>

            {/* Triage Performance */}
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-sm font-semibold mb-4">Triage Performance</h3>
              <div className="text-sm mb-2">
                <div className="flex justify-between mb-1">
                  <span>Reports Triaged This Week</span>
                  <span className="font-semibold">14</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Average Response Time</span>
                  <span className="font-semibold">1.2 days</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span>Validation Rate</span>
                  <span className="font-semibold">68%</span>
                </div>
                <div className="text-sm font-medium mb-1">
                  Triage Status Breakdown
                </div>
                <Pie data={chartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
