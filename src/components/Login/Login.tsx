import { useEffect, useState } from "react";
import { Eye, EyeOff, User, Shield, X } from "lucide-react";
import logo from "../../assets/images/An-fish.png";
import type { LoginProps } from "./types";

const Login = ({ isLoginOpen, setIsLoginOpen }: LoginProps) => {
  const [activeTab, setActiveTab] = useState<"customer" | "admin">("customer");
  const [showPassword, setShowPassword] = useState(false);

  const toggleTab = (tab: "customer" | "admin") => setActiveTab(tab);
  const togglePassword = () => setShowPassword((prev) => !prev);

  if (!isLoginOpen) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isLoginOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoginOpen]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80">
      <div className="relative w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl m-4">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          onClick={() => setIsLoginOpen(false)}
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-28 drop-shadow-md" />
        </div>

        {/* Heading */}
        <div className="mt-4 mb-6 text-center">
          <h2 className="text-3xl font-bold font-Mainlux text-gray-800">
            {activeTab === "customer" ? "Customer Login" : "Admin Login"}
          </h2>
          <p className="text-gray-500 text-sm">Welcome back to An-Fish!</p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "customer"
                ? "bg-anBlue text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => toggleTab("customer")}
          >
            <User size={16} className="mr-1" />
            Customer
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeTab === "admin"
                ? "bg-anBlue text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => toggleTab("admin")}
          >
            <Shield size={16} className="mr-1" />
            Admin
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm text-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm pr-10 text-black"
                required
              />
              <span
                className="absolute top-2 right-3 text-gray-500 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-anBlue hover:bg-sky-700 transition text-white font-semibold rounded-xl shadow-lg"
          >
            {activeTab === "customer" ? "Login as Customer" : "Login as Admin"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <span>Forgot your password? </span>
          <a href="#" className="text-anBlue hover:underline">
            Reset here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
