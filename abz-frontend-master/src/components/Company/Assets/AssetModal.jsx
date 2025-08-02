"use client";

import React, { useReducer, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { instance } from "@/services/Axios/axiosInterceptor";
import { X, Trash2, Pencil } from "lucide-react";

const initialState = {
  assetUrl: "",
  description: "",
  assetType: "Website",
  loading: false,
  error: null,
  editId: null,
};

function reducer(state, action) {
  return { ...state, ...action };
}

export default function AssetModal({ isOpen, onClose }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [assets, setAssets] = useState([]);
  const [assetsType, setAssetsType] = useState([]);
  const [availableLabels, setAvailableLabels] = useState([]);
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchAssets = async () => {
    try {
      const res = await instance.get("/assets");
      if (res.data.success) {
        setAssets(res.data.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch assets:", err);
    }
  };

  const fetchConfigs = async () => {
    setLoading(true);
    try {
      const res = await instance.get("/configs");
      if (res.data.success) {
        const types = res.data.data.find((item) => item.key === "asset_types");
        setAssetsType(types?.values || []);
        const labels = res.data.data.find((item) => item.key === "asset_labels");
        setAvailableLabels(labels?.values || []);
      }
    } catch (err) {
      console.error("Failed to fetch configs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchAssets();
      fetchConfigs();
    }
  }, [isOpen]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  }, []);

  const handleLabelClick = (label) => {
    if (!selectedLabels.includes(label)) {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  const handleRemoveLabel = (label) => {
    setSelectedLabels(selectedLabels.filter((l) => l !== label));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { assetUrl, description, assetType, editId } = state;

    if (!assetUrl || !description) {
      dispatch({ error: "Asset URL and Description are required." });
      return;
    }

    dispatch({ loading: true, error: null });

    const dataToSend = {
      url: assetUrl,
      description,
      asset_type: assetType,
      asset_labels: selectedLabels,
    };

    try {
      const res = editId
        ? await instance.patch(`/assets/${editId}`, dataToSend)
        : await instance.post("/assets", dataToSend);

      if (res.data.success) {
        alert(`Asset ${editId ? "updated" : "created"} successfully!`);
        dispatch(initialState);
        setSelectedLabels([]);
        fetchAssets();
      } else {
        dispatch({ error: res.data.message || "Failed to save asset." });
      }
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Save failed. Please try again.";
      dispatch({ error: msg });
    } finally {
      dispatch({ loading: false });
    }
  };

  const handleEdit = (asset) => {
    dispatch({
      assetUrl: asset.url,
      description: asset.description,
      assetType: asset.asset_type || "Website",
      editId: asset._id,
    });
    setSelectedLabels(asset.asset_labels || []);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this asset?")) return;

    try {
      const res = await instance.delete(`/assets/${id}`);
      if (res.data.success) {
        alert("Asset deleted successfully!");
        fetchAssets();
        if (state.editId === id) dispatch(initialState);
      } else {
        alert(res.data.message || "Failed to delete.");
      }
    } catch (err) {
      alert("Delete failed.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1E1E1E] text-white w-[900px] max-h-[90vh] overflow-y-auto rounded-lg shadow-lg flex"
      >
        {/* Sidebar */}
        <div className="w-1/3 bg-[#151515] p-4 border-r border-gray-700">
          <h2 className="text-lg font-semibold mb-4">Assets</h2>
          <div className="space-y-2 text-sm">
            {assets.map((asset) => (
              <div
                key={asset._id}
                className="bg-gray-800 px-3 py-2 rounded flex justify-between items-center"
              >
                <div className="text-xs truncate w-[70%]">{asset.url}</div>
                <div className="flex items-center space-x-2">
                  <Pencil
                    size={14}
                    className="cursor-pointer text-blue-400"
                    onClick={() => handleEdit(asset)}
                  />
                  <Trash2
                    size={14}
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDelete(asset._id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded text-sm"
            onClick={() => {
              dispatch(initialState);
              setSelectedLabels([]);
            }}
          >
            + Create New Asset
          </button>
        </div>

        {/* Form */}
        <div className="w-2/3 p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="space-y-4">
            {state.error && (
              <div className="text-red-500 text-sm mb-2">{state.error}</div>
            )}

            <div>
              <label className="text-sm block mb-1">Asset URL</label>
              <input
                name="assetUrl"
                type="text"
                className="w-full bg-black text-white px-3 py-2 rounded border border-gray-600"
                placeholder="Enter Asset URL"
                value={state.assetUrl}
                onChange={handleChange}
                disabled={state.loading}
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Asset Description</label>
              <textarea
                name="description"
                className="w-full bg-black text-white px-3 py-2 rounded border border-gray-600"
                placeholder="Enter markdown text"
                value={state.description}
                onChange={handleChange}
                disabled={state.loading}
              />
              <p className="text-xs text-green-500 mt-1">+ Insert Link</p>
            </div>

            <div>
              <label className="text-sm block mb-1">Asset Type</label>
              <select
                name="assetType"
                value={state.assetType}
                onChange={handleChange}
                className="bg-gray-800 text-white border border-gray-600 px-3 py-1 rounded"
              >
                <option value="" disabled>
                  Select Asset Type
                </option>
                {assetsType.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Label Pills */}
            <div>
              <label className="text-sm block mb-1">Available Labels</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {availableLabels.map((label) => (
                  <span
                    key={label}
                    className="bg-gray-700 px-2 py-1 rounded-full text-xs cursor-pointer hover:bg-green-600"
                    onClick={() => handleLabelClick(label)}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <label className="text-sm block mb-1">Selected Labels</label>
              <div className="flex flex-wrap gap-2">
                {selectedLabels.map((label) => (
                  <span
                    key={label}
                    className="bg-green-500 text-black px-2 py-1 rounded-full text-xs flex items-center gap-1"
                  >
                    {label}
                    <X size={12} className="cursor-pointer" onClick={() => handleRemoveLabel(label)} />
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-700 px-4 py-2 rounded text-sm"
                disabled={state.loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-500 px-4 py-2 rounded text-black text-sm"
                disabled={state.loading}
              >
                {state.loading
                  ? "Saving..."
                  : state.editId
                  ? "Update Asset"
                  : "Save Asset"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
