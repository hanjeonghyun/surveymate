import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Login from './pages/1. Home/Login'
import Auth from './pages/1. Home/Auth'
import AuthImg from './pages/1. Home/AuthImg'
import AuthRule from './pages/1. Home/AuthRule'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/authimg" element={<AuthImg/>}/>
        <Route path="/authrule" element={<AuthRule/>}/>
      </Routes>
  );
}

export default App;
