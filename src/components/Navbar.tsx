import React from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <nav className="bg-white shadow-sm h-16 px-4 flex items-center justify-between z-10">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-indigo-600 flex items-center">
          <span className="bg-indigo-600 text-white rounded-lg p-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 17a2 2 0 0 0 2 2h16v-5H5a2 2 0 0 0-2 2Z" />
              <path d="M18 12v7" />
            </svg>
          </span>
          Chatify
        </div>
      </div>
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          placeholder="Search content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;