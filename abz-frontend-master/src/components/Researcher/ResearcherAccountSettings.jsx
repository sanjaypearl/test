"use client";
import { useState } from "react";

export default function ResearcherAccountSettings() {
  const [photo, setPhoto] = useState("https://i.pravatar.cc/100?img=4");
  const [form, setForm] = useState({
    fullName: "Alex Rivera",
    email: "alex.rivera@securemail.com",
    username: "alexrivera_sec",
    bio: "Cybersecurity researcher with 8+ years of experience specializing in web application security and network penetration testing. Elite-level contributor on multiple bug bounty platforms.",
    phone: "+1 (555) 123-4567",
    country: "United States",
    timezone: "Pacific Time (UTC-08:00)",
    language: "English",
    paymentMethod: "PayPal",
    paypalEmail: "alex.rivera@securemail.com",
    taxInfo: "W-9 (US Taxpayer)",
    taxStatus: "W-9 submitted and verified",
    certifications: [
      {
        name: "OSCP - Offensive Security Certified Professional",
      },
      {
        name: "CEH - Certified Ethical Hacker",
        date: "Mar 2020",
      },
    ],
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded shadow p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="text-sm text-gray-500">
              Manage your account preferences and security settings
            </p>
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-300 px-4 py-2 rounded text-sm">
              View Profile
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Back to Dashboard
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-300 text-sm">
          <button className="text-blue-600 font-semibold pb-2 border-b-2 border-blue-600">
            Account Settings
          </button>
          <button className="hover:text-blue-600 text-gray-500">
            Security
          </button>
          <button className="hover:text-blue-600 text-gray-500">
            Notification Settings
          </button>
          <button className="hover:text-blue-600 text-gray-500">
            API Access
          </button>
        </div>

        {/* Profile Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1">
            Profile Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input
                  className="w-full input"
                  value={form.fullName}
                  name="fullName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  className="w-full input"
                  value={form.email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Username</label>
                <input
                  className="w-full input"
                  value={form.username}
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={photo}
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover border border-gray-300"
                />
                <div className="space-y-1">
                  <button className="text-blue-600 text-sm block">
                    Upload New Photo
                  </button>
                  <button className="text-red-600 text-sm block">
                    Remove Photo
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Bio</label>
                <textarea
                  rows="4"
                  className="w-full input"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                className="w-full input"
                value={form.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Time Zone</label>
              <select
                className="w-full input"
                name="timezone"
                value={form.timezone}
                onChange={handleChange}
              >
                <option>Pacific Time (UTC-08:00)</option>
                <option>Eastern Time (UTC-05:00)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Country</label>
              <select
                className="w-full input"
                name="country"
                value={form.country}
                onChange={handleChange}
              >
                <option>United States</option>
                <option>India</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Language</label>
              <select
                className="w-full input"
                name="language"
                value={form.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Researcher Profile */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1">
            Researcher Profile
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Specializations</label>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {[
                  "Web Application Security",
                  "API Security",
                  "Network Penetration",
                  "Mobile Security",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded"
                  >
                    {item}
                  </span>
                ))}
                <span className="text-blue-600 cursor-pointer">+ Add More</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Skills</label>
              <div className="flex flex-wrap gap-2 mt-2 text-sm">
                {["OWASP Top 10", "Burp Suite", "Python", "JavaScript"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-blue-100 text-blue-700 rounded"
                    >
                      {item}
                    </span>
                  )
                )}
                <span className="text-blue-600 cursor-pointer">+ Add More</span>
              </div>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              Certifications
            </label>
            <ul className="list-disc ml-6 text-sm space-y-1">
              {form.certifications.map((cert, i) => (
                <li key={i}>
                  <span className="font-medium">{cert.name}</span>{" "}
                  {cert.date && (
                    <span className="text-gray-500">({cert.date})</span>
                  )}
                </li>
              ))}
            </ul>
            <button className="text-blue-600 text-sm mt-2">
              + Add Certification
            </button>
          </div>
        </div>

        {/* Payment Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold border-b border-gray-300 pb-1">
            Payment Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium">Payment Method</label>
              <select
                className="w-full input"
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
              >
                <option>PayPal</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">PayPal Email</label>
              <input
                className="w-full input"
                name="paypalEmail"
                value={form.paypalEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Tax Information</label>
              <select
                className="w-full input"
                name="taxInfo"
                value={form.taxInfo}
                onChange={handleChange}
              >
                <option>W-9 (US Taxpayer)</option>
                <option>W-8 (Non-US)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Tax Document Status</label>
              <p className="text-blue-600 text-sm mt-2">{form.taxStatus}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3  border-t border-gray-300 pt-4">
          <button className="border border-gray-300 px-4 py-2 rounded text-sm">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Tailwind helper style for consistent inputs
const input = `border border-gray-300 bg-gray-50 rounded px-3 py-2 text-sm focus:outline-blue-500`;
