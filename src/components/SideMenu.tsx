import React from 'react';
import { LayoutGrid, FileText } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { MenuPage } from '../context/AppContext';

const SideMenu: React.FC = () => {
  const { activePage, setActivePage } = useAppContext();

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

  return (
    <div className="bg-white w-56 border-r border-gray-200 py-6 hidden sm:block">
      <div className="px-4 mb-6">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</h2>
      </div>
      <nav className="space-y-1 px-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md w-full transition-all ${
              activePage === item.id
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
            onClick={() => setActivePage(item.id)}
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
  );
};

export default SideMenu;