import React from 'react';
import { Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <h1>hello</h1>
      <Outlet />
    </>
  );
};

export default Nav;
