import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

import Home from "../Components/Home/Home.jsx";

import Author from "../Components/Author/Author.jsx";

import Logins from "../Components/Login_register/Logins.jsx";

import Error_404 from "../Components/Error/404.jsx";

import Profile from '../Components/Profiles/index.jsx';
import Edits from '../Components/Profiles/page1.jsx';
import Order_history from '../Components/Profiles/page2.jsx';
import Order_tracking from '../Components/Profiles/page3.jsx';
const Roles_list = localStorage.getItem("rolse");



function checkUser(roles) {
  if (!roles) return false;
  if (roles.includes("Role1")) return true;
}
const Routers = () => {
  return (
    <div>
      <Router>
        {/* //Customer */}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Logins></Logins>} />
          <Route path="/404" element={<Error_404></Error_404>} />
          <Route path="/author" element={<Author></Author>} />

          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/profile/Edit" element={<Edits></Edits>} />
          <Route path="/profile/Order_history" element={<Order_history></Order_history>} />
          <Route path="/profile/Order_tracking" element={<Order_tracking></Order_tracking>} />

          <Route path="/check" element={checkUser(Roles_list) ? <Navigate to="/404" /> : <Navigate to="/author" />} />
        </Routes>
       
      </Router>
    </div>

  );
}

// return checkUser(Roles_list) ? <Gta /> : <Gunny />;
export default Routers;
