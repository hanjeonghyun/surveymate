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

function App() {
  return (
    <>
      <Routes>
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
