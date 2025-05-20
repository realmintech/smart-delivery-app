"use client";

import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";
import { FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  // const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#121212] text-white border-b border-[#537D5D] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#537D5D]">
              SwiftDeliver
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/deliveries"
              className="hover:text-[#537D5D] transition"
            >
              My Deliveries
            </Link>
            <Link href="/pricing" className="hover:text-[#537D5D] transition">
              Pricing
            </Link>

            {/* {user ? ( */}

              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FaUser className="mr-2 text-[#537D5D]" />
                  {/* {user.email} */}
                </span>
                <button className="flex items-center text-red-400 hover:text-red-300">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            {/* ) : ( */}
              <Link
                href="/auth"
                className="bg-[#537D5D] text-black px-4 py-2 rounded hover:bg-[#3a5a40] transition"
              >
                Login / Register
              </Link>
            {/* )} */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#537D5D] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/deliveries"
              className="block hover:text-[#537D5D] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              My Deliveries
            </Link>
            <Link
              href="/pricing"
              className="block hover:text-[#537D5D] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* {user ? ( */}
              <div className="pt-4 border-t border-[#2d2d2d]">
                <div className="flex items-center mb-4">
                  <FaUser className="mr-2 text-[#537D5D]" />
                  {/* {user.email} */}
                </div>
                <button className="flex items-center text-red-400 hover:text-red-300">
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            {/* ) : ( */}
              <Link
                href="/auth"
                className="block bg-[#537D5D] text-black text-center py-2 rounded hover:bg-[#3a5a40] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Register
              </Link>
            {/* )} */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
