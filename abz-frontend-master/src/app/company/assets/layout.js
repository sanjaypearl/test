// app/company/assets/layout.js

import AssetsNavbar from "@/components/Company/Assets/AssetsNavbar";

export default function CompanyAssetsLayout({ children }) {
  return (
    <section className=" min-h-screen bg-gray-100">
      <nav>
        <AssetsNavbar />
      </nav>
      <div className="flex-1 p-4">{children}</div>
    </section>
  );
}
