"use client";
import Link from "next/link";
import {
  Activity,
  Folder,
  Target,
  CreditCard,
  Archive,
  LifeBuoy,
  Megaphone,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Insights", icon: Activity, href: "#" },
  { name: "Assets", icon: Folder, href: "#" },
  { name: "Programs", icon: Target, href: "#" },
  { name: "Billings", icon: CreditCard, href: "#" },
  { name: "Bounty Bin", icon: Archive, href: "#" },
  { name: "Support", icon: LifeBuoy, href: "#" },
  { name: "Campaigns", icon: Megaphone, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className=" border-r border-gray-800 h-screen bg-black text-white fixed top-0 left-0 p-4 z-50">
      <div className="text-lg font-semibold mb-8">Switch to program...</div>
      <nav className="space-y-2">
        {menuItems.map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-800 transition"
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
