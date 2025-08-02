"use client";
import React, { useState } from "react";
import AddAssetsForm from "./AddAssetsForm";

const ListAssets = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {/* Add Assets Button */}
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add Assets
      </button>

      {/* Modal Overlay & Content */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-40"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full max-h-full overflow-auto relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Content (AddAssetsForm) */}
              <div className="p-6">
                <AddAssetsForm />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListAssets;
