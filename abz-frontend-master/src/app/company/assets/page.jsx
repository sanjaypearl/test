"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Pencil } from "lucide-react";
import NavigationTabs from "@/components/Company/common/NavigationTab";
import AssetModal from "@/components/Company/Assets/AssetModal";
import { instance } from "@/services/Axios/axiosInterceptor";

export default function AssetsPage() {
  const [showModal, setShowModal] = useState(false);
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const companyTabs = [
    { name: "Assets", href: "/company/assets" },
    { name: "Credentials", href: "/company/credentials" },
    { name: "VPN", href: "/company/vpn" },
    { name: "Whitelists", href: "/company/whitelists" },
  ];

  const fetchAssets = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await instance.get("/assets"); // Your assets API endpoint
      if (res.data.success) {
        setAssets(res.data.data || []);
      } else {
        setError(res.data.message || "Failed to load assets");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load assets");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchAssets();
  }, []);

  // To refresh assets list after creating new asset, you can pass a callback to the modal
  const handleCloseModal = () => {
    setShowModal(false);
    fetchAssets();
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <NavigationTabs tabs={companyTabs} />
      <section className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Manage Assets ({assets.length})
          </h2>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded">
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-4 py-2 rounded"
              onClick={() => setShowModal(true)}
            >
              + New Asset
            </button>
          </div>
        </div>

        {loading && (
          <div className="text-center text-gray-400">Loading assets...</div>
        )}

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {!loading && !error && assets.length === 0 && (
          <div className="text-gray-400">No assets found.</div>
        )}

        {/* Assets List */}
        <div className="space-y-4">
          {assets.map((asset) => (
            <div
              key={asset._id}
              className="bg-gray-900 rounded-lg px-5 py-4 flex items-center justify-between"
            >
              <div>
                <a
                  href={asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline block"
                >
                  {asset.url}
                </a>
                <div className="mt-2 flex space-x-2">
                  {asset.asset_labels?.map((label) => (
                    <span
                      key={label}
                      className="bg-gray-700 text-sm px-2 py-1 rounded"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-400">
                  Total Vulnerabilities{" "}
                  <span className="text-white font-bold">
                    {asset.vulnerabilities || 0}
                  </span>
                </div>
                <Pencil className="w-4 h-4 cursor-pointer" />
                <ChevronDown className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AssetModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
}
