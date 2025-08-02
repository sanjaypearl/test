"use client"

import { useRouter } from "next/navigation"

export default function UserTypeSelection() {
  const router = useRouter()

  const handleCustomerClick = () => {
    router.push("/login/company")
  }

  const handleResearcherClick = () => {
    router.push("/login/researcher")
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Are you a Company or a researcher?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={handleCustomerClick}
          className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-700 text-white py-3 px-6 rounded-md transition duration-200"
        >
          Company
        </button>

        <button
          onClick={handleResearcherClick}
          className="bg-[#1a1a1a] hover:bg-[#252525] border border-gray-700 text-white py-3 px-6 rounded-md transition duration-200"
        >
          Researcher
        </button>
      </div>
    </div>
  )
}
