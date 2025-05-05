import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const MessageInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { addMessage } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      addMessage(inputValue.trim(), 'user');
      setInputValue('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-gray-200 p-4 bg-gray-50"
    >
      <div className="flex items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type a message..."
          aria-label="Type a message"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
          disabled={!inputValue.trim()}
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;