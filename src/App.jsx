import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Survey from './pages/2.Survey/Survey'
import Market from './pages/3.Market/Market'
import SideBar from './components/SideBar';
import MarketView from './pages/3.Market/MarketView';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Market />} />
        <Route path='/market' element={<Survey />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/marketview1' element={<MarketView />} />
        <Route path='/marketview2' element={<MarketView />} />
      </Routes>
      <SideBar/>
    </>
  );
}

export default App;