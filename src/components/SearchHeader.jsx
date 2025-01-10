import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">Logo</Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg relative">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaSearch className="text-gray-500" />
              </button>
            </form>
          </div>

          {/* Notification and Profile Icons */}
          <div className="flex items-center">
            <Link to="/notifications" className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <FaBell className="text-xl" />
            </Link>
            <Link to="/profile" className="ml-4 p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200">
              <FaUser className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

