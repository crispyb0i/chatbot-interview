import React from 'react';
import { useAppContext } from '../context/AppContext';
import AppsPage from '../pages/AppsPage';
import DocumentsPage from '../pages/DocumentsPage';
import MobileMenu from './MobileMenu';

const ContentArea: React.FC = () => {
  const { activePage } = useAppContext();

  const renderContent = () => {
    switch (activePage) {
      case 'apps':
        return <AppsPage />;
      case 'documents':
        return <DocumentsPage />;
      default:
        return <AppsPage />;
    }
  };

  return (
    <div className="flex-1 overflow-auto relative">
      <MobileMenu />
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentArea;