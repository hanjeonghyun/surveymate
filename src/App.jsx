import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from './pages/1.Home/Login'
import Auth from './pages/1.Home/Auth'
import AuthImg from './pages/1.Home/AuthImg'
import AuthRule from './pages/1.Home/AuthRule'
import PwFind from './pages/1.Home/PwFind';
import Main from "./pages/2.Survey/Main";
import SideBar from "./components/SideBar";
import SurveyResult from "./pages/2.Survey/SurveyResult";
import SurveyView from "./pages/2.Survey/SurveyView";
import Survey from "./pages/2.Survey/Survey";
import SurveyContent from "./pages/2.Survey/SurveyContent";
import SurveyLink from "./pages/2.Survey/SurveyLink";
import SurveyPoint from "./pages/2.Survey/SurveyPoint"
import Market from './pages/3.Market/Market'
import SideBar from './components/SideBar';
import MarketView from './pages/3.Market/MarketView';
import MarketContent from './pages/3.Market/MarketContent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/authimg" element={<AuthImg/>}/>
        <Route path="/authrule" element={<AuthRule/>}/>
        <Route path="/pwfind" element={<PwFind />}/>
        <Route path='/main'element={<Main />}/>
        <Route path="/survey" element={<Survey />} />
        <Route path="/surveyresult" element={<SurveyResult />} />
        <Route path="/surveyview1" element={<SurveyView />} />
        <Route path="/surveyview2" element={<SurveyView />} />
        <Route path="/surveycontent" element={<SurveyContent />} />
        <Route path="/surveypoint" element={<SurveyPoint/>}/>
        <Route path="/surveylink" element={<SurveyLink/>}/>
        <Route path='/' element={<Market />} />
        <Route path='/market' element={<Survey />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/marketview1' element={<MarketView />} />
        <Route path='/marketview2' element={<MarketView />} />
        <Route path='/marketcontent' element={<MarketContent />} />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;