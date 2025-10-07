import { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Logo & Title */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-violet-400 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.1-.9-2-2-2H6a2 2 0 100 4h4c1.1 0 2-.9 2-2zM18 13h-2a2 2 0 100 4h2a2 2 0 100-4z"
                />
              </svg>
            </div>
            <h2 className="ml-3 text-2xl font-bold text-gray-800">Pramukh</h2>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email / Username / Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email / Username / Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your username or email and phone number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-400 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-violet-400 outline-none"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300"
                />
                Remember Me
              </label>
              <Link to="/" className="text-sm text-violet-500 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Sign in Button */}
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
              >
                Sign In
              </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Login */}
          <div className="flex justify-center space-x-4">
            <button className="p-3  rounded-xl hover:bg-gray-300 bg-[#e3ebfe]">
              <FaFacebookF className="text-blue-600 " />
            </button>
            <button className="p-3 rounded-xl hover:bg-gray-300 bg-[#ffddd8]">
              <FaGoogle className="text-red-500" />
            </button>
            <button className="p-3 rounded-xl hover:bg-gray-300 bg-[#cfecfd]">
              <FaTwitter className="text-sky-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
