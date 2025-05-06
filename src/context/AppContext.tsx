import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// Types
export type MenuPage = 'apps' | 'documents';
export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

interface AppContextType {
  activePage: MenuPage;
  setActivePage: (page: MenuPage) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  messages: Message[];
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  clearMessages: () => void;
  isChatOpen: boolean;
  setIsChatOpen: (isOpen: boolean) => void;
  isBotTyping: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load state from localStorage if available
  const [activePage, setActivePage] = useState<MenuPage>(() => {
    const saved = localStorage.getItem('activePage');
    return (saved as MenuPage) || 'apps';
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const botResponseTimeoutRef = useRef<number | null>(null);

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('activePage', activePage);
  }, [activePage]);

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  // Cleanup timeout on unmount or when messages are cleared
  useEffect(() => {
    return () => {
      if (botResponseTimeoutRef.current) {
        clearTimeout(botResponseTimeoutRef.current);
      }
    };
  }, []);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    
    // If this is a user message, generate a bot response
    if (sender === 'user') {
      // Clear any existing timeout
      if (botResponseTimeoutRef.current) {
        clearTimeout(botResponseTimeoutRef.current);
      }

      setIsBotTyping(true);
      const botResponses = [
        "Ooh, that's fascinating! Let me process that for a sec... 🤔",
        "Wow, I love this conversation! Give me a moment to think... 💭",
        "That's such an interesting point! *adjusts virtual glasses* Let me think about that... 👓",
        "You've got my circuits buzzing with that one! Let me gather my thoughts... ⚡",
        "Hold on to your keyboard, I'm cooking up a response! 🧠",
        "That's a spicy take! Let me marinate on that for a second... 🌶️",
        "You're speaking my language! Just need a moment to translate... 🌐",
        "My digital brain is doing backflips over this! 🤸‍♂️",
        "That's got me all excited! Let me organize my thoughts... 🎉",
        "You've activated my curiosity circuits! Processing... 🔄",
        "That's a real brain-tickler! Let me think about that... 🤯",
        "My processors are doing the happy dance! Give me a sec... 💃",
        "You've got my attention! Let me put on my thinking cap... 🎩",
        "That's a real zinger! My circuits are buzzing... 🐝",
        "You're making my digital heart race! Let me catch my breath... 💓",
        "That's a real head-scratcher! Let me think about that... 🤔",
        "My virtual gears are turning! Processing your thought... ⚙️",
        "You've got my neurons firing! Let me organize my response... 🧠",
        "That's a real conversation starter! Let me add my two cents... 💰",
        "My digital mind is blown! Let me pick up the pieces... 💥"
      ];
      
      botResponseTimeoutRef.current = window.setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        addMessage(randomResponse, 'bot');
        setIsBotTyping(false);
      }, 1000);
    }
  };

  const clearMessages = () => {
    // Clear any pending bot response
    if (botResponseTimeoutRef.current) {
      clearTimeout(botResponseTimeoutRef.current);
      botResponseTimeoutRef.current = null;
    }
    setIsBotTyping(false);
    setMessages([]);
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        setActivePage,
        searchQuery,
        setSearchQuery,
        messages,
        addMessage,
        clearMessages,
        isChatOpen,
        setIsChatOpen,
        isBotTyping,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};