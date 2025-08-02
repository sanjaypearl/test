"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DataService from "@/services/Axios/axiosInterceptor";
import { useRouter } from "next/navigation";

export default function AdminControls() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [allRole, setAllRole] = useState([]);
  const [newRole, setNewRole] = useState({
    _id: "",
    name: "",
    email: "",
    role: "",
    password: "",
    status: "",
  });

  const getRandomColor = () => {
    const colors = ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const fetchAllRole = async () => {
    try {
      const resp = await DataService.getAllControlOnAdminSide();
      const companies = resp.data?.data?.companies || [];
      const researchers = resp.data?.data?.researchers || [];
      const combined = [...companies, ...researchers];

      const formatted = combined.map((user) => ({
        ...user,
        avatar: user.name?.charAt(0)?.toUpperCase() || "U",
        bgColor: getRandomColor(),
        description: user.role || "No Role",
      }));

      setAllRole(formatted);
    } catch (error) {
      toast.error("Failed to fetch roles", { position: "top-left" });
    }
  };

  useEffect(() => {
    fetchAllRole();
  }, []);

  const handleAddRole = async () => {
    if (!newRole.name || !newRole.email || !newRole.password || !newRole.role) {
      toast.error("Please fill out all fields", { position: "top-left" });
      return;
    }

    try {
      const resp = await DataService.signup(newRole);
      toast.success(resp?.data?.message || "Role added successfully", {
        position: "top-left",
      });
      setNewRole({ _id: "", name: "", email: "", role: "", password: "", status: "" });
      setShowModal(false);
      fetchAllRole();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add role", {
        position: "top-left",
      });
    }
  };

  const handleEditRoles = async () => {
    try {
      const { _id, name, email, status } = newRole;
      const resp = await DataService.userUpdate(_id, { name, email, status });
      toast.success(resp?.data?.message || "Updated successfully", { position: "top-left" });
      setShowModalEdit(false);
      setNewRole({ _id: "", name: "", email: "", role: "", password: "", status: "" });
      fetchAllRole();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error updating role", { position: "top-left" });
    }
  };

  const handleDelete = async (_id, type) => {
    if (!window.confirm("Are you sure you want to delete this role?")) return;

    try {
      await DataService.deleteUser(_id);
      toast.success("Deleted successfully", { position: "top-left" });
      fetchAllRole();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed", {
        position: "top-left",
      });
    }
  };

  const flaggedReports = [
    { id: "REP-7537", reason: "Malicious Content", date: "Oct 15, 2023", status: "Review" },
    { id: "REP-7514", reason: "Duplicate", date: "Oct 14, 2023", status: "Review" },
    { id: "REP-7502", reason: "Inappropriate", date: "Oct 12, 2023", status: "Review" },
    { id: "REP-7791", reason: "Policy Violation", date: "Oct 9, 2023", status: "Review" },
  ];

  const systemLogs = [
    {
      id: 1,
      action: "User Role Modified",
      description: "Role permissions changed for user ID: 1847",
      time: "Today 14:23",
      user: "By: Admin User",
      avatar: "UR",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      action: "Report Updated",
      description: "Report ID: REP-7502 changed from 'Pending' to 'Resolved'",
      time: "Today 13:15",
      user: "By: System",
      avatar: "RS",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Modals */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Add New Role</h2>
              <input type="text" placeholder="Name" value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                className="border w-full p-2 rounded mb-3"
              />
              <input type="email" placeholder="Email" value={newRole.email}
                onChange={(e) => setNewRole({ ...newRole, email: e.target.value })}
                className="border w-full p-2 rounded mb-3"
              />
              <input type="password" placeholder="Password" value={newRole.password}
                onChange={(e) => setNewRole({ ...newRole, password: e.target.value })}
                className="border w-full p-2 rounded mb-3"
              />
              <select value={newRole.role}
                onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
                className="border w-full p-2 rounded mb-4"
              >
                <option value="">Select Role</option>
                <option value="researcher">Researcher</option>
                <option value="company">Company</option>
                <option value="treasurer">Treasurer</option>
              </select>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={handleAddRole} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
              </div>
            </div>
          </div>
        )}

        {showModalEdit && (
          <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">Update Role</h2>
              <input type="text" placeholder="Name" value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                className="border w-full p-2 rounded mb-3"
              />
              <input type="email" placeholder="Email" value={newRole.email}
                onChange={(e) => setNewRole({ ...newRole, email: e.target.value })}
                className="border w-full p-2 rounded mb-3"
              />
              <select value={newRole.status}
                onChange={(e) => setNewRole({ ...newRole, status: e.target.value })}
                className="border w-full p-2 rounded mb-4"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="pending">Pending</option>
              </select>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowModalEdit(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={handleEditRoles} className="px-4 py-2 bg-blue-600 text-white rounded">Update</button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Admin Controls</h1>
            <p className="text-gray-600">Manage system settings and roles</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border rounded">Settings</button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => router.push("/admin")}
            >
              Dashboard
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-6">
            {/* Role Management */}
            <div className="bg-white border rounded shadow-sm">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-lg font-semibold">Role Management</h2>
                <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-3 py-1.5 rounded">
                  Create New Role
                </button>
              </div>
              <div className="space-y-4 max-h-[440px] overflow-y-auto p-6">
                {allRole.map((role) => (
                  <div key={role._id} className="flex justify-between items-center border p-4 rounded">
                    <div className="flex items-center gap-3">
                      <div className={`${role.bgColor} w-10 h-10 rounded-full flex justify-center items-center text-white`}>
                        {role.avatar}
                      </div>
                      <div>
                        <h3 className="font-medium">{role.name}</h3>
                        <p className="text-sm text-gray-500">{role.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100" onClick={() => {
                        setNewRole({
                          _id: role._id,
                          name: role.name,
                          email: role.email,
                          role: role.role,
                          status: role.status || "active",
                        });
                        setShowModalEdit(true);
                      }}>Edit</button>
                      <button onClick={() => handleDelete(role._id, role.role)} className="text-sm px-3 py-1 border rounded hover:bg-gray-100">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Logs */}
            <div className="bg-white border rounded shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">System Logs</h2>
              </div>
              <div className="p-6 space-y-4">
                {systemLogs.map((log) => (
                  <div key={log.id} className="flex items-start gap-3">
                    <div className={`${log.bgColor} w-8 h-8 rounded-full flex justify-center items-center text-white text-xs`}>
                      {log.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{log.action}</p>
                      <p className="text-sm text-gray-500">{log.description}</p>
                      <div className="text-xs text-gray-400 mt-1">{log.time} · {log.user}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Flagged Reports */}
            <div className="bg-white border rounded shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Flagged Reports</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-left text-xs text-gray-500 uppercase">
                    <tr>
                      <th className="px-6 py-3">ID</th>
                      <th className="px-6 py-3">Reason</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {flaggedReports.map((r) => (
                      <tr key={r.id}>
                        <td className="px-6 py-4 font-medium text-gray-900">{r.id}</td>
                        <td className="px-6 py-4">{r.reason}</td>
                        <td className="px-6 py-4">{r.date}</td>
                        <td className="px-6 py-4 flex gap-2">
                          <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs">{r.status}</button>
                          <button className="border px-2 py-1 text-xs rounded">Dismiss</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Maintenance Tools */}
            <div className="bg-white border rounded shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Maintenance Tools</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Database Backup</p>
                    <p className="text-sm text-gray-500">Last: Today 2:00 AM</p>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded">Backup Now</button>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Cache Size</p>
                    <p className="text-sm text-gray-500">1.2 GB</p>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded">Clear Cache</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
