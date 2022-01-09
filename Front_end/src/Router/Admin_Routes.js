import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';


import Error_404 from "../Components/Error/404.jsx";

import Admin_dashboard from '../Admin_Component/Dashboard/index.jsx';


const Roles_list = localStorage.getItem("rolse");



function checkUser(roles) {
  if (!roles) return false;
  if (roles.includes("Role1")) return true;
}
const Admin_Routes = () => {
  return (
    <div>
      <Router>
        <Routes>
        
        </Routes>
      </Router>
    </div>

  );
}

// return checkUser(Roles_list) ? <Gta /> : <Gunny />;
export default Admin_Routes;
