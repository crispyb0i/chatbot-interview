import React from 'react';
import { X, RefreshCw } from 'lucide-react';

interface ChatHeaderProps {
  seconds: number;
  onClose: () => void;
  onReset: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ seconds, onClose, onReset }) => {
  // Format seconds as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-indigo-600 text-white p-4 rounded-t-lg flex items-center justify-between">
      <button
        onClick={onReset}
        className="p-2 hover:bg-indigo-700 rounded-full transition-colors"
        aria-label="Reset conversation"
      >
        <RefreshCw size={18} />
      </button>
      
      <div className="font-medium">
        {formatTime(seconds)}
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