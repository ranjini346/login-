import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import FloatingBlob from './FloatingBlob';
import CuteCharacter from './CuteCharacter';
import SocialButton from './SocialButton';

export default function CuteLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): string {
    if (!email) return 'Please enter your email 🥺';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'That email doesn\'t look quite right...';
    if (!password) return 'Please enter your password 🔑';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    
    setLoading(true);
    
    // Simulate async login
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSuccess(true);
      // In a real app, you would redirect here
    } catch (e) {
      setError('Something went wrong — try again');
    } finally {
      setLoading(false);
    }
  }

  // Google Icon SVG
  const GoogleIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.52 12.32C23.52 11.52 23.45 10.74 23.32 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.95 21.1C22.21 19.01 23.52 15.94 23.52 12.32Z" fill="#4285F4"/>
      <path d="M12 24C15.24 24 17.96 22.92 19.95 21.1L16.08 18.1C15 18.82 13.62 19.24 12 19.24C8.87 19.24 6.22 17.13 5.27 14.29L1.27 17.39C3.26 21.34 7.35 24 12 24Z" fill="#34A853"/>
      <path d="M5.27 14.29C5.03 13.57 4.9 12.8 4.9 12C4.9 11.2 5.03 10.43 5.27 9.71L1.27 6.61C0.46 8.23 0 10.06 0 12C0 13.94 0.46 15.77 1.27 17.39L5.27 14.29Z" fill="#FBBC05"/>
      <path d="M12 4.75C13.77 4.75 15.35 5.36 16.6 6.55L20.03 3.12C17.96 1.19 15.24 0 12 0C7.35 0 3.26 2.66 1.27 6.61L5.27 9.71C6.22 6.87 8.87 4.75 12 4.75Z" fill="#EA4335"/>
    </svg>
  );

  // Facebook Icon SVG
  const FacebookIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.07C24 5.4 18.63 0 12 0C5.37 0 0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24V15.56H7.08V12.07H10.13V9.43C10.13 6.42 11.92 4.73 14.66 4.73C15.97 4.73 17.34 4.96 17.34 4.96V7.92H15.83C14.34 7.92 13.88 8.84 13.88 9.79V12.07H17.2L16.67 15.56H13.88V24C19.61 23.1 24 18.1 24 12.07Z" fill="#1877F2"/>
    </svg>
  );

  return (
    <div className="min-h-screen relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-6 selection:bg-pink-200">
      
      {/* Background Animated Blobs */}
      <FloatingBlob colorClass="bg-pink-200" className="-top-20 -left-20 w-80 h-80" delay={0} />
      <FloatingBlob colorClass="bg-purple-200" className="top-1/2 -right-20 w-64 h-64" delay={2} />
      <FloatingBlob colorClass="bg-blue-100" className="-bottom-20 left-1/3 w-72 h-72" delay={4} />

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col md:flex-row overflow-hidden"
      >
        
        {/* Left Side: Illustration */}
        <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-gradient-to-br from-pink-50/50 to-purple-50/50 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <CuteCharacter />
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 text-2xl font-bold text-gray-800 tracking-tight"
                >
                  Welcome Back!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-500 mt-3 max-w-xs leading-relaxed"
                >
                   Your cozy dashboard is waiting for you. Let's make today productive! ✨
                </motion.p>
            </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 bg-white/40">
          <div className="max-w-sm mx-auto">
            <div className="text-center md:text-left mb-8">
              <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Sign In</h2>
              <p className="mt-2 text-gray-500 text-sm">Use your email account to continue</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-5">
                    
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide ml-1">Email</label>
                        <div className={`relative group transition-all duration-300 ${error && !email ? 'animate-pulse' : ''}`}>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                            </div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="block w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent transition-all shadow-sm"
                                placeholder="hello@example.com"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                            </div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="block w-full pl-10 pr-12 py-3 bg-white/80 border border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-all shadow-sm"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Extras */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-200 transition-colors cursor-pointer" 
                            />
                            <span className="text-gray-500 group-hover:text-gray-700 transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="font-medium text-pink-500 hover:text-pink-600 transition-colors">Forgot password?</a>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence mode='wait'>
                        {error && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2 border border-red-100">
                                    <span className="block h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                                    {error}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading || success}
                        className={`w-full relative flex items-center justify-center py-3.5 px-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 overflow-hidden
                            ${success ? 'bg-green-500' : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-[1.02] active:scale-[0.98]'}`}
                    >
                        <div className="relative z-10 flex items-center gap-2">
                           {loading ? (
                               <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Processing...</span>
                               </>
                           ) : success ? (
                               <>
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Success!</span>
                               </>
                           ) : (
                               'Sign In'
                           )}
                        </div>
                    </button>
                </div>

                <div className="mt-8">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white/50 backdrop-blur-sm px-3 text-gray-400 font-medium rounded-full">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <SocialButton label="Google" icon={GoogleIcon} onClick={() => console.log('Google login')} />
                        <SocialButton label="Facebook" icon={FacebookIcon} onClick={() => console.log('Facebook login')} />
                    </div>
                </div>
            </form>
            
            <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{' '}
                <a href="#" className="font-semibold text-pink-500 hover:text-pink-600 transition-colors">
                    Create one
                </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}