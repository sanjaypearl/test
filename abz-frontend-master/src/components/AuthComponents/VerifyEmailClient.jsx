"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { instance } from "@/services/Axios/axiosInterceptor";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      // Verify token with backend
      instance
        .get(`/auth/verify-signup/${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setStatus("✅ Email verified successfully!");
          } else {
            setStatus(
              "❌ Verification failed. Token may be invalid or expired."
            );
          }
        })
        .catch(() => {
          setStatus("❌ Something went wrong. Please try again.");
        });
    } else {
      setStatus("❌ No token provided.");
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-semibold mb-4">Email Verification</h1>
      <p className="text-lg">{status}</p>
      {status.includes("successfully") && (
        <button
          onClick={() => router.push("/login")}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Login
        </button>
      )}
    </div>
  );
}
