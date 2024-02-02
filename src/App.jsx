import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';

import MyList from './pages/4. My/MyList';
import My from './pages/4. My/My'
import MyView from './pages/4. My/MyView';
import MyPassword from './pages/4. My/MyPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<My />} />
        <Route path='/mylist1' element={<MyList />} />
        <Route path='/mylist2' element={<MyList />} />
        <Route path='/mylist3' element={<MyList />} />
        <Route path='/mylist4' element={<MyList />} />
        <Route path='/myview' element={<MyView/>}/>
        <Route path='/mypassword' element={<MyPassword/>}/>
      </Routes>
      <SideBar/>
    </>
  );
}

export default App;