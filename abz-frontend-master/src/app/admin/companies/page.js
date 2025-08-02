import ManageCompanies from "@/components/AdminComponents/ManageCompanies/ManageCompanies";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
const page = () => {
  return (
    <div>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <ManageCompanies />
    </div>
  );
};

export default page;
