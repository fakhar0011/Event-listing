import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          Eventify
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Events</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
        {/* Mobile Menu Placeholder (for future scalability) */}
        <div className="md:hidden">
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
