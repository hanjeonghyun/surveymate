import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';

import My from './pages/4. My/My'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<My />} />
      </Routes>
      <SideBar/>
    </>
  );
}

export default App;