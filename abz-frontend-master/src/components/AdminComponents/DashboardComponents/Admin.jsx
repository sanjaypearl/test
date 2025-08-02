"use client";
import { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaFileAlt,
  FaChartBar,
  FaBuilding,
  FaBug,
} from "react-icons/fa";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import DataService from "@/services/Axios/axiosInterceptor";

export default function Admin() {
  const [userCount, setUserCount] = useState(0);
  const [company, setCompany] = useState(0);
  const [program, setProgram] = useState(0);
  const [admin ,setAdmin] = useState('')

  useEffect(() => {
    fetchUsers();
    fetchCompany();
    // fetchProgram();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await DataService.getAllUser();

      setUserCount(res.data?.totals?.total);


      setAdmin(res.data)
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const fetchCompany = async () => {
    try {
      const response = await DataService.getAllCompany();
      console.log(response);
      setCompany(response.data?.totalCompany);
      console.log("response.data?.totalCompany",response.data?.totalCompany);
    } catch (error) {
      console.error("Failed to fetch users:", err);
    }
  };

  //   const fetchProgram = async ()=>{
  //     try {
  //   const response = await DataService.getAllActiveProgram();
  //   const total = response?.data?.total || response?.data?.totalActive || 0;
  //   setProgram(total);
  // } catch (error) {
  //   console.error("Failed to fetch programs:", error);
  // }
  //   }

  // Dynamic dashboard data
  const stats = [
    {
      title: "Total Users",
      value: userCount,
      delta: "+12%",
      icon: <FaUserFriends className="text-blue-600" />,
      up: true,
    },
    {
      title: "Total Companies",
      value: company,
      delta: "+3%",
      icon: <FaBuilding className="text-indigo-600" />,
      up: true,
    },
    {
      title: "Active Programs",
      value: "25",
      delta: "+5%",
      icon: <FaBug className="text-green-600" />,
      up: true,
    },
    {
      title: "Total Reports",
      value: "12,971",
      delta: "+15%",
      icon: <FaFileAlt className="text-blue-500" />,
      up: true,
    },
    {
      title: "Total Payouts",
      value: "$1.2M",
      delta: "+10%",
      icon: <FaChartBar className="text-yellow-500" />,
      up: true,
    },
  ];

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Line A",
        data: [50, 55, 60, 70, 80, 85],
        borderColor: "#F97316",
        fill: false,
      },
      {
        label: "Line B",
        data: [80, 78, 65, 58, 50, 45],
        borderColor: "#3B82F6",
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: ["Security", "Privacy", "Bugs", "Other"],
    datasets: [
      {
        data: [30, 20, 35, 15],
        backgroundColor: ["#3B82F6", "#10B981", "#F97316", "#E5E7EB"],
        hoverOffset: 4,
      },
    ],
  };

  const recentActivities = [
    {
      title: "New company registered",
      desc: "TechSecure Solutions Inc.",
      color: "text-blue-600",
    },
    {
      title: "Researcher submitted report",
      desc: "Broken auth in dashboard",
      color: "text-green-600",
    },
    {
      title: "Company paused a program",
      desc: "StreamDefense Network",
      color: "text-yellow-500",
    },
  ];

  const topResearchers = [
    { name: "Aisha Patel", bounty: "$86,450" },
    { name: "Marcus Johnson", bounty: "$72,300" },
    { name: "Sarah Chen", bounty: "$65,120" },
    { name: "Ismail Williams", bounty: "$58,900" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Welcome Admin</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">
            Today: {new Date().toLocaleDateString()}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600">
            Export Data
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-lg p-4 shadow-md space-y-2"
          >
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">{stat.title}</div>
              {stat.icon}
            </div>
            <div className="text-xl font-semibold">{stat.value}</div>
            <div
              className={`flex items-center text-xs ${
                stat.up ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.up ? <BsArrowUpRight /> : <BsArrowDownRight />}
              <span className="ml-1">{stat.delta} vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded shadow-sm col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold">Platform Activity</h3>
            <div className="flex gap-2 text-sm text-blue-600">
              <button>Weekly</button>
              <button className="font-semibold underline">Monthly</button>
              <button>Yearly</button>
            </div>
          </div>
          <Line data={lineChartData} height={150} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-md font-semibold">Report Categories</h3>
            <button className="text-sm text-blue-600">View All</button>
          </div>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-semibold text-md mb-4">Recent Activities</h3>
          <ul className="space-y-4 text-sm">
            {recentActivities.map((item, i) => (
              <li key={i}>
                <strong className={`${item.color}`}>{item.title}</strong> -{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Top Researchers */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-md">Top Researchers</h3>
            <button className="text-sm text-blue-600">View All</button>
          </div>
          <ul className="space-y-2 text-sm">
            {topResearchers.map((r, i) => (
              <li key={i} className="flex justify-between">
                <span>{r.name}</span>
                <span className="font-semibold text-blue-600">{r.bounty}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-md">Quick Links</h3>
            <button className="text-sm text-blue-600">Customize</button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-blue-50 border rounded cursor-pointer">
              <strong>Manage Companies</strong>
              <p className="text-xs text-gray-500">View and manage companies</p>
            </div>
            <div className="p-3 bg-blue-50 border rounded cursor-pointer">
              <strong>Review Reports</strong>
              <p className="text-xs text-gray-500">
                Read and validate submissions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
