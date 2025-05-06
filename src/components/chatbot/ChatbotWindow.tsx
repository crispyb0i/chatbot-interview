import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import ChatHeader from './ChatHeader';
import MessageView from './MessageView';
import MessageInput from './MessageInput';
import { useTimer } from '../../hooks/useTimer';

const ChatbotWindow: React.FC = () => {
  const { setIsChatOpen, clearMessages } = useAppContext();
  const { seconds, resetTimer } = useTimer();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleClose = () => {
    setIsChatOpen(false);
    resetTimer();
  };

  const handleReset = () => {
    clearMessages();
    resetTimer();
  };

  // Determine if we're on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div
      className={`fixed z-40 bg-white shadow-xl transition-all duration-300 ease-in-out ${
        mounted
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-8'
      } ${
        isMobile
          ? 'inset-0 m-0'
          : 'bottom-6 right-6 rounded-lg w-[400px] h-[600px]'
      }`}
    >
      <div className="flex flex-col h-full">
        <ChatHeader
          seconds={seconds}
          onClose={handleClose}
          onReset={handleReset}
        />
        <MessageView />
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatbotWindow;