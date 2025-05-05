import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const ChatbotButton: React.FC = () => {
  const { isChatOpen, setIsChatOpen } = useAppContext();

  const onClick = () => setIsChatOpen(!isChatOpen);

  return (
    <button
      className="fixed right-6 bottom-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-all duration-200 z-20"
      onClick={onClick}
      aria-label="Open chatbot"
    >
      <MessageSquare size={24} />
    </button>
  );
};

export default ChatbotButton;