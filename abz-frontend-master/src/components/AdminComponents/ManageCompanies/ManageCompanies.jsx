"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { FaBuilding, FaCheck, FaBan } from "react-icons/fa";
import DataServices from "@/services/Axios/axiosInterceptor";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageCompanies = () => {
  const [companiesData, setCompaniesData] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
    industry: "",
    logoUrl: null,
    password: "",
    role: "",
    status: "active",
  });

  const fetchCompanies = async () => {
    try {
      const res = await DataServices.getAllCompany();
      const data = res?.data?.data;
      if (data) setCompaniesData(data);
    } catch (error) {
      console.error("Error fetching companies", error);
      toast.error("Failed to fetch companies.");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const submitCompany = async () => {
    try {
      let payload;

      if (newCompany._id) {
        // Editing (use FormData for optional image upload)
        payload = new FormData();
        payload.append("name", newCompany.name || "");
        payload.append("email", newCompany.email || "");
        payload.append("industry", newCompany.industry || "");
        payload.append("status", newCompany.status || "active");

        if (newCompany.logoUrl && typeof newCompany.logoUrl !== "string") {
          payload.append("logoUrl", newCompany.logoUrl);
        }
      } else {
        // Creating (send JSON only, no image)
        payload = {
          name: newCompany.name,
          email: newCompany.email,
          password: newCompany.password,
          role: "company",
        };

      }

      if (newCompany._id) {
        const res = await DataServices.updateCompanyById(
          newCompany._id,
          payload
        );
        toast.success(res?.data?.message || "Company updated");
      } else {
        await DataServices.addCompany(payload);
        toast.success("Company added successfully!");
      }

      fetchCompanies();
      setNewCompany({
        name: "",
        email: "",
        industry: "",
        logoUrl: null,
        password: "",
        role: "",
        status: "active",
      });
      setIsModalOpen(false);
    } catch (err) {
      console.error("Submit failed", err);
      toast.error("Failed to submit company.");
    }
  };

  const filteredCompanies = companiesData.filter((company) => {
    const matchStatus =
      statusFilter === "All" || company.status === statusFilter;
    const matchIndustry =
      industryFilter === "All" || company.industry === industryFilter;
    const matchSearch = company.name
      ?.toLowerCase()
      .includes(search.toLowerCase());
    return matchStatus && matchIndustry && matchSearch;
  });

  const industries = [...new Set(companiesData.map((c) => c.industry))];
  const totalCompanies = companiesData.length;
  const activeCompanies = companiesData.filter(
    (c) => c.status === "active"
  ).length;
  const suspendedCompanies = companiesData.filter(
    (c) => c.status === "suspended"
  ).length;

  const barChartData = {
    labels: industries,
    datasets: [
      {
        label: "Companies",
        data: industries.map(
          (ind) => companiesData.filter((c) => c.industry === ind).length
        ),
        backgroundColor: "#3B82F6",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {newCompany._id ? "Edit Company" : "Add New Company"}
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={newCompany.name}
                onChange={(e) =>
                  setNewCompany({ ...newCompany, name: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                value={newCompany.email}
                onChange={(e) =>
                  setNewCompany({ ...newCompany, email: e.target.value })
                }
                className="w-full border p-2 rounded"
              />

              {!newCompany._id && (
                <>
                  <input
                    type="password"
                    placeholder="Password"
                    value={newCompany.password}
                    onChange={(e) =>
                      setNewCompany({
                        ...newCompany,
                        password: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded"
                  />
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Role</label>
                    <input
                      type="text"
                      value="company"
                      disabled
                      className="w-full border p-2 rounded bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </>
              )}

              {newCompany._id && (
                <>
                  <input
                    type="text"
                    placeholder="Industry"
                    value={newCompany.industry}
                    onChange={(e) =>
                      setNewCompany({
                        ...newCompany,
                        industry: e.target.value,
                      })
                    }
                    className="w-full border p-2 rounded"
                  />

                  <select
                    value={newCompany.status}
                    onChange={(e) =>
                      setNewCompany({ ...newCompany, status: e.target.value })
                    }
                    className="w-full border p-2 rounded"
                  >
                    <option value="active">active</option>
                    <option value="suspended">suspended</option>
                  </select>

                  {typeof newCompany.logoUrl === "string" && (
                    <img
                      src={newCompany.logoUrl}
                      alt="Logo"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setNewCompany({
                        ...newCompany,
                        logoUrl: e.target.files[0],
                      })
                    }
                  />
                </>
              )}
            </div>

            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewCompany({
                    name: "",
                    email: "",
                    industry: "",
                    logoUrl: null,
                    password: "",
                    role: "",
                    status: "active",
                  });
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={submitCompany}
                className={`px-4 py-2 text-white rounded ${newCompany._id ? "bg-green-600" : "bg-blue-600"
                  }`}
              >
                {newCompany._id ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Manage Companies</h2>
          <p className="text-sm text-gray-500">
            View and manage all registered companies
          </p>
        </div>
        <button
          onClick={() => {
            setNewCompany({
              name: "",
              email: "",
              industry: "",
              logoUrl: null,
              password: "",
              role: "",
              status: "active",
            });
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Company
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded p-4 mb-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="border p-2 rounded"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="active">active</option>
            <option value="suspended">suspended</option>
          </select>
          <select
            className="border p-2 rounded"
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
          >
            <option value="All">All Industries</option>
            {industries.map((ind, i) => (
              <option key={i} value={ind}>
                {ind}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="border p-2 rounded col-span-2"
            placeholder="Search companies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Company Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3 text-left">Company</th>
              <th>Industry</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((c, i) => (
              <tr key={i} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={
                      c.logoUrl
                        ? c.logoUrl
                        : `http://localhost:4000/uploads/placeholder.jpg`
                    }
                    alt={c.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {c.name}
                </td>
                <td>{c.industry}</td>
                <td>{c.email}</td>
                <td>
                  <span
                    className={`font-semibold flex items-center gap-1 ${c.status === "active"
                      ? "text-green-600"
                      : "text-red-500"
                      }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setNewCompany({ ...c, password: "", role: "" });
                      setIsModalOpen(true);
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-100 p-4 rounded shadow flex items-center gap-4">
          <FaBuilding className="text-2xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Total Companies</p>
            <h3 className="text-xl font-semibold">{totalCompanies}</h3>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded shadow flex items-center gap-4">
          <FaCheck className="text-2xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Active</p>
            <h3 className="text-xl font-semibold">{activeCompanies}</h3>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded shadow flex items-center gap-4">
          <FaBan className="text-2xl text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Suspended</p>
            <h3 className="text-xl font-semibold">{suspendedCompanies}</h3>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2 text-md">Companies by Industry</h3>
        <Bar data={barChartData} height={200} />
      </div>
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
};

export default ManageCompanies;
