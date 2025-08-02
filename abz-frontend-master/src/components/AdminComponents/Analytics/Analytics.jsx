"use client";

import { Line, Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import DataService from "@/services/Axios/axiosInterceptor";

const Analytics = () => {
          const [alldata ,setAllData]=useState([])

          const fetchData = async()=>{
            try {
              const res=await DataService.getTotalCounts();
              if(res.status===200){
                setAllData(res.data?.data);
                console.log("Data fetched successfully:", res.data?.data);
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          }
useEffect(()=>{
  fetchData()
},[])


  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Reports",
        data: [300, 500, 400, 600, 700, 800],
        borderColor: "#3B82F6",
        fill: false,
      },
      {
        label: "Submissions",
        data: [200, 300, 350, 450, 500, 650],
        borderColor: "#F97316",
        fill: false,
      },
    ],
  };

  const severityData = {
    labels: ["Critical", "High", "Medium", "Low", "Informational"],
    datasets: [
      {
        data: [12, 24, 38, 18, 8],
        backgroundColor: [
          "#DC2626",
          "#F97316",
          "#FACC15",
          "#3B82F6",
          "#60A5FA",
        ],
      },
    ],
  };

  const barData = {
    labels: ["TechGuard", "SecureNet", "DataFort", "CyberShield", "FinSecure"],
    datasets: [
      {
        label: "Programs",
        data: [5, 4, 4, 3, 2],
        backgroundColor: "#3B82F6",
      },
      {
        label: "Critical",
        data: [3, 2, 1, 2, 1],
        backgroundColor: "#F97316",
      },
    ],
  };

  const topCompanies = [
    { name: "TechGuard Inc.", type: "Software Security", count: 248 },
    { name: "SecureNet", type: "Network Security", count: 186 },
    { name: "DataFort", type: "Cloud Security", count: 154 },
    { name: "CyberShield", type: "Cybersecurity", count: 132 },
    { name: "FinSecure", type: "Financial Security", count: 98 },
  ];

  const topResearchers = [
    {
      name: "Sarah Chen",
      username: "@securitysarah",
      bounty: "$42,850",
      change: "+12%",
    },
    {
      name: "Marcus Johnson",
      username: "@hackmaster",
      bounty: "$38,200",
      change: "+8%",
    },
    {
      name: "Elena Rodriguez",
      username: "@guidance",
      bounty: "$31,750",
      change: "+15%",
    },
    {
      name: "Rajal Patel",
      username: "@rajpat",
      bounty: "$28,400",
      change: "+10%",
    },
    {
      name: "Olivia Kim",
      username: "@oliviasecurity",
      bounty: "$24,950",
      change: "+9%",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Last 30 Days
          </button>
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Reports</p>
          <h3 className="text-2xl font-bold">{alldata.totalReports}</h3>
          <p className="text-xs text-green-500">+12%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Active Programs</p>
          <h3 className="text-2xl font-bold">{alldata.totalPrograms}</h3>
          <p className="text-xs text-green-500">+5%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Bounties Paid</p>
          <h3 className="text-2xl font-bold">120</h3>
          <p className="text-xs text-green-500">+18%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Active Researchers</p>
          <h3 className="text-2xl font-bold">{alldata.totalResearchers}</h3>
          <p className="text-xs text-green-500">+8%</p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Reports Over Time</h4>
            <div className="flex gap-2">
              <button className="text-blue-600 text-xs">Weekly</button>
              <button className="text-blue-600 text-xs font-bold">
                Monthly
              </button>
              <button className="text-blue-600 text-xs">Yearly</button>
            </div>
          </div>
          <Line data={lineChartData} height={200} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Severity Distribution</h4>
            <button className="text-blue-600 text-xs">Details</button>
          </div>
          <Pie data={severityData} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Company-wise Program Count</h4>
            <button className="text-blue-600 text-xs">Filter</button>
          </div>
          <Bar data={barData} height={200} />
        </div>

        {/* Top Companies */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Top Companies by Submissions</h4>
            <button className="text-blue-600 text-xs">View All</button>
          </div>
          <ul className="space-y-3">
            {topCompanies.map((c, i) => (
              <li key={i} className="text-sm text-gray-700">
                <div className="font-semibold">{c.name}</div>
                <div className="text-xs text-gray-400">{c.type}</div>
                <div className="text-xs text-blue-600">{c.count} Reports</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Researchers */}
        <div className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Top Researchers by Bounty</h4>
            <button className="text-blue-600 text-xs">View Payouts</button>
          </div>
          <ul className="space-y-3">
            {topResearchers.map((r, i) => (
              <li key={i} className="text-sm text-gray-700">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-gray-400">{r.username}</div>
                <div className="text-xs text-blue-600">
                  {r.bounty}{" "}
                  <span className="text-green-500 ml-1">
                    {r.change} this month
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
