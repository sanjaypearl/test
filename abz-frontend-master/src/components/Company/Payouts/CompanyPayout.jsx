"use client";

import { useState } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

const payouts = [
  {
    id: 1,
    date: "Jun 15, 2023",
    researcher: "Sarah Chen",
    title: "SQL Injection in Admin Panel",
    amount: "$9,500.00",
    method: "Bank Transfer",
    status: "Paid",
    action: "View Details",
  },
  {
    id: 2,
    date: "Jun 10, 2023",
    researcher: "Marcus Johnson",
    title: "Authentication Bypass Vulnerability",
    amount: "$3,550.00",
    method: "PayPal",
    status: "Paid",
    action: "View Details",
  },
  {
    id: 3,
    date: "Jun 7, 2023",
    researcher: "Elena Rodriguez",
    title: "Critical XSS in User Profile",
    amount: "$6,500.00",
    method: "Cryptocurrency",
    status: "Pending",
    action: "Process Now",
  },
  {
    id: 4,
    date: "Jun 5, 2023",
    researcher: "David Kim",
    title: "CSRF in Payment Processing",
    amount: "$4,200.00",
    method: "Bank Transfer",
    status: "Pending",
    action: "Process Now",
  },
  {
    id: 5,
    date: "Jun 3, 2023",
    researcher: "James Wilson",
    title: "Server-Side Request Forgery",
    amount: "$8,800.00",
    method: "PayPal",
    status: "Failed",
    action: "Retry",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Paid":
      return "text-green-600 font-medium";
    case "Pending":
      return "text-yellow-500 font-medium";
    case "Failed":
      return "text-red-500 font-medium";
    default:
      return "";
  }
};

export default function CompanyPayout() {
  //   const [search, setSearch] = useState("");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Payouts Dashboard</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Initiate Manual Payout
          </button>
          <button className="border border-gray-300 px-3 py-2 rounded text-gray-700">
            CSV
          </button>
          <button className="border border-gray-300 px-3 py-2 rounded text-gray-700">
            PDF
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded shadow-sm">
          <div className="text-sm text-gray-500 mb-1">Total Paid</div>
          <div className="text-3xl font-bold text-gray-800">$247,850.00</div>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <CheckCircle size={16} className="text-green-500 mr-1" />
            Last payout: June 15, 2023
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow-sm">
          <div className="text-sm text-gray-500 mb-1">Pending Payouts</div>
          <div className="text-3xl font-bold text-green-600">$32,450.00</div>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <AlertTriangle size={16} className="text-yellow-500 mr-1" />
            Next scheduled: June 30, 2023
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow-sm mb-6">
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Date Range
            </label>
            <div className="flex gap-2">
              <input
                type="date"
                className="border border-gray-300 px-2 py-1 rounded w-full"
              />
              <input
                type="date"
                className="border border-gray-300 px-2 py-1 rounded w-full"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Researcher
            </label>
            <select className="border border-gray-300 px-2 py-1 rounded w-full">
              <option>All Researchers</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Payment Status
            </label>
            <select className="border border-gray-300 px-2 py-1 rounded w-full">
              <option>All Statuses</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">
              Payment Method
            </label>
            <select className="border border-gray-300 px-2 py-1 rounded w-full">
              <option>All Methods</option>
            </select>
          </div>
        </div>
        <button className="text-sm text-blue-600 underline mt-2">Reset</button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-7 px-4 py-2 text-sm font-semibold text-gray-600 border-b border-gray-300">
          <div>Date</div>
          <div>Researcher</div>
          <div>Report Title</div>
          <div>Amount</div>
          <div>Payment Method</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Rows */}
        {payouts.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-7 items-center px-4 py-3 text-sm border-b border-gray-300  hover:bg-gray-50"
          >
            <div>{item.date}</div>
            <div>{item.researcher}</div>
            <div className="text-gray-700">{item.title}</div>
            <div className="font-medium">{item.amount}</div>
            <div>{item.method}</div>
            <div className={getStatusClass(item.status)}>{item.status}</div>
            <div>
              <button className="text-blue-600 hover:underline">
                {item.action}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>Showing {payouts.length} of 47 records</div>
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
    </div>
  );
}
