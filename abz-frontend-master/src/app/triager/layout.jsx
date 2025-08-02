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
  { name: "Dashboard", icon: <FaChartBar />, path: "/triager" },
  {
    name: "Incoming Reports",
    icon: <FaUsersCog />,
    path: "/triager/incoming-reports",
  },
  {
    name: "Assigned Projects",
    icon: <FaChartBar />,
    path: "/triager/assigned-reports",
  },
  {
    name: "Validated Reports",
    icon: <FaBug />,
    path: "/triager/validate-reports",
  },
  {
    name: "Researcher Feedback",
    icon: <FaFileAlt />,
    path: "/triager/researcher-feedback",
  },
  { name: "Messages ", icon: <FaUsersCog />, path: "/triager/messages" },
  { name: "Triager Setting ", icon: <FaUsersCog />, path: "/triager/setting" },
];

export default function AdminLayout({ children }) {
  const [menuItems] = useState(adminMenuItems);
  const { isAuthorized, isLoading } = useRouteProtect(["treasurer"]);

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
