import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
