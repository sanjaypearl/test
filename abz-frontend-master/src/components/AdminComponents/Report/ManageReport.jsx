"use client";

import { useEffect, useState } from "react";
import DataService from "@/services/Axios/axiosInterceptor";
import { toast, ToastContainer } from "react-toastify";
import { FaTimes } from "react-icons/fa";

const SubmitReportForm = ({ onClose, reportData = null, onSubmitSuccess }) => {
  const [form, setForm] = useState({
    program: "",
    reportTitle: "",
    vulnerabilityType: "",
    affected_asset: "",
    cvss_score: "",
    similar_cve_reference: "",
    severity: "",
    vulnerability_details: "",
    reproduction_steps: "",
    import_explanation: "",
    mitigation_recommendation: "",
    private_nate_to_cyberveo: "",
    additional_information: {
      tags_lable: "",
      reference_link: "",
    },
  });

  const [file, setFile] = useState(null);

  // Pre-fill form if editing
  useEffect(() => {
    if (reportData) {
      setForm({
        ...reportData,
        additional_information: {
          tags_lable: reportData?.additional_information?.tags_lable || "",
          reference_link: reportData?.additional_information?.reference_link || "",
        },
      });
    }
  }, [reportData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in form.additional_information) {
      setForm((prev) => ({
        ...prev,
        additional_information: {
          ...prev.additional_information,
          [name]: value,
        },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      for (const key in form) {
        if (key === "additional_information") {
          formData.append("additional_information[tags_lable]", form.additional_information.tags_lable);
          formData.append("additional_information[reference_link]", form.additional_information.reference_link);
        } else {
          formData.append(key, form[key]);
        }
      }

      if (file) formData.append("file", file);

      if (reportData?._id) {
        // EDIT mode
        await DataService.updateReport(reportData._id, formData);
        toast.success("Report updated!");
      } else {
        // CREATE mode
        await DataService.createReport(formData);
        toast.success("Report submitted!");
      }

      onClose();
      onSubmitSuccess?.(); // optional refresh callback
    } catch (err) {
      toast.error(err.response?.data?.error || "Submission failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6 overflow-y-auto max-h-[90vh]">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-black">
          {reportData ? "Edit Report" : "Submit New Report"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
          {/* Text Inputs */}
          {[
            { label: "Program", name: "program" },
            { label: "Bug Title", name: "reportTitle" },
            { label: "Vulnerability Type", name: "vulnerabilityType" },
            { label: "Affected Asset", name: "affected_asset" },
            { label: "CVSS Score", name: "cvss_score" },
            { label: "Similar CVE Reference", name: "similar_cve_reference" },
          ].map((input) => (
            <div key={input.name}>
              <label className="block text-sm font-medium">{input.label}</label>
              <input
                type="text"
                name={input.name}
                value={form[input.name]}
                onChange={handleChange}
                className="input border border-gray-300 p-2 w-full rounded"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium">Severity</label>
            <select
              name="severity"
              value={form.severity}
              onChange={handleChange}
              className="input border border-gray-300 p-2 w-full rounded"
            >
              <option value="">Select Severity</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          {/* Textareas */}
          {[
            { label: "Vulnerability Details", name: "vulnerability_details" },
            { label: "Reproduction Steps", name: "reproduction_steps" },
            { label: "Impact Explanation", name: "import_explanation" },
            { label: "Mitigation Recommendation", name: "mitigation_recommendation" },
            { label: "Private Note to Team", name: "private_nate_to_cyberveo" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium">{field.label}</label>
              <textarea
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="input border border-gray-300 p-2 w-full rounded"
              />
            </div>
          ))}

          {/* Additional Info */}
          <div>
            <label className="block text-sm font-medium">Tags / Labels</label>
            <input
              type="text"
              name="tags_lable"
              value={form.additional_information.tags_lable}
              onChange={handleChange}
              className="input border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Reference Link</label>
            <input
              type="text"
              name="reference_link"
              value={form.additional_information.reference_link}
              onChange={handleChange}
              className="input border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* File */}
          <div>
            <label className="block text-sm font-medium">Attachment</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="input border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            {reportData ? "Update Report" : "Submit Report"}
          </button>
        </form>
      </div>
       <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
};

export default SubmitReportForm;
