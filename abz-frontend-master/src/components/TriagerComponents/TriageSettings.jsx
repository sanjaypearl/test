"use client";
import React, { useState } from "react";

// Reusable Toggle Switch
const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-block w-11 h-6">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 peer-checked:translate-x-5"></div>
  </label>
);

const TriageSettings = () => {
  const [activeTab, setActiveTab] = useState("Notification Preferences");

  const tabs = ["Notification Preferences", "Report Templates", "Custom Rules"];

  const [settings, setSettings] = useState({
    newReportAlerts: true,
    newReportAlertsFrequency: "Immediately",
    assignmentUpdates: true,
    assignmentNotify: "Me Only",
    researcherComm: true,
    statusChangeNotif: false,
    dashboardAlerts: true,
    criticalPopups: true,
    soundAlerts: true,
    soundType: "Subtle Chime",
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSettings({
      newReportAlerts: true,
      newReportAlertsFrequency: "Immediately",
      assignmentUpdates: true,
      assignmentNotify: "Me Only",
      researcherComm: true,
      statusChangeNotif: false,
      dashboardAlerts: true,
      criticalPopups: true,
      soundAlerts: true,
      soundType: "Subtle Chime",
    });
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-5xl mx-auto text-sm font-sans">
      <h2 className="text-2xl font-semibold mb-1">Triage Settings</h2>
      <p className="text-gray-500 mb-4">
        Configure your workflow preferences and automation rules
      </p>

      {/* Tabs */}
      <div className="border-b border-gray-300 flex gap-6 text-sm mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Notification Preferences" && (
        <>
          {/* Email Notifications */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Email Notifications</h3>

            {/* New Report Alerts */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">New Report Alerts</p>
                <p className="text-gray-500 text-xs">
                  Receive notifications when new vulnerability reports are
                  submitted
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="border rounded px-2 py-1 text-xs"
                  value={settings.newReportAlertsFrequency}
                  onChange={(e) =>
                    handleChange("newReportAlertsFrequency", e.target.value)
                  }
                >
                  <option>Immediately</option>
                  <option>Hourly</option>
                  <option>Daily</option>
                </select>
                <ToggleSwitch
                  checked={settings.newReportAlerts}
                  onChange={() => handleToggle("newReportAlerts")}
                />
              </div>
            </div>

            {/* Assignment Updates */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Assignment Updates</p>
                <p className="text-gray-500 text-xs">
                  Get notified when reports are assigned to you or your team
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="border rounded px-2 py-1 text-xs"
                  value={settings.assignmentNotify}
                  onChange={(e) =>
                    handleChange("assignmentNotify", e.target.value)
                  }
                >
                  <option>Me Only</option>
                  <option>My Team</option>
                </select>
                <ToggleSwitch
                  checked={settings.assignmentUpdates}
                  onChange={() => handleToggle("assignmentUpdates")}
                />
              </div>
            </div>

            {/* Researcher Communications */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Researcher Communications</p>
                <p className="text-gray-500 text-xs">
                  Be alerted when researchers respond to your feedback
                </p>
              </div>
              <ToggleSwitch
                checked={settings.researcherComm}
                onChange={() => handleToggle("researcherComm")}
              />
            </div>

            {/* Status Change Notifications */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Status Change Notifications</p>
                <p className="text-gray-500 text-xs">
                  Get updates when report statuses change (validated, rejected,
                  etc.)
                </p>
              </div>
              <ToggleSwitch
                checked={settings.statusChangeNotif}
                onChange={() => handleToggle("statusChangeNotif")}
              />
            </div>
          </div>

          {/* In-App Notifications */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">In-App Notifications</h3>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Dashboard Alerts</p>
                <p className="text-gray-500 text-xs">
                  Show real-time notifications on your dashboard
                </p>
              </div>
              <ToggleSwitch
                checked={settings.dashboardAlerts}
                onChange={() => handleToggle("dashboardAlerts")}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Critical Severity Popups</p>
                <p className="text-gray-500 text-xs">
                  Show popup notifications for critical severity reports
                </p>
              </div>
              <ToggleSwitch
                checked={settings.criticalPopups}
                onChange={() => handleToggle("criticalPopups")}
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Sound Alerts</p>
                <p className="text-gray-500 text-xs">
                  Play sound when new notifications arrive
                </p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="border rounded px-2 py-1 text-xs"
                  value={settings.soundType}
                  onChange={(e) => handleChange("soundType", e.target.value)}
                >
                  <option>Subtle Chime</option>
                  <option>Beep</option>
                  <option>None</option>
                </select>
                <ToggleSwitch
                  checked={settings.soundAlerts}
                  onChange={() => handleToggle("soundAlerts")}
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between mt-8">
            <button
              className="px-4 py-2 text-sm border rounded text-gray-600 hover:bg-gray-100"
              onClick={handleReset}
            >
              Reset to Defaults
            </button>
            <div className="space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                Save Notification Settings
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                Save All Changes
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TriageSettings;
