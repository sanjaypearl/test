"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DataService from "@/services/Axios/axiosInterceptor";

export default function SignupForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await DataService.signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Redirect to login
      router.push("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="flex flex-row justify-center text-center">
            <div className="flex justify-center mx-2 mb-2">
              <img src="/logoo.png" alt="CyberNeoGen" className="h-10" />
            </div>
            <h1 className="text-xl mb-4 font-bold text-gray-800">
              CyberNeoGen
            </h1>
          </div>
          <p className="text-lg text-gray-700 font-semibold mt-1">
            Company Panel Signup
          </p>
        </div>

        <form
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-5"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="text-sm text-red-500 text-center font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div
            className="text-sm text-right text-blue-500 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Passwords" : "Show Passwords"}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 ${
              loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            } text-white font-semibold rounded-md`}
          >
            {loading ? "Creating account..." : "Signup"}
          </button>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
