'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

/**
 * Reusable navigation tabs component
 * @param {Array} tabs - Array of objects: { name: string, href: string }
 */
export default function NavigationTabs({ tabs = [] }) {
  const pathname = usePathname();

  return (
    <div className="flex space-x-6 border-b border-gray-700 pb-4">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={clsx(
            'pb-1 text-white hover:text-green-400',
            pathname === tab.href
              ? 'border-b-2 border-green-500 text-green-500'
              : ''
          )}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
