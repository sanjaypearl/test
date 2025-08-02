"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRouteProtect = (allowedRoles = []) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const reduxUser = useSelector((state) => state.auth.loggedInUserData);
  const localUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  const user = reduxUser || localUser;

  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }

    const role = user?.role;

    if (allowedRoles.includes(role)) {
      setIsAuthorized(true);
      setIsLoading(false);
    } else {
      // Redirect based on role
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
      }
    }
  }, [user]);

  return { isLoading, isAuthorized };
};

export default useRouteProtect;
