# Chatify - Interactive Chatbot Interface

A modern, responsive chatbot interface built with React, TypeScript, and Tailwind CSS. This project provides a clean and intuitive user experience for interacting with a chatbot.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Real-time chat interface
- 🔄 Chat history persistence
- ⏱️ Session timer
- 🔍 Search functionality
- 📱 Mobile-friendly navigation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot-interview
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Development Decisions

### State Management
- Used React Context API for global state management
- Implemented localStorage persistence for chat messages and active page
- This approach was chosen for its simplicity and built-in React support

### UI/UX Decisions
- Implemented a clean, minimal design using Tailwind CSS
- Used a fixed chat button in the bottom-right corner for easy access
- Added a mobile menu for better navigation on smaller screens
- Included a search bar in the navbar for content filtering

### Chat Functionality
- Implemented a session timer to track conversation duration
- Added a refresh button that:
  - Resets the conversation timer
  - Clears all chat messages
  - Provides a fresh start for new conversations
- Used localStorage to persist chat history between page refreshes

### Performance Considerations
- Implemented lazy loading for components where appropriate
- Used React.memo for performance optimization
- Minimized re-renders through proper state management

### Accessibility
- Added proper ARIA labels for interactive elements
- Ensured keyboard navigation support
- Maintained proper color contrast ratios

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── chatbot/       # Chatbot-specific components
│   └── ...           # Other components
├── context/           # React Context providers
├── hooks/            # React Hooks
└── App.tsx           # Main application component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 