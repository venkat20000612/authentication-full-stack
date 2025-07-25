// src/components/DropdownMenu.jsx
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DropdownMenu() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/"; // redirect to home
  };

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
      {user ? (
        <>
          <div className="px-4 py-2 text-sm text-gray-600 border-b">
            👋 Hello, {user.name}
          </div>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/register"
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
