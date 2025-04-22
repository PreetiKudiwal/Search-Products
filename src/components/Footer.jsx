import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-mono font-semibold">Trove</h2>
            <p className="text-gray-400 mt-2">
              Building the future, one step at a time.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to = {'/'}>
                <span className="text-gray-400 hover:text-white">
                  Home
                </span>
                </Link>
              </li>
              <li>
                <Link to = {'/about'}>
                <span className="text-gray-400 hover:text-white">
                  About
                </span>
                </Link>
              </li>
              <li>
                <Link to = {'/'}>
                <span className="text-gray-400 hover:text-white">
                  Services
                </span>
                </Link>
              </li>
              <li>
                <Link to = {'/contact'}>
                <span className="text-gray-400 hover:text-white">
                  Contact
                </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <FaFacebook className="text-xl cursor-pointer"/>
              <FaTwitter className="text-xl cursor-pointer"/>
              <FaInstagram className="text-xl cursor-pointer"/>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
          &copy; 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
