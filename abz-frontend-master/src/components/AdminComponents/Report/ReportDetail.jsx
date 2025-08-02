"use client";

import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import DataService from "@/services/Axios/axiosInterceptor";
import SubmitReportForm from "@/components/AdminComponents/Report/ManageReport";
import { toast, ToastContainer } from "react-toastify";


const severityColors = {
    low: "text-green-600",
    medium: "text-yellow-600",
    high: "text-orange-600",
    critical: "text-red-600",
};

const statusColors = {
    New: "text-blue-600",
    "In Review": "text-purple-600",
    Resolved: "text-green-600",
    Rejected: "text-red-600",
};

const ReportDetail = () => {
    const [search, setSearch] = useState("");
    const [reportData, setReportData] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("All Statuses");
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    const AllReport = async () => {
        try {
            const response = await DataService.getAllReports();
            setReportData(response.data?.data || []);
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
    };

    useEffect(() => {
        AllReport();
    }, []);

    const filteredReports = reportData.filter((r) => {
        const matchesTitle = r.reportTitle?.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = selectedStatus === "All Statuses" || r.status === selectedStatus;
        return matchesTitle && matchesStatus;
    });

    const severityCount = reportData.reduce((acc, r) => {
        const sev = r.severity?.toLowerCase() || "unknown";
        acc[sev] = (acc[sev] || 0) + 1;
        return acc;
    }, {});

    const statusCount = reportData.reduce((acc, r) => {
        acc[r.status] = (acc[r.status] || 0) + 1;
        return acc;
    }, {});

    const pieData = {
        labels: Object.keys(severityCount),
        datasets: [
            {
                data: Object.values(severityCount),
                backgroundColor: ["#16a34a", "#facc15", "#f97316", "#dc2626"],
            },
        ],
    };

    const barData = {
        labels: Object.keys(statusCount),
        datasets: [
            {
                label: "Reports by Status",
                data: Object.values(statusCount),
                backgroundColor: "#3b82f6",
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen text-sm">
            {/* Edit Modal */}
            {showEditModal && (
                <SubmitReportForm
                    reportData={selectedReport}
                    onClose={() => setShowEditModal(false)}
                    onSubmitSuccess={() => {
                        setShowEditModal(false);
                        AllReport();
                    }}
                />
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold">All Reports</h2>
                <div className="flex flex-wrap gap-2">
                    <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">Filter</button>
                    <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">Sort</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Export</button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 items-center mb-4 bg-white p-4 rounded shadow">
                <input
                    className="border px-3 py-2 rounded w-full lg:w-1/3"
                    placeholder="Search reports..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex flex-wrap gap-2 w-full lg:w-2/3 justify-end">
                    <select className="border px-3 py-2 rounded text-sm">
                        <option>All Programs</option>
                    </select>
                    <select className="border px-3 py-2 rounded text-sm">
                        <option>All Severities</option>
                    </select>
                    <select
                        className="border px-3 py-2 rounded text-sm"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option>All Statuses</option>
                        <option>New</option>
                        <option>In Review</option>
                        <option>Resolved</option>
                        <option>Rejected</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded shadow overflow-auto">
                <table className="w-full min-w-[900px] text-left">
                    <thead className="bg-gray-100 text-gray-600 font-medium">
                        <tr>
                            <th className="p-3">
                                <input type="checkbox" />
                            </th>
                            <th>Report Title</th>
                            <th>Program</th>
                            <th>Severity</th>
                            <th>Status</th>
                            <th>CVSS</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReports.map((r) => (
                            <tr key={r._id} className="border-t">
                                <td className="p-3">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-blue-600 hover:underline cursor-pointer">
                                    {r.reportTitle}
                                </td>
                                <td>{r.program?.name || r.program}</td>
                                <td className={severityColors[r.severity?.toLowerCase()] || ""}>
                                    {r.severity}
                                </td>
                                <td className={statusColors[r.status] || ""}>{r.status}</td>
                                <td>{r.cvss_score || "N/A"}</td>
                                <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                                <td>
                                    <button
                                        className="text-blue-600 hover:underline"
                                        onClick={() => {
                                            setSelectedReport(r);
                                            setShowEditModal(true);
                                        }}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
                    <span>
                        Showing {filteredReports.length} of {reportData.length} reports
                    </span>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3].map((n) => (
                            <button
                                key={n}
                                className={`px-3 py-1 border rounded ${n === 1 ? "bg-blue-600 text-white" : ""
                                    }`}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* Pie Chart */}
                <div className="bg-white rounded p-4 shadow">
                    <h3 className="text-sm font-medium mb-2">Reports by Severity</h3>
                    <Pie data={pieData} />
                </div>

                {/* Bar Chart */}
                <div className="bg-white rounded p-4 shadow">
                    <h3 className="text-sm font-medium mb-2">Reports by Status</h3>
                    <Bar data={barData} />
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded p-4 shadow">
                    <h3 className="text-sm font-medium mb-2">Recent Activity</h3>
                    <ul className="text-sm space-y-3">
                        <li>
                            <strong>Sarah Johnson</strong> changed status of{" "}
                            <span className="text-blue-600">SQL Injection in Login Form</span>{" "}
                            to <strong>In Review</strong>
                            <div className="text-xs text-gray-400">Today at 10:23 AM</div>
                        </li>
                        <li>
                            <strong>Michael Rodriguez</strong> validated{" "}
                            <span className="text-blue-600">Cross-Site Scripting</span>
                            <div className="text-xs text-gray-400">Oct 10, 2023</div>
                        </li>
                        <li>
                            <strong>Emily Takahashi</strong> received{" "}
                            <span className="text-blue-600">Authentication Bypass</span>
                            <div className="text-xs text-gray-400">Oct 8, 2023</div>
                        </li>
                        <li>
                            <strong>David Kim</strong> rejected{" "}
                            <span className="text-blue-600">CSRF in User Settings</span>
                            <div className="text-xs text-gray-400">Oct 5, 2023</div>
                        </li>
                    </ul>
                    <button className="text-blue-600 text-xs mt-2">
                        View All Activity
                    </button>
                </div>
            </div>
             <ToastContainer position="top-left" autoClose={3000} />
        </div>
    );
};

export default ReportDetail;
