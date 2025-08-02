"use client";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Code,
  Image,
  Video,
  X,
  ChevronDown,
} from "lucide-react";

const AddAssetsForm = () => {
  const editor = useRef(null);

  const [formData, setFormData] = useState({
    assetUrl: "",
    assetDescription: "",
    assetType: "",
    labels: [],
    credentialVault: "",
    requireWhitelist: "",
  });

  const [labelInput, setLabelInput] = useState("");
  const [showLabelDropdown, setShowLabelDropdown] = useState(false);

  // Predefined label options
  const labelOptions = [
    "Development",
    "Production",
    "Staging",
    "Testing",
    "API",
    "Website",
    "Mobile",
    "Backend",
    "Frontend",
    "Database",
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addLabel = (label) => {
    if (label.trim() && !formData.labels.includes(label.trim())) {
      setFormData((prev) => ({
        ...prev,
        labels: [...prev.labels, label.trim()],
      }));
      setLabelInput("");
      setShowLabelDropdown(false);
    }
  };

  const removeLabel = (index) => {
    setFormData((prev) => ({
      ...prev,
      labels: prev.labels.filter((_, i) => i !== index),
    }));
  };

  const handleLabelInputChange = (value) => {
    setLabelInput(value);
    setShowLabelDropdown(value.length > 0);
  };

  const filteredLabelOptions = labelOptions.filter(
    (option) =>
      option.toLowerCase().includes(labelInput.toLowerCase()) &&
      !formData.labels.includes(option)
  );

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Manage Assets</h1>

        <div className="space-y-6">
          {/* Asset URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Asset URL{" "}
              <span className="text-blue-500">
                ⓘ Please enforce HTTPS for the asset URL
              </span>
            </label>
            <input
              type="url"
              value={formData.assetUrl}
              onChange={(e) => handleInputChange("assetUrl", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter Asset URL"
            />
          </div>

          {/* Asset Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Asset Description{" "}
              <span className="text-blue-500">ⓘ Description for the asset</span>
            </label>

            <JoditEditor
              ref={editor}
              defaultValue={formData.assetDescription}
              onBlur={(newContent) =>
                handleInputChange("assetDescription", newContent)
              }
            />
          </div>

          {/* Asset Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Asset Type
            </label>
            <select
              value={formData.assetType}
              onChange={(e) => handleInputChange("assetType", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Select Asset Type</option>
              <option value="Website">Website</option>
              <option value="API">API</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Desktop App">Desktop App</option>
              <option value="Database">Database</option>
              <option value="Server">Server</option>
            </select>
          </div>

          {/* Labels */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Labels
            </label>

            {/* Selected Labels */}
            {formData.labels.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {formData.labels.map((label, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {label}
                    <button
                      type="button"
                      onClick={() => removeLabel(index)}
                      className="ml-2 hover:text-red-600"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Label Input with Dropdown */}
            <div className="relative">
              <div className="flex">
                <input
                  type="text"
                  value={labelInput}
                  onChange={(e) => handleLabelInputChange(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLabel(labelInput);
                    }
                  }}
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Type or select labels..."
                />
                <button
                  type="button"
                  onClick={() => setShowLabelDropdown(!showLabelDropdown)}
                  className="border-t border-r border-b border-gray-300 px-3 py-2 bg-gray-50 hover:bg-gray-100"
                >
                  <ChevronDown size={16} className="text-gray-600" />
                </button>
                <button
                  type="button"
                  onClick={() => addLabel(labelInput)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg"
                >
                  Add
                </button>
              </div>

              {/* Dropdown Options */}
              {showLabelDropdown && filteredLabelOptions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredLabelOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => addLabel(option)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Credential Vault */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Credential Vault(s){" "}
              <span className="text-blue-500">
                ⓘ Only one dynamic vault can be selected
              </span>
            </label>
            <select
              value={formData.credentialVault}
              onChange={(e) =>
                handleInputChange("credentialVault", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Select Credential Vault(s)</option>
              <option value="vault1">Production Vault</option>
              <option value="vault2">Development Vault</option>
              <option value="vault3">Testing Vault</option>
              <option value="vault4">Staging Vault</option>
            </select>
          </div> */}

          {/* Require Whitelist */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Require Whitelist?{" "}
              <span className="text-blue-500">
                ⓘ Asset can only be accessed after whitelisting
              </span>
            </label>
            <select
              value={formData.requireWhitelist}
              onChange={(e) =>
                handleInputChange("requireWhitelist", e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div> */}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Save Asset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssetsForm;
