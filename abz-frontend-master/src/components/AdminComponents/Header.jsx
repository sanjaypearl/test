"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import DataService from "@/services/Axios/axiosInterceptor";
import SubmitReportForm from "@/components/AdminComponents/Report/ManageReport";

const Header = () => {
  const [admin, setAdmin] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchAdminById = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const adminId = user?.data?._id;



    console.log("User object from localStorage:", user);
    console.log("Admin ID:", adminId);

    if (!adminId) return;

    try {
      const response = await DataService.getAdminById(adminId);

      const adminData = response.data?.data;
      


      if (adminData) {
        setAdmin(adminData);
        console.log("Admin name:", adminData.name);
      }
    } catch (error) {
      console.error("Error fetching admin:", error);
    }
  };

  useEffect(() => {
    fetchAdminById();
    
  }, []);

  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      {showModal && (
        <SubmitReportForm onClose={() => setShowModal(false)} />
      )}

      {/* Left - Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logoo.png" alt="Logo" width={24} height={24} />
        <div className="text-lg font-semibold leading-tight">CyberNeoGen</div>
      </div>

      {/* Center - Search */}
      <div className="flex-1 px-10">
        <div className="relative w-full max-w-md mx-auto">
          <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search reports, companies, users..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Right - Button + User */}
      <div className="flex items-center gap-4">
        <button
          className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => setShowModal(true)}
        >
          New Report
        </button>
        <div className="flex items-center gap-2">
          <Image
            src={admin?.profilePicture || "/person.jpg"}
            alt={admin?.name || "Admin"}
            width={35}
            height={35}
            className="rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-semibold text-black">{admin?.name || "Loading..."}</div>
            <div className="text-gray-500 text-xs">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
