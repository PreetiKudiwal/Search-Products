import React, { useContext } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../../Context/MainContext";

export default function Header() {

  const { cart, user, setUser } = useContext(Context);

  const logout = () => {
    setUser("");
  };


  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to = {'/'}>
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Brand Name */}
          <span className="text-3xl font-mono font-bold text-gray-900">Trove</span>
        </div>
        </Link>
        {/* Search Bar */}
        <div className="relative w-1/3 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"
          />

          <FaSearch className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition duration-300 hover:text-red-500 ${
                isActive
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition duration-300 hover:text-red-500 ${
                isActive
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-800"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition duration-300 hover:text-red-500 ${
                isActive
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-800"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 text-base font-medium transition duration-300 hover:text-red-500 ${
                isActive
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-800"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Icons & Login Button */}
        <div className="flex items-center space-x-4">
          <a href="">
            <FaRegHeart className="text-xl" />
          </a>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative px-4 py-2 text-2xl transition duration-300 ${
                isActive ? "text-red-500" : "text-gray-800 hover:text-red-500"
              }`
            }
          >
            <TiShoppingCart />
            
              <span className="absolute -top-2 -right-[-10px] bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
          </NavLink>

          {!user ? ( //user!"" & undifined & null
            <Link to={"/login"}>
              <button className="bg-gray-700 text-white py-1 px-4 rounded-md font-medium hover:bg-gray-900 transition">
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-gray-700 text-white py-1 px-4 rounded-md font-medium hover:bg-gray-900 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
