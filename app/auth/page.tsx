"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEnvelope, FaFacebook, FaGoogle, FaUser } from "react-icons/fa";
import {
  registerUser,
  loginUser,
  signInWithGoogle,
  signInWithFacebook,
} from "../../config/firebase-auth";
import PasswordInput from "@/components/PasswordInput";

export default function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree && !isLogin) {
      alert("You must agree to the terms and conditions");
      return;
    }

    try {
      if (isLogin) {
        await loginUser(email, password);
        alert("Login successful");
        router.push("/"); // Redirect to home page after login
      } else {
        await registerUser(email, password);
        alert("Registration successful");
        setIsLogin(true); // Switch to login form after registration
        setEmail(""); // Clear form
        setPassword("");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle();
      alert("Signed in with Google");
      router.push("/"); // Redirect to home page
    } catch (err) {
      alert("Google sign-in error: " + err.message);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      await signInWithFacebook();
      alert("Signed in with Facebook");
      router.push("/"); // Redirect to home page
    } catch (err) {
      alert("Facebook sign-in error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text)]">
      {/* Left side image */}
      <div className="hidden lg:flex flex-1 justify-center items-center bg-[#537D5D]">
        <img
          src="/delivery_headshot.png"
          alt="Robot Assistant"
          className="max-w-md w-full p-4 rounded-xl"
        />
      </div>

      {/* Right side form */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">
            AI Assisted {isLogin ? "Login" : "Register"}
          </h2>
          <p className="text-center text-sm text-gray-400">
            Get Your Delivery Done Swiftly By Your AI-Bestie.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form fields remain the same */}
            {!isLogin && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Input your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-950"
                />
                <FaUser className="absolute right-3 top-1/2 text-gray-400 hover:text-[#537D5D] h-5 w-5 transform -translate-y-1/2" />
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                placeholder="Input your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-[#1e1e1e] text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-950"
              />
              <FaEnvelope className="absolute right-3 top-1/2 text-gray-400 hover:text-[#537D5D] h-5 w-5 transform -translate-y-1/2" />
            </div>

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Checkbox and submit button */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="form-checkbox text-[#537D5D]"
                />
                <span className="pr-1">
                  I agree to the terms and conditions.
                </span>
              </label>
              {isLogin && (
                <a href="#" className="text-[#537D5D] hover:underline">
                  Forgot Password?
                </a>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#537D5D] text-black font-semibold rounded cursor-pointer hover:bg-[#537D5D]"
            >
              {isLogin ? "Login" : "Register"}
            </button>

            {/* Social login options */}
            <div className="text-center text-sm text-gray-400">
              Or continue with
            </div>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex-1 py-2 bg-white text-black cursor-pointer rounded flex items-center justify-center gap-2"
              >
                <FaGoogle className="h-5 w-5 text-[#537D5D]" />
                Google
              </button>
              <button
                type="button"
                onClick={handleFacebookSignin}
                className="flex-1 py-2 bg-[#537D5D] text-white rounded flex items-center justify-center gap-2"
              >
                <FaFacebook className="h-5 w-5" />
                Facebook
              </button>
            </div>

            {/* Toggle between login/register */}
            <p className="text-center text-sm mt-4">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#537D5D] hover:underline cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}