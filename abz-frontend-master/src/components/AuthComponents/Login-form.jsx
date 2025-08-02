"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "@/store/actions/Auth/authActions";

export default function LoginFormUI() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [localError, setLocalError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLocalError("");

    try {
      const user = await dispatch(login(formData)).unwrap();

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", user.token);
        console.log("user.role",user.data.role);

        switch (user.data.role) {
          case "admin":
            router.push("/admin");
            break;
          case "company":
            router.push("/company");
            break;
          case "researcher":
            router.push("/researcher");
            break;
          case "treasurer":
            router.push("/treasurer");
            break;
          default:
            router.push("/unauthorized");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
      setLocalError(err || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center text-center">
            <img src="/logoo.png" alt="CyberNeoGen" className="h-10 mx-2" />
            <h1 className="text-xl font-bold text-gray-800">CyberNeoGen</h1>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-lg shadow-md p-6 space-y-5"
        >
          {localError && (
            <div className="text-sm text-red-500 text-center font-medium">
              {localError}
            </div>
          )}

          {/* Email */}
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

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 ${isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              } text-white font-semibold rounded-md`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {/* Signup Prompt */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              New Here?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Signup
              </a>
            </p>
            <p className="text-xs text-gray-500">
              Want to setup a program on our platform?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Join Us
              </a>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Protected by CyberNeoGen Security
          <div className="mt-2 flex justify-center gap-2 text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9v4H4a1 1 0 0 0-1 1v8h18v-8a1 1 0 0 0-1-1h-1V9c0-3.87-3.13-7-7-7zm-1 16h2v2h-2v-2zm1-12a4 4 0 0 1 4 4v4H8v-4a4 4 0 0 1 4-4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
