"use client";
import { useState } from "react";
import {
  Home,
  Users,
  BarChart3,
  Settings,
  User,
  Bell,
  FileText,
  Calendar,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function NavigationSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems = [
    { name: "Dashboard", icon: Home, href: "/company", active: true },
    {
      name: "insights",
      icon: BarChart3,
      href: "/company/insights",
      active: false,
    },
    { name: "Assets", icon: FileText, href: "/company/assets", active: true },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {sidebarOpen && (
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">
                Company
              </span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? (
              <X size={20} className="text-gray-600" />
            ) : (
              <Menu size={20} className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors group ${
                    item.active
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <item.icon
                    size={20}
                    className={`${
                      item.active
                        ? "text-blue-600"
                        : "text-gray-500 group-hover:text-blue-600"
                    }`}
                  />
                  {sidebarOpen && (
                    <span className="ml-3 font-medium">{item.name}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 border-t border-gray-200">
          <div
            className={`flex items-center ${
              sidebarOpen ? "space-x-3" : "justify-center"
            }`}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">company</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
