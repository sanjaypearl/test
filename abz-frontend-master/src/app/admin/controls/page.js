import AdminControls from "@/components/AdminComponents/Controls/AdminControls";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const page = () => {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <AdminControls />
    </div>
  );
};

export default page;
