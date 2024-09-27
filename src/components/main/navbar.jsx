import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-xl font-bold">HealthCare</a>
        
        {/* Navigation Links */}
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">Find Doctors</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Video Consult</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Chat with Doctor</a>
          </li>
        </ul>

        {/* Sign In and Login */}
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">Sign In</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;