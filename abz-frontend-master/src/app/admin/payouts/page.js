import ManagePayout from "@/components/AdminComponents/Payout/ManagePayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <ManagePayout />
    </div>
  );
};

export default page;
