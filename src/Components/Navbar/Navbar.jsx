import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavbarBackground = () => {
    if (isMobileMenuOpen) {
      return 'bg-gradient-to-b from-gray-900/70 to-gray-700/30';
    }

    if (isHomePage) {
      return scrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg'
        : 'bg-transparent';
    } else {
      return 'bg-white/80 backdrop-blur-lg shadow-lg';
    }
  };

  const getTextColor = () => {
    if (isHomePage && !scrolled) {
      return 'text-white';
    }
    return 'text-gray-700';
  };

  const textColor = getTextColor();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBackground()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <Heart className="w-10 h-10 text-red-500 transition-transform duration-300 group-hover:scale-110" />
            <span className={`text-4xl font-bold bg-gradient-to-r ${isHomePage && !scrolled
                ? 'from-white to-white/70'
                : 'from-red-600 to-red-400'
              } bg-clip-text text-transparent transition-all duration-300`}>
              Amni
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${textColor} hover:text-red-500 font-medium transition-colors duration-300 relative group`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className={`${textColor} hover:text-red-500 font-medium transition-colors duration-300 relative group`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/features"
              className={`${textColor} hover:text-red-500 font-medium transition-colors duration-300 relative group`}
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/store"
              className={`${textColor} hover:text-red-500 font-medium transition-colors duration-300 relative group`}
            >
              Store
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className={`${textColor} hover:text-red-500 font-medium transition-colors duration-300 relative group`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigate('/login')}
              className={`px-6 py-2 rounded-lg border font-medium transition-all duration-300 hover:shadow-md backdrop-blur-sm ${isHomePage && !scrolled
                  ? 'border-red-500 text-white hover:border-sky-500 hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-500'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium 
                         transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-xl 
                         hover:shadow-sky-500/50 hover:-translate-y-0.5"
            >
              Register
            </button>
            <button
              onClick={() => navigate('/report_page')}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium 
                         transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl 
                         hover:shadow-red-500/50 hover:-translate-y-0.5"
            >
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 ${isHomePage && !scrolled
                ? 'bg-white/10 border-white/30 hover:bg-white/20'
                : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
              }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isHomePage && !scrolled ? 'text-white' : 'text-gray-700'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isHomePage && !scrolled ? 'text-white' : 'text-gray-700'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/95 border-t border-gray-200/50 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50/50 
                         font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50/50 
                         font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/features"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50/50 
                         font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/store"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50/50 
                         font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-500 hover:bg-red-50/50 
                         font-medium transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 mt-4  border-t border-gray-200/50 space-x-8 pb-2 ">
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMobileMenuOpen(false);
                }}
                className="w-[45%] px-4 py-3 rounded-lg border border-sky-300 text-sky-700 font-medium 
                           transition-all duration-300 hover:border-red-400 hover:text-red-500 
                           hover:shadow-md backdrop-blur-sm"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate('/register');
                  setIsMobileMenuOpen(false);
                }}
                className="w-[45%] px-4 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white
                           font-medium transition-all duration-300 hover:from-red-600 hover:to-red-700 border-red-500 border hover:border-blue-600
                           hover:shadow-lg hover:shadow-red-200"
              >
                Register
              </button>
              
            </div>
            <button
                onClick={() => {
                  navigate('/report_page');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full  px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white
                           font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 border-red-500 border hover:border-blue-600
                           hover:shadow-lg hover:shadow-red-200"
              >
                Dashboard
              </button>
          </div>
        </div>
      )}
    </nav>
  );
}