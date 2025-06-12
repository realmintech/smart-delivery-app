import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 border-t border-[#537D5D]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#537D5D]">
                SwiftDeliver
              </span>
            </Link>
            <p className="text-sm">
              AI-powered delivery solutions for the modern world. Fast,
              reliable, and efficient.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#537D5D] transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#537D5D] transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#537D5D] transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#537D5D] transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#537D5D]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/deliveries"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  My Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#537D5D]">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Same-Day Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Scheduled Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Temperature-Controlled
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Bulk Deliveries
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#537D5D] transition text-sm"
                >
                  Corporate Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#537D5D]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-[#537D5D]" />
                <span className="text-sm">
                  123 Delivery Street, Tech City, TC 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#537D5D]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#537D5D]" />
                <span className="text-sm">support@swiftdeliver.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2d2d2d] mt-12 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SwiftDeliver. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-[#537D5D] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#537D5D] transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#537D5D] transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;