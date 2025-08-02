"use client";

import Header from "@/components/AdminComponents/Header";
import Sidebar from "@/components/AdminComponents/Sidebar";
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
  { name: "Dashboard", icon: <FaChartBar />, path: "/company" },
  { name: "Programs", icon: <FaUsersCog />, path: "/company/programs" },
  { name: "My Reports", icon: <FaChartBar />, path: "/company/reports" },
  { name: "Researchers", icon: <FaBug />, path: "/company/researchers" },
  { name: "Payouts", icon: <FaFileAlt />, path: "/company/payouts" },
  { name: "Messages ", icon: <FaUsersCog />, path: "/company/messages" },
  { name: "Company Setting ", icon: <FaUsersCog />, path: "/company/setting" },
];

export default function AdminLayout({ children }) {
  const [menuItems] = useState(adminMenuItems);
  
  const { isAuthorized, isLoading } = useRouteProtect(["company"]);

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
