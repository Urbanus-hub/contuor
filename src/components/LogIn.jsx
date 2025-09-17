import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn, AlertCircle } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import {account} from '../utils/appwrite';
import { toast } from "sonner";
 
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create email session with Appwrite
      await account.createEmailPasswordSession(form.email, form.password);
      
      // Show success message
      toast.success("Logged in successfully");
      // After successful login
window.dispatchEvent(new Event("appwrite-login"));
      
      // Reset loading state
      setIsLoading(false);
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      // Handle error
      toast.error(error.message || "Login failed. Please check your credentials.");
      setIsLoading(false);
    }
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
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#3B5D50] to-[#4a6b5d] bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 font-medium">Sign in to continue to your account</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
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
                  placeholder="Enter your password"
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

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#3B5D50] bg-[#f9fafa] border-2 border-[#DCE5E4] rounded focus:ring-[#3B5D50] focus:ring-2"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-[#3B5D50] font-medium cursor-pointer">
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-sm text-[#3B5D50] hover:text-[#2d4940] font-medium transition-colors duration-300 relative group"
              >
                Forgot password?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B5D50] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#3B5D50] to-[#4a6b5d] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4a6b5d] to-[#3B5D50] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#3B5D50]/30 border-t-[#3B5D50] rounded-full animate-spin"></div>
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </span>
            </button>
          </form>

          {/* Sign up link */}
          <div className="mt-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3B5D50]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#3B5D50]/60 font-medium">Don't have an account?</span>
              </div>
            </div>
            <Link
              to="/register"
              className="inline-block mt-4 text-[#3B5D50] font-bold text-lg hover:text-[#2d4940] transition-colors duration-300 relative group"
            >
              Create Account
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B5D50] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Social login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#3B5D50]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-[#3B5D50]/60 font-medium">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 rounded-2xl border-2 border-[#DCE5E4] bg-[#f9fafa] text-sm font-medium text-[#3B5D50] hover:bg-white hover:border-[#3B5D50] transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 rounded-2xl border-2 border-[#DCE5E4] bg-[#f9fafa] text-sm font-medium text-[#3B5D50] hover:bg-white hover:border-[#3B5D50] transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          {/* Terms notice */}
          <p className="mt-6 text-xs text-[#3B5D50]/50 text-center leading-relaxed">
            By signing in, you agree to our{" "}
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
export default Login;