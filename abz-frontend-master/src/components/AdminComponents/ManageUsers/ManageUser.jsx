"use client";

import { useEffect, useState } from "react";
import { FaUser, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataService from "@/services/Axios/axiosInterceptor";

export default function ManageUser() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");
  const [activity, setActivity] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [formData, setFormData] = useState({
    password: "",
    name: "",
    email: "",
    role: "user",
    status: "active",
  });

  const fetchUsers = async () => {
    try {
      const res = await DataService.getAllUser();
      setUsers(res.data?.data?.users || []);
    } catch (error) {
      toast.error("Failed to fetch users.");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Name, Email, and Password are required.");
      return;
    }

    try {
      await DataService.signup(formData);
      toast.success("User added successfully!");
      fetchUsers();
      setIsAddModalOpen(false);
      setFormData({ password: "", name: "", email: "", role: "user", status: "active" });
    } catch (error) {
      toast.error("Failed to add user.");
      console.error(error);
    }
  };

  const handleEditUser = async () => {
    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required.");
      return;
    }

    try {
      await DataService.userUpdate(selectedUser._id, formData);
      toast.success("User updated successfully!");
      fetchUsers();
      setIsEditModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      toast.error("Failed to update user.");
      console.error(error);
    }
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name || "",
      email: user.email || "",
      role: user.role || "user",
      status: user.status?.toLowerCase() || "active",
    });
    setIsEditModalOpen(true);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "All" || user.role === role;
    const matchesStatus = status === "All" || user.status?.toLowerCase() === status.toLowerCase();
    const matchesActivity = activity === "All";
    return matchesSearch && matchesRole && matchesStatus && matchesActivity;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add New User</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border p-2 rounded" />
              <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full border p-2 rounded" />
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border p-2 rounded" />
              <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full border p-2 rounded">
                <option value="user">User</option>
                <option value="triager">Triager</option>
                <option value="company">Company</option>
                <option value="researcher">Researcher</option>
                <option value="treasurer">Treasurer</option>
              </select>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full border p-2 rounded">
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 border border-gray-500 rounded">Cancel</button>
              <button onClick={handleAddUser} className="px-4 py-2 bg-blue-500 text-white rounded">Add User</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Edit User</h2>
            <div className="space-y-3">
              <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border p-2 rounded" />
              <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border p-2 rounded" />
              <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full border p-2 rounded">
                <option value="user">User</option>
                <option value="triager">Triager</option>
                <option value="company">Company</option>
                <option value="researcher">Researcher</option>
                <option value="treasurer">Treasurer</option>
              </select>
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full border p-2 rounded">
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 border border-gray-500 rounded">Cancel</button>
              <button onClick={handleEditUser} className="px-4 py-2 bg-green-600 text-white rounded">Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Manage Users</h2>
          <p className="text-sm text-gray-500">View and manage all registered users</p>
        </div>
        <button onClick={() => setIsAddModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add New User</button>
      </div>

      <div className="bg-white rounded p-4 mb-4 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-4">
        <input type="text" placeholder="Search..." className="col-span-2 border border-gray-300 p-2 rounded" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded">
          <option value="All">All Roles</option>
          <option value="user">User</option>
          <option value="company">Company</option>
          <option value="researcher">Researcher</option>
          <option value="treasurer">Treasurer</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded">
          <option value="All">All Statuses</option>
          <option value="active">Active</option>
          <option value="suspended">Suspended</option>
        </select>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-gray-200 rounded">Filter</button>
          <button className="px-3 py-1 bg-gray-100 rounded" onClick={() => { setSearch(""); setRole("All"); setStatus("All"); setActivity("All"); }}>Reset</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow-sm overflow-x-auto">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, i) => (
                <tr key={i} className="border-t">
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={user.profilePicture || "/person.jpg"}
                      className="w-8 h-8 rounded-full"
                      alt={user.name}
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                    </div>
                  </td>
                  <td className="text-blue-600 font-medium">{user.role}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.status?.toLowerCase() === "active" ? (
                      <span className="text-green-600 font-semibold flex items-center gap-1"><FaCheckCircle /> Active</span>
                    ) : (
                      <span className="text-red-500 font-semibold flex items-center gap-1"><FaTimesCircle /> Suspended</span>
                    )}
                  </td>
                  <td>{formatDate(user.lastLogin?.time)}</td>
                  <td>
                    <button onClick={() => openEditModal(user)} className="text-blue-500 hover:underline text-sm">Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="6" className="text-center py-4 text-gray-500">No users found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}
