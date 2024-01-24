import React from "react";
import { Route, Routes } from "react-router-dom";

import SurveyContent from "./pages/2.Survey/SurveyContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SurveyContent />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
