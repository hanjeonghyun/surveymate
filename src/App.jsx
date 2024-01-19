import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/1. Home/Login";
import SideBar from "./components/SideBar";
import SurveyResult from "./pages/2. Survey/SurveyResult";
import SurveyView from "./pages/2. Survey/Surveyview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/surveyresult" element={<SurveyResult />} />
        <Route path="/surveyview" element={<SurveyView />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
