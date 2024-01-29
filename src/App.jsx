import React from 'react';
import { Route, Routes } from 'react-router-dom';

import My from './pages/4. My/My'

function App() {
  return (
      <Routes>
        <Route path='/' element={<My />} />
      </Routes>
  );
}

export default App;