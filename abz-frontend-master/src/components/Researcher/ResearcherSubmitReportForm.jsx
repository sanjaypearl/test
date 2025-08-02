"use client";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function ResearcherSubmitReportForm() {
  const [form, setForm] = useState({
    program: "",
    title: "",
    type: "",
    severity: "",
    steps: "",
    impact: "",
    files: [],
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Add actual submission logic here (API call etc.)
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-6xl mx-auto my-8">
      <h2 className="text-xl font-semibold mb-4">
        Submit Vulnerability Report
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Complete the form below to submit a new vulnerability report
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Program */}
        <div>
          <label className="block text-sm font-medium mb-1">Program *</label>
          <select
            name="program"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.program}
            onChange={handleChange}
            required
          >
            <option value="">Select a program</option>
            <option>SecureTech Cloud</option>
            <option>RetailShield E-commerce</option>
            <option>FinGuard Banking</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Report Title *
          </label>
          <input
            name="title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Provide a clear, descriptive title for your vulnerability"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Vulnerability Type *
          </label>
          <select
            name="type"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={form.type}
            onChange={handleChange}
            required
          >
            <option value="">Select vulnerability type</option>
            <option>SQL Injection</option>
            <option>XSS</option>
            <option>IDOR</option>
            <option>CSRF</option>
            <option>Other</option>
          </select>
        </div>

        {/* Severity */}
        <div>
          <label className="block text-sm font-medium mb-2">Severity *</label>
          <div className="flex gap-4">
            {["Low", "Medium", "High", "Critical"].map((level) => (
              <label key={level} className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="severity"
                  value={level}
                  checked={form.severity === level}
                  onChange={handleChange}
                  required
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Steps to Reproduce */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Steps to Reproduce *
          </label>
          <textarea
            name="steps"
            className="w-full border border-gray-300 rounded px-3 py-2 h-28"
            placeholder="Provide detailed step-by-step instructions to reproduce the vulnerability"
            value={form.steps}
            onChange={handleChange}
            required
          />
        </div>

        {/* Impact Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Impact Description *
          </label>
          <textarea
            name="impact"
            className="w-full border border-gray-300 rounded px-3 py-2 h-24"
            placeholder="Describe the potential impact of this vulnerability and how it could be exploited"
            value={form.impact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-medium mb-2">Attachments</label>
          <div className="border-2  border-dashed rounded p-6 flex flex-col items-center gap-2 text-center bg-gray-50">
            <UploadCloud className="w-8 h-8 text-blue-500" />
            <input
              type="file"
              name="files"
              multiple
              onChange={handleChange}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded text-sm"
            >
              Browse Files
            </label>
            <p className="text-xs text-gray-400">
              Max file size: 20MB. Supported formats: PNG, JPG, PDF
            </p>
          </div>
        </div>

        {/* Confirm Checkbox */}
        <div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="confirm"
              checked={form.confirm}
              onChange={handleChange}
              required
            />
            I confirm this report complies with the program’s disclosure policy
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="border border-gray-400 px-4 py-2 rounded"
          >
            Save Draft
          </button>
          <button
            type="button"
            className="border border-gray-400 px-4 py-2 rounded"
          >
            Preview
          </button>
          <button
            type="submit"
            className="ml-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit Report
          </button>
        </div>
      </form>

      {/* Submission Tips */}
      <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 text-sm text-blue-700">
        <p className="font-semibold mb-2">Submission Tips</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Include clear reproduction steps with specific URLs and parameters
          </li>
          <li>
            Attach screenshots or screen recordings to demonstrate the
            vulnerability
          </li>
          <li>
            Explain the potential business impact or threat from the issue
          </li>
          <li>Provide suggestions for remediation if possible</li>
        </ul>
      </div>
    </div>
  );
}
