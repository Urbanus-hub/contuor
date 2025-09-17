import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import {account,id} from '../utils/appwrite';
import { toast } from "sonner";



const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const promise=account.create(id.unique(),form.email,form.password,form.name);
  
    // Simulate API call
    setTimeout(() => {
      console.log(form);
      setIsLoading(false);
    promise.then(function (response) {
   
    toast.success("Account created successfully!", {
            style: { backgroundColor: "#22c55e", color: "white" }
          })// Success
    navigate("/login");
}, function (error) {
    toast(error.message);
    console.log(error); // Failure
});
      
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#EFF2F1] via-[#f8faf9] to-[#e8f0ed] flex items-center justify-center py-12 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3B5D50] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#3B5D50] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#3B5D50] to-[#4a6b5d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#3B5D50] to-[#4a6b5d] bg-clip-text text-transparent mb-2">
              Create Account
            </h1>
            <p className="text-gray-600 font-medium">Join us and get started today</p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Name field */}
            <div className="group">
              <label className="block text-[#3B5D50] font-semibold mb-3 transition-colors group-focus-within:text-[#3B5D50]">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#3B5D50]" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#DCE5E4] focus:outline-none focus:border-[#3B5D50] focus:ring-4 focus:ring-[#3B5D50]/20 bg-[#f9fafa] transition-all duration-300 font-medium placeholder-gray-400 hover:border-[#c9d3d2]"
                  placeholder="Enter your full name"
                  required
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            </div>

            {/* Email field */}
            <div className="group">
              <label className="block text-[#3B5D50] font-semibold mb-3 transition-colors group-focus-within:text-[#3B5D50]">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#3B5D50]" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-[#DCE5E4] focus:outline-none focus:border-[#3B5D50] focus:ring-4 focus:ring-[#3B5D50]/20 bg-[#f9fafa] transition-all duration-300 font-medium placeholder-gray-400 hover:border-[#c9d3d2]"
                  placeholder="you@example.com"
                  required
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password field */}
            <div className="group">
              <label className="block text-[#3B5D50] font-semibold mb-3 transition-colors group-focus-within:text-[#3B5D50]">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-[#3B5D50]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-[#DCE5E4] focus:outline-none focus:border-[#3B5D50] focus:ring-4 focus:ring-[#3B5D50]/20 bg-[#f9fafa] transition-all duration-300 font-medium placeholder-gray-400 hover:border-[#c9d3d2]"
                  placeholder="Create a strong password"
                  required
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3B5D50] transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              onClick={handleRegister}
              className="relative w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3B5D50] to-[#4a6b5d] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a6b5d] to-[#3B5D50] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#3B5D50]/30 border-t-[#3B5D50] rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </span>
            </button>
          </div>

          {/* Sign in link */}
          <div className="mt-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3B5D50]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#3B5D50]/60 font-medium">Already have an account?</span>
              </div>
            </div>
            <Link
              to={"/login"}
              className="inline-block mt-4 text-[#3B5D50] font-bold text-lg hover:text-[#2d4940] transition-colors duration-300 relative group"
                                                     
            >
              Sign In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B5D50] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Terms notice */}
          <p className="mt-6 text-xs text-[#3B5D50]/50 text-center leading-relaxed">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-[#3B5D50] hover:text-[#2d4940] font-medium transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#3B5D50] hover:text-[#2d4940] font-medium transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;