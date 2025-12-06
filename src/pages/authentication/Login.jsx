import React from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side*/}
      <div className="hidden lg:block w-1/2 bg-linear-to-br from-main to-blue-600 relative overflow-hidden">
        <img
          src="https://i.ibb.co.com/215F8LYG/bg-gradient.jpg"
          alt="ClubSphere Community"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Club Nest</h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-md">
            Your Community, Connected. Discover, manage, and grow with the ultimate platform
            for local clubs and events.
          </p>
        </div>
      </div>

      {/* Right Side  */}
      <div className="w-full lg:w-1/2 flex items-center justify-center  px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-gray-600">
              Log in to manage your clubs and events.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email address"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-2 relative">
                  <input
                    type="password"
                    id="password"
                    required
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent pr-12"
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    Eye Icon
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-main rounded" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <p className="text-sm text-main/85 hover:text-main">
                Forgot Password?
              </p>
            </div>

            <Button className="w-full py-4 rounded-full text-lg font-semibold bg-main/85 hover:bg-main text-white">
              Log In
            </Button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4  text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
            >
              <span className="text-gray-700 font-medium">Sign in with Google</span>
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-main/95 hover:text-main">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;