'use client';

import { usePathname } from 'next/navigation';

export default function CompanyHeader() {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();

  // Capitalize the first letter
  const pageTitle = lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : '';

  return (
    <div className="flex items-center justify-between bg-black px-4 py-3">
      <h2 className="text-white text-lg font-semibold">{pageTitle}</h2>
      <div className="w-4 h-4 bg-gray-200 rounded-full" />
    </div>
  );
}
