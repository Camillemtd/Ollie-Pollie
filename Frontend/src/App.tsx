import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharmScreen from './pages/CharmScreen/CharmScreen'; 
import './App.css';

import PublicRoute from './pages/PublicRoute'

function App() {

  const [showCharmScreen, setShowCharmScreen] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setShowCharmScreen(false);
  }, 3000); 
}, []);


return (
  <div className='bg-amber-50 min-h-screen'>
    <BrowserRouter>
      <Routes>
        {showCharmScreen ? (
          <Route path='/*' element={<CharmScreen />} />
        ) : (
          <Route path='/*' element={<PublicRoute />} />
        )}
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App
