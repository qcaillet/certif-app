import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNav from './components/AdminNav/AdminNav';

function admin() {
  return (
    <div className="d-flex flex-fill align-items-center p-20">
      <AdminNav />
      <Outlet />
    </div>
  );
}

export default admin;
