"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-950 pr-12"
      />

      <button
        type="button"
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-all duration-300 ${
          isFocused ? "bg-[#537D5D]/20" : "bg-transparent"
        }`}
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <FaEye className="text-[#537D5D] h-5 w-5 hover:text-[#3a5a40] transition-colors" />
        ) : (
          <FaEyeSlash className="text-gray-400 h-5 w-5 hover:text-[#537D5D] transition-colors" />
        )}
      </button>

      {/* Animated strength indicator */}
      {value.length > 0 && (
        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`h-1 flex-1 rounded-full ${
                value.length >= level * 3 ? "bg-[#537D5D]" : "bg-gray-700"
              } transition-all duration-500`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;


