import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';

import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

import Asidebar from './Components/Sidebar/sidebar.jsx';

import Navbar from './Components/Navbar/navbar.jsx';

import Footer from './Components/Footer/Footer.jsx'

import Customers from './Components/Customer/index.jsx';

import Home from "./Components/Dashboard/dashboard.jsx";

import Admin from "./Components/Admin/index.jsx";

import Order from './Components/Order/index.jsx';

import Author from './Components/Author/index.jsx';
import Create_authors_form from './Components/Author/Create_form.jsx';
import Edit_author_form from './Components/Author/Edit_form.jsx';
import Login from './Components/Login/Login.jsx';
import Reviews from './Components/Reviews/Reviews.jsx'
import { useCookies } from 'react-cookie';

import Auth from './api/CustomerApi';

import './index.css'
function Banner() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const HandleDelete = async () => {
    const res = await Auth.getAll(cookies.loggin.roles);
    console.log(res);
    if (res.code !== 200) {
      alert(res.msg);
    } else {
      //
      alert("Deleted");
    }
  }
  // return (<PermissionError/>)
  return (
    <>
      <h3>Banner page</h3>

      <button onClick={HandleDelete}>delete</button>
    </>
  )
}
function Setting() {
  return (<h3>setting page</h3>)
}
function Wishlist() {
  return (<h3>Wishlist page</h3>)
}
function Catagorys_book() {
  return (<h3>Catagorys_book page</h3>)
}
function Catagorys_News() {
  return (<h3>Catagorys_News page</h3>)
}
function News() {
  return (<h3>News</h3>)
}
function Books() {
  return (
    <div className="container-fluid py-4"><h3>Books</h3></div >
  )
}
function Page404() {
  return (
    <div className="container-fluid py-4"><h3 style={{ textAlign: 'center', margin: "60px" }}>404 page Not Found</h3></div >
  )
}

function PermissionError() {
  return (
    <div className="container-fluid py-4"><h3 style={{ textAlign: 'center', margin: "60px" }}>Access is denied ! <br></br> No permission to access </h3></div >
  )
}

const findOne = (haystack, arr) => {
  return arr.some(v => haystack.includes(v));
};

function ProtectLogin({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  return !auth ? children : <Navigate to="/" />;
}

function PrivateOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  return auth ? <Outlet /> : <Navigate to="/dashboard/login" />;
}

function RoleAOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const RoleA_Require_admin = ["owner"];
  const isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}
//Đặt trong   <div className="container-fluid py-4">nội dung</div> cho nó căn giữa
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Asidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <Routes>
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
            <Route exact path="/admin/dashboard" element={<Home />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/setting" element={<Setting />} />
            <Route path="/admin/banner" element={<Banner />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/book" element={<Books />} />
            <Route path="/admin/Catagorys_book" element={<Catagorys_book />} />
            <Route path="/admin/Catagorys_news" element={<Catagorys_News />} />
            <Route path="/admin/News" element={<News />} />
            <Route path="/admin/wishlist/:id" element={<Wishlist />} />
            <Route element={<RoleAOutlet />}>
              <Route path="/owner/admin" element={<Admin />} />
            </Route>
          </Route>
          <Route path="/dashboard/login" element={
            <ProtectLogin>
              <Login />
            </ProtectLogin>
          } />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/admin/author" element={<Author />} />
          <Route path="/admin/author/create" element={<Create_authors_form />} />
          <Route path="/admin/author/edit" element={<Edit_author_form />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  </React.StrictMode >, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
