"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const monthlyChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Total Earnings",
      data: [2800, 1800, 2750, 3500, 1250, 1400],
      backgroundColor: "#3B82F6", // blue
      barThickness: 16,
    },
    {
      label: "Accepted Reports",
      data: [1000, 800, 1300, 1500, 600, 900],
      backgroundColor: "#EA580C", // orange
      barThickness: 16,
    },
  ],
};

const monthlyChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const payoutHistory = [
  {
    date: "Apr 15, 2023",
    ref: "PAY-2023-04-15-8742",
    amount: "$3,500.00",
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    date: "Mar 15, 2023",
    ref: "PAY-2023-03-15-6521",
    amount: "$2,750.00",
    method: "PayPal",
    status: "Completed",
  },
  {
    date: "Feb 15, 2023",
    ref: "PAY-2023-02-15-5439",
    amount: "$1,800.00",
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    date: "Jan 15, 2023",
    ref: "PAY-2023-01-15-4217",
    amount: "$2,200.00",
    method: "PayPal",
    status: "Completed",
  },
  {
    date: "May 15, 2023",
    ref: "PAY-2023-05-15-9631",
    amount: "$1,250.00",
    method: "Bank Transfer",
    status: "Pending",
  },
];

const ResearcherEarningsDashboard = () => {
  const [filter, setFilter] = useState("All-time");

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Earnings</h2>
        <div className="flex gap-2">
          <button className="border border-gray-300 px-4 py-2 text-sm rounded">
            Back to Dashboard
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
            View Reports
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Total Earnings</p>
          <p className="text-2xl font-bold text-green-600">$24,750</p>
          <p className="text-xs text-green-500 mt-1">+3,500 this month</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Pending Payouts</p>
          <p className="text-2xl font-bold text-blue-600">$1,250</p>
          <p className="text-xs text-orange-500 mt-1">
            Expected on May 15, 2023
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-sm text-gray-600">Average Per Report</p>
          <p className="text-2xl font-bold text-indigo-600">$825</p>
          <p className="text-xs text-green-500 mt-1">+12% from last quarter</p>
        </div>
      </div>

      {/* Chart + Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="md:col-span-2 bg-white border border-gray-300 rounded p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium">Monthly Earnings</p>
            <select className="border border-gray-300 rounded text-sm px-2 py-1">
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64">
            <Bar data={monthlyChartData} options={monthlyChartOptions} />
          </div>
        </div>

        {/* Breakdown */}
        <div className="bg-white border border-gray-300 rounded p-4 space-y-4">
          <p className="font-medium mb-2">Earnings Breakdown</p>
          {[
            { label: "Critical", amount: "$12,500" },
            { label: "High", amount: "$8,225" },
            { label: "Medium", amount: "$3,000" },
            { label: "Low", amount: "$1,000" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm">
                <span>{item.label}</span>
                <span className="font-medium">{item.amount}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded mt-1">
                <div className="h-full bg-blue-500 rounded w-[80%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout History */}
      <div className="bg-white border border-gray-300 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="font-medium text-lg">Payout History</p>
          <div className="flex gap-2">
            <select
              className="border border-gray-300 rounded text-sm px-2 py-1"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All-time</option>
              <option>Last 6 months</option>
            </select>
            <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
              Download All Receipts
            </button>
          </div>
        </div>
        <table className="w-full text-sm border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Date</th>
              <th className="p-2">Reference ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Payment Method</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payoutHistory.map((payout, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="p-2">{payout.date}</td>
                <td className="p-2">{payout.ref}</td>
                <td className="p-2 font-semibold">{payout.amount}</td>
                <td className="p-2">{payout.method}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs rounded font-medium ${
                      payout.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {payout.status}
                  </span>
                </td>
                <td className="p-2">
                  {payout.status === "Completed" ? (
                    <button className="text-sm text-blue-600 underline">
                      Receipt
                    </button>
                  ) : (
                    <span className="text-xs text-gray-500">Processing</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearcherEarningsDashboard;
