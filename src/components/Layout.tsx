import React from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import ContentArea from './ContentArea';
import ChatbotButton from './chatbot/ChatbotButton';
import ChatbotWindow from './chatbot/ChatbotWindow';
import MobileMenu from './MobileMenu';
import { useAppContext } from '../context/AppContext';

const Layout: React.FC = () => {
  const { isChatOpen } = useAppContext();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Navbar />
      <MobileMenu />
      <div className="flex flex-1 overflow-hidden">
        <SideMenu />
        <ContentArea />
      </div>
      <ChatbotButton />
      {isChatOpen && <ChatbotWindow />}
    </div>
  );
};

export default Layout;