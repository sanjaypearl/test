// FIX: Add this at the top
"use client";

import Security from "@/components/HomeComponents/Security";
import Programs from "@/components/Programs/Programs";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <Programs />
      <Security />
    </div>
  );
};

export default Page;
