"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineChevronDown } from "react-icons/hi";

const Sidebar = ({ menuItems = [] }) => {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <aside
      className={`flex flex-col justify-between bg-[#0F172A] text-white h-screen transition-all duration-300 ${
        expanded ? "w-64" : "w-20"
      } overflow-hidden`}
    >
      {/* Top: Brand and Nav */}
      <div>
        <div className="flex items-center justify-between px-4 py-4 border-b border-slate-700">
          <h2 className="text-xl font-bold tracking-wide">
            {expanded ? "CyberNeoGe" : "CNG"}
          </h2>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-white text-xl"
          >
            <HiOutlineChevronDown
              className={`transition-transform ${expanded ? "" : "rotate-180"}`}
            />
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-1">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.path;

            return (
              <Link href={item.path} key={i}>
                <div
                  className={`flex items-center px-4 py-3 mx-2 rounded-md transition-all cursor-pointer hover:bg-slate-700 ${
                    isActive ? "bg-blue-500" : ""
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {expanded && (
                    <span className="ml-4 text-sm font-medium">
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Logout */}
      <div className="px-4 pb-4">
        <hr className="border-slate-700 mb-3" />
        <Link href="/login">
          <div className="flex items-center px-4 py-3 rounded-md transition hover:bg-gray-500 bg-gray-800">
            {expanded && (
              <span className="ml-4 text-sm font-medium">Logout</span>
            )}
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
