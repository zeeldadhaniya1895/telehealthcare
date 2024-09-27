import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-5 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-white text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-110">
          Health<span className="text-yellow-300">Care</span>
        </a>
        
        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-semibold">
          <li>
            <a href="#" className="text-white relative group">
              Find Doctors
              <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white relative group">
              Video Consult
              <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#" className="text-white relative group">
              Chat with Doctor
              <span className="block h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>

        {/* Sign In and Login */}
        <ul className="flex space-x-6 text-lg font-semibold">
          <li>
            <a href="#" className="px-4 py-2 bg-yellow-300 text-blue-900 rounded-full shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
              Sign In
            </a>
          </li>
          <li>
            <a className="px-4 py-2 bg-white text-blue-900 rounded-full shadow-md hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
