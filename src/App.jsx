import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/1. Home/Login";
import AuthRule from "./pages/1. Home/AuthRule";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/rule" element={<AuthRule />} />
    </Routes>
  );
}

export default App;
