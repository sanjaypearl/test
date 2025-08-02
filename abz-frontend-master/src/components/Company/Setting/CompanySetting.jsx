"use client";

import { useState } from "react";
import {
  ShieldCheck,
  UserPlus,
  KeyRound,
  Bell,
  Users,
  Lock,
  Settings,
} from "lucide-react";

const tabs = [
  "Company Profile",
  "Security",
  "Team Members",
  "Notifications",
  "API Access",
];

const initialProfile = {
  companyName: "TechGuard Solutions",
  website: "https://techguardsolutions.com",
  industry: "Cybersecurity",
  location: "San Francisco, CA",
  foundedYear: "2015",
  employeeSize: "1-10",
  description:
    "TechGuard Solutions is a leading cybersecurity firm specializing in vulnerability assessment, penetration testing, and security consulting. We help organizations identify and address security vulnerabilities before they can be exploited by malicious actors.",
};

export default function CompanySetting() {
  const [activeTab, setActiveTab] = useState("Company Profile");
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Company Profile":
        return (
          <div className="grid grid-cols-3 gap-8 mt-6">
            <div className="col-span-1 bg-blue-50 justify-center gap-y-4 flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24 rounded-full border border-gray-300"
              />
              <button className="bg-blue-500 mt-2 text-white px-3 py-1 rounded text-sm">
                Change Logo
              </button>
              <p className="text-xs text-gray-500 mt-1">
                Recommended: 400x400 JPG or PNG
              </p>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    value={profile.companyName}
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <input
                    value={profile.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Industry</label>
                  <select
                    value={profile.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  >
                    <option>Cybersecurity</option>
                    <option>Finance</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <input
                    value={profile.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Founded Year</label>
                  <select
                    value={profile.foundedYear}
                    onChange={(e) =>
                      handleChange("foundedYear", e.target.value)
                    }
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  >
                    <option>2015</option>
                    <option>2016</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Employee Size</label>
                  <select
                    value={profile.employeeSize}
                    onChange={(e) =>
                      handleChange("employeeSize", e.target.value)
                    }
                    className="w-full mt-1 border border-gray-300 px-3 py-2 rounded"
                  >
                    <option>1-10</option>
                    <option>11-50</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  Company Description
                </label>
                <textarea
                  value={profile.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm"
                  rows={4}
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-100 px-4 py-2 rounded text-sm">
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        );
      case "Security":
        return (
          <div className="mt-6 text-sm text-gray-700">
            🔐 Security settings go here.
          </div>
        );
      case "Team Members":
        return (
          <div className="mt-6 text-sm text-gray-700">
            👥 Manage team members here.
          </div>
        );
      case "Notifications":
        return (
          <div className="mt-6 text-sm text-gray-700">
            🔔 Configure alerts and preferences.
          </div>
        );
      case "API Access":
        return (
          <div className="mt-6 text-sm text-gray-700">
            🔑 Manage API tokens and access.
          </div>
        );
      default:
        return null;
    }
  };

  const activityLinks = [
    {
      icon: <ShieldCheck size={16} className="text-blue-500 mt-1" />,
      label: "Profile information updated",
      time: "2 hours ago",
      by: "Alex Morgan",
      tab: "Company Profile",
    },
    {
      icon: <UserPlus size={16} className="text-green-500 mt-1" />,
      label: "New team member added",
      time: "Yesterday",
      by: "Sarah Chen",
      tab: "Team Members",
    },
    {
      icon: <KeyRound size={16} className="text-purple-500 mt-1" />,
      label: "API token generated",
      time: "3 days ago",
      by: "James Wilson",
      tab: "API Access",
    },
    {
      icon: <Bell size={16} className="text-yellow-500 mt-1" />,
      label: "Notification settings updated",
      time: "5 days ago",
      by: "System",
      tab: "Notifications",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-1">Company Settings</h2>
      <p className="text-gray-600 mb-4">
        Manage your company profile, security settings, team members and more
      </p>

      {/* Tab Menu */}
      <div className="flex gap-6 border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 text-sm ${
              activeTab === tab
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Tab Content */}
      {renderTabContent()}

      {/* Sidebar */}
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="bg-blue-50 p-4">
          <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>
              <a href="#" className="block hover:underline">
                Go to Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline">
                Security Audit
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline">
                Manage Team
              </a>
            </li>
            <li>
              <a href="#" className="block hover:underline">
                API Documentation
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold">Recent Activity</h3>
            <button className="text-blue-600 text-sm hover:underline">
              View All
            </button>
          </div>
          <ul className="space-y-4 text-sm">
            {activityLinks.map((activity, i) => (
              <li
                key={i}
                className="flex items-start gap-2 cursor-pointer"
                onClick={() => setActiveTab(activity.tab)}
              >
                {activity.icon}
                <div>
                  <p className="text-gray-800 font-medium">{activity.label}</p>
                  <p className="text-gray-500 text-xs">
                    {activity.by} - {activity.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
