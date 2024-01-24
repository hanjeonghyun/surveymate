import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/2.Survey/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
