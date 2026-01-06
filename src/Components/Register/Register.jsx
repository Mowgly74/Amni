import { motion } from "framer-motion";
import { Mail, Lock, User, Phone, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen py-20 flex justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>

      {/* Go To Home Button */}
      <Link
        to="/"
        className="absolute top-12 md:top-16 right-16 md:right-24 lg:right-32
                   flex items-center gap-2 text-white z-10
                   hover:text-blue-200 transition group"
      >
        <Icon
          path={mdiHome}
          size={1.25}
          className="rounded-full border border-white/70 p-1
                   group-hover:scale-110 transition"
        />
        <span className="hidden md:inline text-sm font-medium">
          Go To Home
        </span>
      </Link>

      {/* Logo */}
      <Link to="/">
        <div
          className="absolute top-8 md:top-12  left-16 md:left-24 lg:left-32
  flex items-center gap-2 z-10
  bg-gradient-to-r from-white to-white/70
  bg-clip-text text-transparent
  transition-colors duration-300 group
  text-4xl md:text-6xl font-bold"
        >
          <Heart className="w-10 h-10 md:w-14 md:h-14 text-red-500" />
          Amni
        </div>
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-xl md:px-8 px-4 py-5 mt-10 mx-2"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Register
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-4">
          Create Your Amni Account
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-4">
          {/* First Name */}
          <div className="mb-2 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <User className="text-blue-400 w-5 h-5" />
              <input
                name="firstName"
                onChange={handleChange}
                placeholder="Enter your first name"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-2 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <User className="text-blue-400 w-5 h-5" />
              <input
                name="lastName"
                onChange={handleChange}
                placeholder="Enter your last name"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Email - Full Width */}
          <div className="mb-2 md:mb-0 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <Mail className="text-blue-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Phone - Full Width */}
          <div className="mb-2 md:mb-0 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <Phone className="text-blue-400 w-5 h-5" />
              <input
                name="phone"
                onChange={handleChange}
                placeholder="Enter phone number"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-2  md:mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <Lock className="text-blue-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="********"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-2 md:mb-0">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center gap-3 bg-blue-50 px-3 py-3 rounded-lg border">
              <Lock className="text-blue-400 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="********"
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg text-white font-semibold text-lg
                   bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition mt-4"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 font-medium hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}