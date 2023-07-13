import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminRecipes() {
  return (
    <>
      <div>AdminRecipes</div> <Outlet />
    </>
  );
}

export default AdminRecipes;
