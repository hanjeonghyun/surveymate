import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import MyList from "./pages/4. My/MyList";
import My from "./pages/4. My/My";
import MyView from "./pages/4. My/MyView";
import MyPassword from "./pages/4. My/MyPassword";
import MyPoint from "./pages/4. My/MyPoint";
import MyPage from "./pages/4. My/MyPage";
import MyProfileFix from "./pages/4. My/MyProfileFix";
import MyProfile from "./pages/4. My/MyProfile";
import MyOut from "./pages/4. My/MyOut";
import Login from "./pages/1.Home/Login";
import Auth from "./pages/1.Home/Auth";
import AuthImg from "./pages/1.Home/AuthImg";
import AuthRule from "./pages/1.Home/AuthRule";
import PwFind from "./pages/1.Home/PwFind";
import Main from "./pages/2.Survey/Main";
import MainL from "./pages/2.Survey/MainL";
import SurveyResult from "./pages/2.Survey/SurveyResult";
import SurveyView from "./pages/2.Survey/SurveyView";
import Survey from "./pages/2.Survey/Survey";
import SurveyContent from "./pages/2.Survey/SurveyContent";
import SurveyLink from "./pages/2.Survey/SurveyLink";
import SurveyPoint from "./pages/2.Survey/SurveyPoint";
import SurveyFix from "./pages/2.Survey/SurveyFix";
import Market from "./pages/3.Market/Market";
import MarketView from "./pages/3.Market/MarketView";
import MarketContent from "./pages/3.Market/MarketContent";
import MarketPoint from "./pages/3.Market/MarketPoint";
import MarketPointComplete from "./pages/3.Market/MarketPointComplete";
import MarketFix from "./pages/3.Market/MarketFix";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<MainL />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/auth'
          element={<Auth />}
        />
        <Route
          path='/authimg'
          element={<AuthImg />}
        />
        <Route
          path='/authrule'
          element={<AuthRule />}
        />
        <Route
          path='/pwfind'
          element={<PwFind />}
        />
        <Route
          path='/main'
          element={<Main />}
        />
        <Route
          path='/survey'
          element={<Survey />}
        />
        <Route
          path='/surveyresult'
          element={<SurveyResult />}
        />
        <Route
          path='/surveyview1'
          element={<SurveyView />}
        />
        <Route
          path='/surveyview2'
          element={<SurveyView />}
        />
        <Route
          path='/surveycontent'
          element={<SurveyContent />}
        />
        <Route
          path='/surveypoint'
          element={<SurveyPoint />}
        />
        <Route
          path='/surveylink'
          element={<SurveyLink />}
        />
        <Route
          path='/surveyfix'
          element={<SurveyFix />}
        />
        <Route
          path='/market'
          element={<Survey />}
        />
        <Route
          path='/survey'
          element={<Survey />}
        />
        <Route
          path='/marketview1'
          element={<MarketView />}
        />
        <Route
          path='/marketview2'
          element={<MarketView />}
        />
        <Route
          path='/marketpoint'
          element={<MarketPoint />}
        />
        <Route
          path='/marketpointcomplete'
          element={<MarketPointComplete />}
        />
        <Route
          path='/marketfix'
          element={<MarketFix />}
        />
        <Route
          path='/marketcontent'
          element={<MarketContent />}
        />
        <Route
          path='/'
          element={<My />}
        />
        <Route
          path='/mylist1'
          element={<MyList />}
        />
        <Route
          path='/mylist2'
          element={<MyList />}
        />
        <Route
          path='/mylist3'
          element={<MyList />}
        />
        <Route
          path='/mylist4'
          element={<MyList />}
        />
        <Route
          path='/myview'
          element={<MyView />}
        />
        <Route
          path='/mypassword'
          element={<MyPassword />}
        />
        <Route
          path='/mypointtotal'
          element={<MyPoint />}
        />
        <Route
          path='/mypointplus'
          element={<MyPoint />}
        />
        <Route
          path='/mypointminus'
          element={<MyPoint />}
        />
        <Route
          path='/mypage'
          element={<MyPage />}
        />
        <Route
          path='/myprofile'
          element={<MyProfile />}
        />
        <Route
          path='/myprofilefix'
          element={<MyProfileFix />}
        />
        <Route
          path='/myout'
          element={<MyOut />}
        />
      </Routes>
      <SideBar />
    </>
  );
}

export default App;
