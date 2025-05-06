import React from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <nav className="bg-white h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-30">
      <div className="flex items-center flex-shrink-0 w-12 sm:w-auto">
        <div className="text-2xl font-bold text-indigo-600 flex items-center">
          <img src="/logo.svg?v=2" alt="Chatify Logo" className="h-10 w-10 mr-2 hidden sm:block" />
          <span className="hidden sm:inline">Chatify</span>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1">
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;