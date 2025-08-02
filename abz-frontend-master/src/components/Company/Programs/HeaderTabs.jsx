"use client";

const tabs = ["All Programs", "VDP", "Bug Bounty", "Pentest", "Private Program", "Competitions"];

export default function HeaderTabs() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
      <div className="flex space-x-2">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded text-sm font-medium ${
              i === 0 ? "bg-gray-700 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-white text-black font-semibold px-4 py-1 rounded text-sm">
          + Create New Program
        </button>
        <input
          type="text"
          placeholder="Search programs"
          className="px-2 py-1 text-sm rounded bg-gray-800 text-white border border-gray-600"
        />
      </div>
    </div>
  );
}
