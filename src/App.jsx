import React from "react";
import { Route, Routes } from "react-router-dom";

import MainL from "./pages/2.Survey/MainL";
import Main from "./pages/2.Survey/Main";
import SideBar from "./components/SideBar";
import SurveyResult from "./pages/2.Survey/SurveyResult";
import SurveyView from "./pages/2.Survey/SurveyView";
import Survey from "./pages/2.Survey/Survey";
import SurveyContent from "./pages/2.Survey/SurveyContent";
import SurveyLink from "./pages/2.Survey/SurveyLink";
import SurveyPoint from "./pages/2.Survey/SurveyPoint";
import SurveyFix from './pages/2.Survey/SurveyFix';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainL/>}/>
        <Route path='/main'element={<Main />}/>
        <Route path="/survey" element={<Survey />} />
        <Route path="/surveyresult" element={<SurveyResult />} />
        <Route path="/surveyview1" element={<SurveyView />} />
        <Route path="/surveyview2" element={<SurveyView />} />
        <Route path="/surveycontent" element={<SurveyContent />} />
        <Route path="/surveypoint" element={<SurveyPoint/>}/>
        <Route path="/surveylink" element={<SurveyLink/>}/>
        <Route path='/surveyfix' element={<SurveyFix />}/>
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
