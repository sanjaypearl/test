"use client";

import Header from "@/components/AdminComponents/Header";
import Sidebar from "@/components/AdminComponents/Sidebar";
import useRoleRedirect from "@/hooks/useRedirectRole";
import useRouteProtect from "@/hooks/useRouteProtect";
import { useState } from "react";

import {
  FaChartBar,
  FaBug,
  FaFileAlt,
  FaUsersCog,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

const adminMenuItems = [
  { name: "Dashboard", icon: <FaChartBar />, path: "/admin" },
  { name: "Manage Companies", icon: <FaUsersCog />, path: "/admin/companies" },
  { name: "Manage Users", icon: <FaChartBar />, path: "/admin/users" },
  { name: "All Programs", icon: <FaBug />, path: "/admin/programs" },
  { name: "All Reports", icon: <FaFileAlt />, path: "/admin/reports" },
  { name: "Payouts ", icon: <FaUsersCog />, path: "/admin/payouts" },
  { name: "Analytics ", icon: <FaUsersCog />, path: "/admin/analytics" },
  { name: "Messages", icon: <FaEnvelope />, path: "/admin/messages" },
  { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
  { name: "Admin Controls", icon: <FaCog />, path: "/admin/controls" },
];

export default function AdminLayout({ children }) {
  const [menuItems] = useState(adminMenuItems);
  const { isAuthorized, isLoading } = useRouteProtect(["admin"]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (!isAuthorized) return null;


  return (
    <div className="flex">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
