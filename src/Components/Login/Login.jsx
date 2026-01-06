import { motion } from "framer-motion";
import { Mail, Lock, Heart } from "lucide-react";
import { Link } from "react-router";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm"></div>

      {/* Home Link */}
      <Link
        to="/"
        className="absolute top-[73px] md:top-20 lg:top-24 right-16 md:right-24 lg:right-32
        flex items-center gap-2 text-white z-10
        hover:text-blue-200 transition-colors duration-300 group"
      >
        <Icon
          path={mdiHome}
          size={1.25}
          className="
            rounded-full
            border border-white/70
            p-1
            group-hover:border-white
            group-hover:scale-110
            transition-all duration-300 ease-out
          "
        />
        <span className="hidden md:inline text-sm lg:text-base font-medium">
          Go To Home
        </span>
      </Link>

      {/* Logo */}
      <Link to="/">
      <div
        className="absolute top-16 md:top-16 lg:top-20 left-16 md:left-24 lg:left-32 flex items-center gap-2 z-10
                    bg-gradient-to-r from-white to-white/70
                    bg-clip-text text-transparent
                    transition-colors duration-300 group
                    text-4xl md:text-6xl font-bold"
      >
        <Heart
          className="w-10 h-10 md:w-14 md:h-14 text-red-500"
        />
        Amni
      </div>
      </Link>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-xl md:px-8 px-4 py-5 mx-2"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Login
        </h2>
        <p className="text-center text-gray-500 mt-2 mb-4">
          Welcome Back To Amni
        </p>

        {/* Email */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <div className="flex items-center gap-3 bg-blue-50 md:px-4 px-2 py-3 rounded-lg border border-blue-100">
            <Mail className="text-blue-400 w-5 h-5" />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="flex items-center gap-3 bg-blue-50 md:px-4 px-2 py-3 rounded-lg border border-blue-100">
            <Lock className="text-blue-400 w-5 h-5" />
            <input
              type="password"
              placeholder="************"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        <div className="text-left mb-4">
          <a
            href="#"
            className="text-sm text-blue-600 font-semibold hover:underline"
          >
            forget Password
          </a>
        </div>
<Link to="/">
        <button className="w-full py-3 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 transition">
          Login
        </button></Link>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}


