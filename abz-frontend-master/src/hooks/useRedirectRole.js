"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useRedirectRole = () => {
  const router = useRouter();

  const userData = localStorage.getItem("user");

  const user =
    useSelector((state) => state.auth.loggedInUserData) || userData.role; // Adjust if your state path differs

  useEffect(() => {
    if (!user) return;

    const role = user?.role;

    switch (role) {
      case "admin":
        router.push("/admin");
        break;
      case "user":
        router.push("/user");
        break;
      case "researcher":
        router.push("/researcher");
        break;
      case "treasurer":
        router.push("/triager");
        break;
      case "company":
        router.push("/company");
        break;
      default:
        router.push("/unauthorized");
        break;
    }
  }, [user]);
};

export default useRedirectRole;
