import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for hash links
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const navItems = [
    { name: "Work", link: "/#work" }, // ✅ points to section ID
    { name: "About", link: "/#about" },
    { name: "Contact", link: "/#contact" },
    { name: "Fluencers", link: "/fluencers" },
  ];
  

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-fluenzy-white/50 border-b border-fluenzy-light-gray"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (window.location.pathname === "/")
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-noi font-bold text-3xl text-fluenzy-black tracking-tight"
          >
            Fluenzy.in
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="font-inter font-semibold text-lg lg:text-xl text-fluenzy-coral hover:text-fluenzy-black transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fluenzy-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <svg
              className="w-7 h-7 text-fluenzy-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-fluenzy-white border-t border-fluenzy-light-gray shadow-lg flex flex-col space-y-4 py-6 px-6 z-40">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setIsMobileOpen(false)}
                className="font-inter font-semibold text-lg text-fluenzy-coral hover:text-fluenzy-black transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
