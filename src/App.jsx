import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/1. Home/Login";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
