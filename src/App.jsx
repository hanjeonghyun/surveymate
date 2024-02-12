import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Login from './pages/1. Home/Login'
import Auth from './pages/1. Home/Auth'
import AuthImg from './pages/1. Home/AuthImg'
import AuthRule from './pages/1. Home/AuthRule'
import PwFind from './pages/1. Home/PwFind';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/authimg" element={<AuthImg/>}/>
        <Route path="/authrule" element={<AuthRule/>}/>
        <Route path="/pwfind" element={<PwFind />}/>
      </Routes>
      <SideBar/>
    </>
  );
}

export default App;
