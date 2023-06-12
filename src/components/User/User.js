import React from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
  return (
    <>
      <h1>helloUser</h1>
      <Outlet />
    </>
  );
};

export default User;
