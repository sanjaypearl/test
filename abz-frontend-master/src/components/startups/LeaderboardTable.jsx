"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function LeaderboardTable() {
  const [showAll, setShowAll] = useState(false);

  const tableData = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: "Kanha",
    rank: "4",
    reputation: "150",
    successRate: "90%",
    country: "India",
  }));

  return (
    <div className="py-8 bg-[#fff6e8] p-6 ">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border-collapse">
          <thead className="bg-[#f2ebdc] text-gray-900 text-sm">
            <tr>
              <th className="px-4 py-3 font-semibold">Global Rank</th>
              <th className="px-4 py-3 font-semibold">User Name</th>
              <th className="px-4 py-3 font-semibold">Reputation</th>
              <th className="px-4 py-3 font-semibold">Success Rate</th>
              <th className="px-4 py-3 font-semibold">Country</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user) => (
              <tr
                key={user.id}
                className="bg-[#fdf5e6] border border-[#e4dac5] rounded-lg"
              >
                <td className="px-4 py-3">{user.rank}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.reputation}</td>
                <td className="px-4 py-3">{user.successRate}</td>
                <td className="px-4 py-3">{user.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* See All Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#00aaff] text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-[#008ecc]"
        >
          See All <FaChevronDown className="text-xs" />
        </button>
      </div>
    </div>
  );
}
