"use client";

import { useState } from "react";
import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";

export default function Leaderboard() {
  const [search, setSearch] = useState("");

  const leaderboardData = [
    {
      id: 1,
      name: "Krishna",
      title: "Founder CEO",
      country: "India",
      globalRank: "No. 1",
      successRate: "100%",
      reputation: "193",
      avatar: "/avatar.jpg",
    },
    {
      id: 2,
      name: "Krishna",
      title: "Founder CEO",
      country: "India",
      globalRank: "No. 1",
      successRate: "100%",
      reputation: "193",
      avatar: "/avatar.jpg",
    },
    {
      id: 3,
      name: "Krishna",
      title: "Founder CEO",
      country: "India",
      globalRank: "No. 1",
      successRate: "100%",
      reputation: "193",
      avatar: "/avatar.jpg",
    },
  ];

  const filteredData = leaderboardData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-28 min-h-screen bg-[#fff6e8] px-4 md:px-12 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold mb-2 text-[#141414]">
          Global Leaderboard
        </h1>
        <p className="text-sm text-gray-700 mb-6 max-w-xl">
          Check out the BugBase Leaderboard to see the top performers in our
          elite community of bounty hunters.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search CyberNeoGen Hunters"
            className="bg-[#D9D9D9] px-4 py-3 rounded-md w-full md:max-w-md text-sm placeholder:text-gray-900"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex  items-center gap-2 w-full md:w-auto">
            <div className="flex flex-row gap-2 bg-[#D9D9D9] px-4 py-3 rounded-md w-full md:w-auto text-sm text-gray-800">
              <div className="pl-2 pr-16">Global</div>

              <button className="bg-[#f5ede1]  rounded-md">
                <GiSettingsKnobs className="text-gray-900 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex mt-28 flex-wrap justify-center gap-8">
        {filteredData.map((user) => (
          <div
            key={user.id}
            className="relative bg-[#fdf5e6] rounded-2xl w-[280px] pt-14 pb-6 px-6 text-center shadow-sm border border-[#f5e9d7]"
          >
            {/* Medal */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <Image src="/medal.png" alt="medal" width={98} height={98} />
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-3">
              <Image
                src={user.avatar}
                alt={user.name}
                width={64}
                height={64}
                className="rounded-full h-16 border border-gray-300"
              />
            </div>

            {/* Info */}
            <h3 className="text-base font-semibold text-[#141414]">
              {user.name}
            </h3>
            <p className="text-xs text-gray-600 mb-4">{user.title}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-800">
              <div className="font-medium text-gray-500 text-left">
                Global Rank:
              </div>
              <div className="text-right font-semibold">{user.globalRank}</div>

              <div className="font-medium text-gray-500 text-left">
                Success Rate:
              </div>
              <div className="text-right font-semibold">{user.successRate}</div>

              <div className="font-medium text-gray-500 text-left">
                Country:
              </div>
              <div className="text-right font-semibold">{user.country}</div>

              <div className="font-medium text-gray-500 text-left">
                Reputation:
              </div>
              <div className="text-right font-semibold">{user.reputation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
