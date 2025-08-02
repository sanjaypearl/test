"use client";

import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import DataService from "@/services/Axios/axiosInterceptor";
import { FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

import NewProgramModal from "@/components/Programs/Programs";

const ManageProgram = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [programData, setProgramData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editProgram, setEditProgram] = useState({
    _id: "",
    name: "",
    company: { _id: "", name: "" },
    status: "active",
  });

  const getAllProgram = async () => {
    try {
      const response = await DataService.getAllActiveProgram();
      setProgramData(response?.data?.data || []);
    } catch (error) {
      toast.error("Failed to load programs");
    }
  };

  const handleEditProgram = async () => {
    try {
      const { _id, name, company, status } = editProgram;
      const formData = {
        name,
        company: company._id,
        status,
      };

      const res = await DataService.UpdateProgram(_id, formData);
      toast.success(res?.data?.message || "Program updated successfully");

      setShowModalEdit(false);
      setEditProgram({ _id: "", name: "", company: { _id: "", name: "" }, status: "active" });
      getAllProgram();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating program");
    }
  };

  const openEditModal = (program) => {
    setEditProgram({
      _id: program._id,
      name: program.name,
      company: program.company,
      status: program.status || "active",
    });
    setShowModalEdit(true);
  };

  useEffect(() => {
    getAllProgram();
  }, []);

  const filtered = programData.filter((program) => {
    const matchesName = program.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = selectedStatus === "All" || program.status === selectedStatus;
    return matchesName && matchesStatus;
  });

  const pieData = {
    labels: ["active", "paused", "inactive"],
    datasets: [
      {
        data: [
          programData.filter((p) => p.status === "active").length,
          programData.filter((p) => p.status === "paused").length,
          programData.filter((p) => p.status === "inactive").length,
        ],
        backgroundColor: ["#34D399", "#FBBF24", "#F87171"],
      },
    ],
  };

  const barData = {
    labels: ["Critical", "High", "Medium", "Low"],
    datasets: [
      {
        label: "Reports",
        backgroundColor: "#3B82F6",
        data: [42, 156, 207, 331],
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen text-sm">
      {showModal && (
        <NewProgramModal
          onClose={() => setShowModal(false)}
          onSave={() => {
            setShowModal(false);
            getAllProgram();
          }}
        />
      )}

      {showModalEdit && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Update Program</h2>
            <input
              type="text"
              placeholder="Program Name"
              value={editProgram.name}
              onChange={(e) => setEditProgram({ ...editProgram, name: e.target.value })}
              className="border w-full p-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Company"
              value={editProgram.company?.name || ""}
              className="border w-full p-2 rounded mb-4"
              readOnly
            />
            <select
              value={editProgram.status}
              onChange={(e) => setEditProgram({ ...editProgram, status: e.target.value })}
              className="border w-full p-2 rounded mb-4"
            >
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowModalEdit(false)} className="px-4 py-2 border rounded">
                Cancel
              </button>
              <button
                onClick={handleEditProgram}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-xl font-semibold">All Programs</h1>
          <p className="text-gray-500 text-sm">Manage and monitor all bug bounty programs</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100 text-sm">
            View All Reports
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2 text-sm"
          >
            <FaPlus /> Add New Program
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow p-4 mb-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by program name"
            className="border border-gray-200 p-2 rounded text-sm"
          />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="border border-gray-200 p-2 rounded text-sm"
          >
            <option value="All">All Statuses</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={() => {
            setSearch("");
            setSelectedStatus("All");
          }}
          className="text-blue-600 text-sm"
        >
          Reset Filters
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-auto">
        <table className="w-full min-w-[768px] text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3">Program Name</th>
              <th>Company</th>
              <th>Reports Received</th>
              <th>Status</th>
              <th>Last Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((program, i) => (
              <tr key={i} className="border-t border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        program.logoUrl
                          ? program.logoUrl
                          : `https://ui-avatars.com/api/?name=${program.name}&background=random`
                      }
                      alt={program.name}
                      className="w-8 h-8 object-cover rounded"
                    />
                    <span className="font-medium">{program.name}</span>
                  </div>
                </td>
                <td>{program.company?.name || "N/A"}</td>
                <td className="text-green-600 font-medium">
                  {program.reportsReceived || 0}
                  <span className="block text-xs text-green-500">
                    {program.reportsChange || ""}
                  </span>
                </td>
                <td
                  className={`font-semibold ${
                    program.status === "active"
                      ? "text-green-600"
                      : program.status === "paused"
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {program.status}
                </td>
                <td>{new Date(program.updatedAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => openEditModal(program)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 gap-3 text-gray-500">
          <span>
            Showing {filtered.length} of {programData.length} programs
          </span>
          <div className="flex gap-1">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`px-3 py-1 rounded border ${
                  n === 1 ? "bg-blue-600 text-white" : ""
                }`}
              >
                {n}
              </button>
            ))}
            <select className="ml-2 border px-2 py-1 text-sm rounded">
              <option>5</option>
              <option>10</option>
            </select>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded p-4 shadow w-full">
          <h3 className="font-medium text-sm mb-2">Program Status</h3>
          <Pie data={pieData} />
        </div>
        <div className="bg-white rounded p-4 shadow w-full">
          <h3 className="font-medium text-sm mb-2">Reports by Severity</h3>
          <Bar data={barData} height={200} />
        </div>
        <div className="bg-white rounded p-4 shadow w-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium text-sm">Recent Activity</h3>
            <button className="text-blue-600 text-xs">View All</button>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <span className="font-medium">Emily Chan</span> submitted a
              critical vulnerability in{" "}
              <span className="font-semibold text-black">
                Cloud Security Initiative
              </span>
              <div className="text-xs text-gray-400">2 hours ago</div>
            </li>
            <li>
              <span className="font-medium">Marcus Johnson</span> paused{" "}
              <span className="font-semibold text-black">
                IoT Security Initiative
              </span>
              <div className="text-xs text-gray-400">5 hours ago</div>
            </li>
            <li>
              <span className="font-medium">Sarah Williams</span> updated{" "}
              <span className="font-semibold text-black">
                API Security Program
              </span>
              <div className="text-xs text-gray-400">1 day ago</div>
            </li>
            <li>
              <span className="font-medium">David Kim</span> added new report
              to{" "}
              <span className="font-semibold text-black">
                Web Application
              </span>
              <div className="text-xs text-gray-400">2 days ago</div>
            </li>
          </ul>
        </div>
      </div>
       <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
};

export default ManageProgram;
