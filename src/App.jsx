import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;