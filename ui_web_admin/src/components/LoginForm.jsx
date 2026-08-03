import React, { useState } from 'react';
import { Mail, Lock, ShieldCheck } from 'lucide-react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      // api calling will be done here once the admin login endpoint is ready !!!!
      console.log(formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">JustAsk</h1>
        <span className="text-xs font-medium text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full border border-[#22C55E]/20">
          Admin
        </span>
      </div>

      <p className="text-center text-[#94A3B8] text-sm mb-8">
        Administrative Dashboard
      </p>

      {/* Login Card */}
      <div className="bg-[#151B23] rounded-2xl border border-[#26303D] p-8 shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-[#22C55E]/10 p-3 rounded-full">
            <ShieldCheck size={24} className="text-[#22C55E]" />
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-[#F8FAFC] mb-1.5">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-[#94A3B8]" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@justask.com"
                className={`w-full bg-[#0B0F14] text-[#F8FAFC] rounded-xl px-10 py-3 border ${
                  errors.email ? 'border-red-500/50' : 'border-[#26303D]'
                } focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] transition-all duration-200 placeholder:text-[#94A3B8]/50`}
                disabled={isLoading}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-[#F8FAFC] mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-[#94A3B8]" />
              </div>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full bg-[#0B0F14] text-[#F8FAFC] rounded-xl px-10 py-3 border ${
                  errors.password ? 'border-red-500/50' : 'border-[#26303D]'
                } focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50 focus:border-[#22C55E] transition-all duration-200 placeholder:text-[#94A3B8]/50`}
                disabled={isLoading}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? 'password-error' : undefined}
              />
            </div>
            {errors.password && (
              <p id="password-error" className="mt-1.5 text-sm text-red-400">
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 bg-[#0B0F14] border-[#26303D] rounded-md text-[#22C55E] focus:ring-[#22C55E]/50 focus:ring-2 focus:ring-offset-0 transition-all cursor-pointer"
                disabled={isLoading}
              />
              <span className="text-sm text-[#94A3B8] group-hover:text-[#F8FAFC] transition-colors">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-sm text-[#94A3B8] hover:text-[#22C55E] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#22C55E] text-white font-medium py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
              isLoading
                ? 'opacity-60 cursor-not-allowed'
                : 'hover:bg-[#16A34A] hover:shadow-lg hover:shadow-[#22C55E]/20 active:scale-[0.98]'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <p className="text-center text-[#94A3B8] text-sm mt-8">
        © JustAsk
      </p>
    </div>
  );
}