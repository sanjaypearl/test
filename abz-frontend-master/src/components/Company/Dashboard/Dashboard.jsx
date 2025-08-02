"use client";

import {
  Bell,
  LogOut,
  Folder,
  FileSearch,
  Users,
  DollarSign,
  BarChart,
  Clock,
  PlusCircle,
  FileSearch as ViewReports,
  UserCircle2,
  FileSearch2,
  DollarSign as DollarSignIcon,
  FolderArchive,
  BarChart2,
  Users2,
} from "lucide-react";
import { useEffect, useState } from "react";
import DataService from "@/services/Axios/axiosInterceptor";

const Dashboard = () => {
  const stats = {
    submittedReports: 87,
    validatedReports: 64,
    totalPayouts: 128450,
    paidThisMonth: 18200,
  };

  const [activePrograms, setActivePrograms] = useState([]);
  const [totalActivePrograms, setTotalActivePrograms] = useState(0);

  const getAllActiveProgram = async () => {
  try {
    const resp = await DataService.getAllActivePrograms();
    const { totalActive, data } = resp.data;
    setTotalActivePrograms(totalActive);
    setActivePrograms(data);
  } catch (error) {
    console.error("Error fetching active programs:", error);
  }
};


  useEffect(() => {
    getAllActiveProgram();
  }, []);

  const activities = [
    {
      type: "New Critical Vulnerability",
      description:
        "SQL Injection vulnerability reported in Cloud Storage API by researcher Marcus Chen",
      time: "2 hours ago",
      icon: <FileSearch2 size={16} className="text-red-500" />,
    },
    {
      type: "Reward Issued",
      description:
        "$3,500 bounty paid to Sarah Williams for Authentication Bypass vulnerability",
      time: "Yesterday",
      icon: <DollarSignIcon size={16} className="text-green-500" />,
    },
    {
      type: "Program Scope Updated",
      description:
        "Added new API endpoints to the Mobile App Security program scope",
      time: "2 days ago",
      icon: <FolderArchive size={16} className="text-blue-500" />,
    },
    {
      type: "Report Validated",
      description:
        "XSS vulnerability in customer portal validated and marked for remediation",
      time: "5 days ago",
      icon: <BarChart2 size={16} className="text-purple-500" />,
    },
    {
      type: "New Researcher Joined",
      description:
        "Top-rated researcher Elena Petrova has joined your private program",
      time: "5 days ago",
      icon: <Users2 size={16} className="text-yellow-500" />,
    },
  ];

  const quickLinks = [
    { label: "Manage Programs", icon: <Folder size={16} /> },
    { label: "Review Reports", icon: <FileSearch size={16} /> },
    { label: "Researcher Directory", icon: <Users size={16} /> },
    { label: "Manage Payouts", icon: <DollarSign size={16} /> },
    { label: "Analytics Dashboard", icon: <BarChart size={16} /> },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-slate-800">
      {/* Header */}
      <div className="flex flex-row justify-between">
        <div className="px-6 pt-6">
          <h2 className="text-2xl font-semibold">
            Welcome, TechGuard Solutions
          </h2>
        </div>

        {/* Header Actions */}
        <div className="px-6 mt-4 flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md flex items-center gap-1">
            <ViewReports size={16} />
            View Reports
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md flex items-center gap-1">
            <PlusCircle size={16} />
            Create New Program
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md flex items-center gap-1">
            <Users size={16} />
            View Researchers
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-6">
        <StatCard
          label="Active Programs"
          value={totalActivePrograms}
          sub="3 programs updated this week"
          icon={<Folder size={24} className="text-blue-500" />}
        />
        <StatCard
          label="Submitted Reports"
          value={stats.submittedReports}
          sub="14 new reports this month"
          icon={<FileSearch size={24} className="text-purple-500" />}
        />
        <StatCard
          label="Validated Reports"
          value={stats.validatedReports}
          sub="75% validation rate"
          icon={<BarChart size={24} className="text-green-500" />}
        />
        <StatCard
          label="Total Payouts"
          value={`$${stats.totalPayouts}`}
          sub={`$${stats.paidThisMonth} paid this month`}
          icon={<DollarSign size={24} className="text-yellow-500" />}
        />
      </div>

      {/* Active Programs List */}
      <div className="mt-8 px-6">
        <h3 className="text-lg font-semibold mb-2">All Active Programs</h3>
        <ul className="space-y-2">
          {activePrograms.length === 0 ? (
            <li className="text-sm text-gray-500">
              No active programs available.
            </li>
          ) : (
            activePrograms.map((program, idx) => (
              <li
                key={idx}
                className="bg-white border border-gray-200 p-3 rounded-md shadow-sm"
              >
                <div className="font-medium">{program.name}</div>
                <div className="text-xs text-gray-500">
                  {program.description}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Activity + Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 mt-8 pb-10">
        {/* Recent Activity */}
        <div className="col-span-2 bg-white rounded-lg shadow p-4 border border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Recent Activity</h3>
            <button className="text-blue-600 text-sm hover:underline">
              View All
            </button>
          </div>
          <ul className="space-y-4">
            {activities.map((act, idx) => (
              <li
                key={idx}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50"
              >
                <div className="flex items-start gap-2">
                  {act.icon}
                  <div className="flex flex-col">
                    <span className="font-medium">{act.type}</span>
                    <span className="text-sm text-gray-600">
                      {act.description}
                    </span>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <Clock size={12} className="mr-1" />
                      {act.time}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-4 border border-gray-300 h-fit">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4 p-4 text-sm text-gray-600">
            Our security experts are available to assist with program setup and
            optimization.
            <button className="bg-blue-400 hover:bg-blue-700 text-white w-full mt-3 py-1.5 rounded-md text-sm">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

const StatCard = ({ label, value, sub }) => (
  <div className="bg-white rounded-lg shadow p-4 border border-gray-300">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-sm text-gray-400 mt-1">{sub}</div>
  </div>
);

export default Dashboard;
