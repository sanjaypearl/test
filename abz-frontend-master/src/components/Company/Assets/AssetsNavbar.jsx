"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const AssetsNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Determine active tab based on URL path
  const [activeTab, setActiveTab] = useState("assets");

  useEffect(() => {
    if (pathname.startsWith("/company/assets")) {
      setActiveTab("assets");
    } else if (pathname.startsWith("/company/assets/whitelist")) {
      setActiveTab("whitelist");
    } else {
      setActiveTab(""); // default or no tab active
    }
  }, [pathname]);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-900">
                AssetPro
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex space-x-1">
              <button
                onClick={() => router.push("/company/assets")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "assets"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Assets
              </button>
              <button
                onClick={() => router.push("/company/assets/whitelist")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === "whitelist"
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Whitelist
              </button>
            </div>
          </div>

          {/* Right side - Search and User Actions */}
          <div className="flex items-center space-x-4"></div>
        </div>
      </div>

      {/* Content Area - Shows current active tab */}
    </nav>
  );
};

export default AssetsNavbar;
