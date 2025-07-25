// src/components/Navbar.jsx
import { useState } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">Learning</div>

      {/* Icons */}
      <div className="flex items-center space-x-6 relative cursor-pointer">

        {/* User Icon with dropdown */}
        <div className="relative">
          <button
            className="text-gray-700 hover:text-blue-600 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FiUser size={22} />
          </button>
          {dropdownOpen && <DropdownMenu />}
        </div>

        {/* Wishlist Icon */}
        <button className="text-gray-700 hover:text-red-500 cursor-pointer">
          <FiHeart size={22} />
        </button>

        
      </div>
    </nav>
  );
}
