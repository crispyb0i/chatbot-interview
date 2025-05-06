import React from 'react';
import { X, RefreshCw } from 'lucide-react';

interface ChatHeaderProps {
  seconds: number;
  onClose: () => void;
  onReset: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ seconds, onClose, onReset }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  return (
    <div className={`bg-indigo-600 text-white p-4 ${!isMobile ? 'rounded-t-lg' : ''} flex items-center justify-between`}>
      <button
        onClick={onReset}
        className="p-2 hover:bg-indigo-700 rounded-full transition-colors"
        aria-label="Reset conversation"
      >
        <RefreshCw size={18} />
      </button>
      
      <div className="font-medium">
        {seconds}s
      </div>
      
      <button
        onClick={onClose}
        className="p-2 hover:bg-indigo-700 rounded-full transition-colors"
        aria-label="Close chatbot"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;