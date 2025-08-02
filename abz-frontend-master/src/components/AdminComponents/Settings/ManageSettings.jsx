"use client";

import { useState } from "react";

export default function ManageSettings() {
  const [formData] = useState({
    brandName: "CyberNeoGen",
    supportEmail: "support@cyberneogen.com",
    logo: "/placeholder.svg?height=48&width=48",
    favicon: "/favicon.ico",
    primaryDomain: "admin.cyberneogen.com",
    publicPortalDomain: "security.cyberneogen.com",
    sslEnabled: true,
    primaryColor: "#1e90ff",
    secondaryColor: "#1b1f24",
    theme: "Auto",
    emailTemplate: "Default Template",
  });

  const [tab, setTab] = useState("platform");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              Settings
            </h1>
            <p className="text-sm text-gray-600">
              Configure your platform settings and security preferences
            </p>
          </div>
          <div className="flex gap-3">
            <button className="border border-gray-300 bg-white text-sm px-4 py-2 rounded hover:bg-gray-100">
              Back to Dashboard
            </button>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white shadow-sm rounded">
          {/* Tabs */}
          <div className="border-b border-gray-300 px-6 pt-4 flex space-x-8 text-sm font-medium">
            {["platform", "users", "security"].map((key) => (
              <button
                key={key}
                className={`pb-3 ${
                  tab === key
                    ? "border-b-2  border-blue-600 text-blue-600"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => setTab(key)}
              >
                {key === "platform"
                  ? "Platform Settings"
                  : key === "users"
                  ? "User Management"
                  : "Security"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {tab === "platform" && (
            <div className="p-6 space-y-8">
              {/* Brand Configuration */}
              <section>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Brand Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Brand Name
                    </label>
                    <input
                      value={formData.brandName}
                      readOnly
                      className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      This will appear in the header and on system emails
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Support Email
                    </label>
                    <input
                      value={formData.supportEmail}
                      readOnly
                      className="w-full mt-1 border-gray-300 border px-3 py-2 rounded text-sm bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Used for system notifications and user support
                    </p>
                  </div>
                </div>
              </section>

              {/* Logo & Branding */}
              <section className="border-t border-gray-300 pt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Logo & Branding
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Platform Logo
                    </label>
                    <div className="flex items-center gap-4 mt-2">
                      <img
                        src={formData.logo}
                        className="w-12 h-12 bg-gray-100 rounded"
                      />
                      <button className="border border-gray-300 px-3 py-1 rounded text-sm bg-gray-100">
                        Change Logo
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Recommended size: 200x200px, PNG or SVG format
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Favicon
                    </label>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="w-4 h-4 bg-gray-300 rounded" />
                      <button className="border border-gray-300 px-3 py-1 rounded text-sm bg-gray-100">
                        Change Favicon
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Recommended size: 32x32px, ICO or PNG format
                    </p>
                  </div>
                </div>
              </section>

              {/* Domain Configuration */}
              <section className="border-t border-gray-300 pt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Domain Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Primary Domain
                    </label>
                    <input
                      value={formData.primaryDomain}
                      readOnly
                      className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Main domain for admin access
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Public Portal Domain
                    </label>
                    <input
                      value={formData.publicPortalDomain}
                      readOnly
                      className="w-full mt-1 border border-gray-300 px-3 py-2 rounded text-sm bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Domain for public-facing security portal
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 items-start">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="checkbox" checked readOnly />
                    Enable SSL for custom domains
                  </label>
                  <button className="border border-gray-300 px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
                    Verify Domains
                  </button>
                </div>
              </section>

              {/* Platform Customization */}
              <section className="border-t border-gray-300 pt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Platform Customization
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Primary Color
                    </label>
                    <div className="flex items-center gap-3 mt-1">
                      <div
                        className="w-10 h-10 border border-gray-300 rounded"
                        style={{ backgroundColor: formData.primaryColor }}
                      />
                      <span className="text-sm">{formData.primaryColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Secondary Color
                    </label>
                    <div className="flex items-center gap-3 mt-1">
                      <div
                        className="w-10 h-10 border border-gray-300 rounded"
                        style={{ backgroundColor: formData.secondaryColor }}
                      />
                      <span className="text-sm">{formData.secondaryColor}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Theme Mode
                    </label>
                    <div className="flex gap-6 mt-2 text-sm">
                      {["Light", "Dark", "Auto"].map((mode) => (
                        <label key={mode} className="flex items-center gap-2">
                          <input
                            type="radio"
                            checked={formData.theme === mode}
                            readOnly
                          />
                          {mode === "Auto" ? "Auto (System)" : mode}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email Template
                    </label>
                    <select
                      className="mt-1 w-full border border-gray-300 px-3 py-2 rounded text-sm bg-gray-50"
                      value={formData.emailTemplate}
                      readOnly
                    >
                      <option>Default Template</option>
                      <option>Custom Template</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6">
                  <button className="text-sm text-gray-600 underline">
                    Reset to Defaults
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                    Preview Changes
                  </button>
                </div>
              </section>
            </div>
          )}

          {tab === "users" && (
            <div className="p-6 text-gray-600 text-sm">
              User Management settings will be displayed here.
            </div>
          )}

          {tab === "security" && (
            <div className="p-6 text-gray-600 text-sm">
              Security settings will be displayed here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
