import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AdminRecipesNav from './components/AdminRecipesNav/AdminRecipesNav';
import { useLocation } from 'react-router-dom';

function AdminRecipes() {
  const { key } = useLocation();
  return (
    <div className="d-flex flex-fill flex-column">
      <h4 className="mb-20">Gestion des recttes</h4>
      <div className="d-flex flex-column flex-fill">
        <AdminRecipesNav />
        <div className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet key={key} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminRecipes;
