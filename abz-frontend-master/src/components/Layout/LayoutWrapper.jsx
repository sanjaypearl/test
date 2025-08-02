"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  const hiddenPaths = [
    "/admin",
    "/login",
    "/signup",
    "/company",
    "/triager",
    "/researcher",
  ];
  const hideLayout = hiddenPaths.some((path) => pathname.startsWith(path));

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;
