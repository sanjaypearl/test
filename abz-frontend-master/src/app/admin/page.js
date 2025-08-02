"use client";

import Admin from "@/components/AdminComponents/DashboardComponents/Admin";
import Header from "@/components/AdminComponents/Header";
import ManageCompanies from "@/components/AdminComponents/ManageCompanies/ManageCompanies";
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <Admin />
      <Header />
      <ManageCompanies />
    </div>
  );
};

export default Page;
