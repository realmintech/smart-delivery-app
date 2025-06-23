"use client";

import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import {
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Custom event name for cart updates
  const CART_UPDATE_EVENT = "cartUpdated";

  // Calculate total items in cart
  const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Update cart count and setup event listener
  useEffect(() => {
    // Initial load
    setCartCount(getCartCount());

    // Create event listener for cart updates
    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };

    // Listen for both custom events and storage events
    window.addEventListener(CART_UPDATE_EVENT, handleCartUpdate);
    window.addEventListener("storage", handleCartUpdate);

    return () => {
      window.removeEventListener(CART_UPDATE_EVENT, handleCartUpdate);
      window.removeEventListener("storage", handleCartUpdate);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
            <Link
              href="/cart"
              className="relative hover:text-[#537D5D] transition"
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#537D5D] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <FaUser className="mr-2 text-[#537D5D]" />
                  {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="bg-[#537D5D] text-black px-4 py-2 rounded hover:bg-[#3a5a40] transition"
              >
                Login / Register
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative hover:text-[#537D5D] transition"
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#537D5D] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-[#537D5D] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
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
            <Link
              href="/cart"
              className="block hover:text-[#537D5D] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({cartCount > 9 ? "9+" : cartCount})
            </Link>

            {user ? (
              <div className="pt-4 border-t border-[#2d2d2d]">
                <div className="flex items-center mb-4">
                  <FaUser className="mr-2 text-[#537D5D]" />
                  {user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-400 hover:text-red-300"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/auth"
                className="block bg-[#537D5D] text-black text-center py-2 rounded hover:bg-[#3a5a40] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Login / Register
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;