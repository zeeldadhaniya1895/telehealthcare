import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-white text-3xl font-bold tracking-wide hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Health<span className="text-blue-400">Care</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-base font-medium">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white relative group"
            >
              Find Doctors
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white relative group"
            >
              Video Consult
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white relative group"
            >
              Chat with Doctor
              <span className="block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Sign In and Login */}
        <ul className="flex space-x-6 text-base font-medium">
          <li>
            <a
              href="#"
              className="px-4 py-2 bg-blue-400 text-gray-900 rounded-full shadow-md hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
