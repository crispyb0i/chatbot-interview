import React, { useState } from 'react';
import { LayoutGrid, FileText, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { MenuPage } from '../context/AppContext';

const MobileMenu: React.FC = () => {
  const { activePage, setActivePage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: Array<{ id: MenuPage; label: string; icon: React.ReactNode }> = [
    {
      id: 'apps',
      label: 'Apps',
      icon: <LayoutGrid size={20} />,
    },
    {
      id: 'documents',
      label: 'Documents',
      icon: <FileText size={20} />,
    },
  ];

  const handleItemClick = (page: MenuPage) => {
    setActivePage(page);
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-40 p-1 rounded-md bg-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="bg-white w-64 h-full py-6 px-4">
            
            <div className="border-t border-gray-200 pt-14">
              <div className="flex items-center mb-4">
                <img src="/logo.svg" alt="Chatify Logo" className="h-10 w-10 mr-2" />
                <span className="text-2xl font-bold text-indigo-600">Chatify</span>
              </div>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md w-full transition-all ${
                      activePage === item.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span
                      className={`mr-3 ${
                        activePage === item.id ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;