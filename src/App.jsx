import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/1. Home/Login";
import SideBar from "./components/SideBar";
import SurveyResult from "./pages/2. Survey/SurveyResult";
import SurveyView from "./pages/2. Survey/SurveyView";
import SurveyMain from "./pages/2. Survey/SurveyMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/surveyresult" element={<SurveyResult />} />
        <Route path="/surveyview1" element={<SurveyView />} />
        <Route path="/surveyview2" element={<SurveyView />} />
        <Route path="/survey" element={<SurveyMain />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
