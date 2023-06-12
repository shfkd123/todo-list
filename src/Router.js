import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 리스트페이지만 Nav확인 */}
        <Route path="/" element={<Nav />}>
          <Route path="/list" element={<List />} />
        </Route>
        {/* 나머지페이지는 Nav확인 안함 */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
