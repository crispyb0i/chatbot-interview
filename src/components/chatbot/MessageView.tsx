import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const MessageView: React.FC = () => {
  const { messages, isBotTyping } = useAppContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isBotTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 && !isBotTyping ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-400 text-center">
            No messages yet. Start a conversation!
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          {isBotTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
};

export default MessageView;