"use client";

import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const payoutData = [
  {
    date: "May 15, 2023",
    researcher: "Sarah Chen",
    amount: "$4,500.00",
    status: "Completed",
    report: "#VUL-2023-0587",
  },
  {
    date: "May 14, 2023",
    researcher: "Marcus Johnson",
    amount: "$2,750.00",
    status: "Pending",
    report: "#VUL-2023-0586",
  },
  {
    date: "May 12, 2023",
    researcher: "Elena Rodriguez",
    amount: "$3,200.00",
    status: "Completed",
    report: "#VUL-2023-0582",
  },
  {
    date: "May 10, 2023",
    researcher: "Amir Patel",
    amount: "$1,800.00",
    status: "Failed",
    report: "#VUL-2023-0579",
  },
  {
    date: "May 8, 2023",
    researcher: "Jasmine Taylor",
    amount: "$5,000.00",
    status: "Completed",
    report: "#VUL-2023-0574",
  },
];

const statusColors = {
  Completed: "text-green-600",
  Pending: "text-yellow-500",
  Failed: "text-red-500",
};

const ManagePayout = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Payouts Management</h2>
          <p className="text-gray-500 text-sm">
            Manage and track all bounty payments to researchers
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Manually Issue Payment
          </button>
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Export Data
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Total Paid This Month</p>
          <h3 className="text-2xl font-semibold text-green-600">$127,450.00</h3>
          <p className="text-xs text-green-500 mt-1">↑ 12.3% from last month</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Total Pending</p>
          <h3 className="text-2xl font-semibold text-yellow-600">$43,250.00</h3>
          <p className="text-xs text-gray-400 mt-1">
            15 payments awaiting processing
          </p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <p className="text-sm text-gray-500 mb-1">Average Payout</p>
          <h3 className="text-2xl font-semibold text-blue-600">$2,850.00</h3>
          <p className="text-xs text-green-500 mt-1">↑ 5.7% from last month</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select className="border border-gray-400 px-3 py-2 rounded text-sm">
            <option>All Statuses</option>
          </select>
          <input
            type="text"
            placeholder="Select date range"
            className="border border-gray-400 px-3 py-2 rounded text-sm"
          />
          <select className="border border-gray-400 px-3 py-2 rounded text-sm">
            <option>All Researchers</option>
          </select>
          <input
            type="text"
            placeholder="Min"
            className="border border-gray-400 px-3 py-2 rounded text-sm"
          />
          <input
            type="text"
            placeholder="Max"
            className="border border-gray-400 px-3 py-2 rounded text-sm"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button className="text-blue-600 text-sm">Reset Filters</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-auto">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3">Date</th>
              <th>Researcher</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Linked Report</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payoutData.map((p, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-3">{p.date}</td>
                <td>{p.researcher}</td>
                <td>{p.amount}</td>
                <td className={statusColors[p.status]}>{p.status}</td>
                <td>
                  <a href="#" className="text-blue-600 underline">
                    {p.report}
                  </a>
                </td>
                <td>
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-gray-500 text-sm">
          <span>Showing 1 to 5 of 42 entries</span>
          <div className="flex gap-2 items-center">
            <select className="border  border-gray-400 px-2 py-1 rounded text-sm">
              <option>10 entries</option>
            </select>
            <div className="flex gap-1">
              <button className="border px-3 py-1 rounded">Previous</button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`px-3 py-1 border rounded ${
                    n === 1 ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {n}
                </button>
              ))}
              <button className="border px-3 py-1 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="flex justify-between items-center mt-6 text-sm text-blue-600">
        <a href="#" className="hover:underline">
          ← Back to Dashboard
        </a>
        <a href="#" className="hover:underline">
          View Analytics
        </a>
      </div>
    </div>
  );
};

export default ManagePayout;
