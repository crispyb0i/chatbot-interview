import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Layout from './components/Layout';

function App() {
  return (
    <AppContextProvider>
      <Layout />
    </AppContextProvider>
  );
}

export default App;