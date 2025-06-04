import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 mb-8">
      <input
        type="text"
        placeholder="Search events by name..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
