import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Market from './pages/3.Market/Market'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Market />} />
      </Routes>
  );
}

export default App;