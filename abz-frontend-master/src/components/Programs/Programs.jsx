"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import DataService from "@/services/Axios/axiosInterceptor";
import { toast } from "react-toastify";

const NewProgramModal = ({ onClose, onSave }) => {
  const [program, setProgram] = useState({
    name: "",
    company: "",
    description: "",
    logoUrl: null,
    type: "Public",
    startDate: "",
    endDate: "",
  });

  const [companies, setCompanies] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProgram({ ...program, [name]: value });
  };

  const handleFileChange = (e) => {
    setProgram({ ...program, logoUrl: e.target.files[0] });
  };

  const getAllCompanies = async () => {
    try {
      const response = await DataService.getAllCompany();
      if (response.data.success) {
        setCompanies(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching companies", error);
      toast.error("Failed to load company list");
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", program.name);
      formData.append("company", program.company);
      formData.append("description", program.description);
      formData.append("startDate", program.startDate);
      formData.append("endDate", program.endDate);
      formData.append("type", program.type);
      console.log("Selected company ID:", program.company);

      if (program.logoUrl) {
        formData.append("logoUrl", program.logoUrl);
      }

      const response = await DataService.addProgram(formData);
      if (response.data.success) {
        toast.success("Program created successfully");
        onSave(response.data.data);
        onClose();

      } else {
        toast.error(response.data.message || "Failed to create program");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.error("Create program error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Modal content */}
      <div className="relative bg-white p-6 rounded-lg w-full max-w-3xl shadow-lg text-gray-900 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Create New Bug Bounty Program</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">Program Name*</label>
            <input
              type="text"
              name="name"
              value={program.name}
              onChange={handleInputChange}
              placeholder="Enter program name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Select Company*</label>
            <select
              name="company"
              value={program.company}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All Company</option>
              {companies.map((company) => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Logo Upload (optional)</label>
          <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded">
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.svg"
              onChange={handleFileChange}
              className="hidden"
              id="logo-upload"
            />
            <label htmlFor="logo-upload" className="cursor-pointer text-blue-600 font-medium">
              Images
            </label>
            {program.logoUrl && (
              <p className="text-sm mt-2 text-gray-500">{program.logoUrl.name}</p>
            )}
            <p className="text-xs mt-1 text-gray-400">
              Supported formats: PNG, JPG, SVG (Max 2MB)
            </p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Program Description*</label>
          <textarea
            name="description"
            value={program.description}
            onChange={handleInputChange}
            rows="4"
            placeholder="Describe your bug bounty program..."
            className="w-full p-2 border rounded"
          ></textarea>
          <p className="text-xs text-gray-400 mt-1">Markdown supported</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">Program Type*</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="Public"
                  checked={program.type === "Public"}
                  onChange={handleInputChange}
                />
                Public
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value="Private"
                  checked={program.type === "Private"}
                  onChange={handleInputChange}
                />
                Private
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Public programs are visible to all researchers.
            </p>
          </div>
          <div>
            <label className="block mb-1 font-medium">Program Duration*</label>
            <div className="flex gap-2">
              <input
                type="date"
                name="startDate"
                value={program.startDate}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              />
              <input
                type="date"
                name="endDate"
                value={program.endDate}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Leave end date empty for ongoing programs.
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProgramModal;
