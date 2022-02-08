import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';

import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';

import Asidebar from './Components/Sidebar/sidebar.jsx';

import Navbar from './Components/Navbar/navbar.jsx';

import Footer from './Components/Footer/Footer.jsx'

import Customers from './Components/Customer/index.jsx';

import Customer_detail from './Components/Customer/Customer_detail.jsx'

import Home from "./Components/Dashboard/dashboard.jsx";

import Admin from "./Components/Admin/index.jsx";

import Admin_Create_form from "./Components/Admin/Create_page.jsx";

import Admin_edit_form from "./Components/Admin/Edit_page.jsx";

import Order from './Components/Order/index.jsx';

import Author from './Components/Author/index.jsx';

import Create_authors_form from './Components/Author/Form_create_page.jsx';

import Edit_author_form from './Components/Author/Form_edit_page.jsx';

import Login from './Components/Login/Login.jsx';

import Reviews from './Components/Reviews/Reviews.jsx'

import Reply from './Components/Reviews/Reply.jsx';

import Setting from './Components/Setting/Setting.jsx';
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
function Voucher() {
  return (
    <div className="container-fluid py-4"><h3>Voucher</h3></div >
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

function RoleOwnerOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}
function RolesProductOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Product Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}

function RolesOrderOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Order Management", "Customers Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}

function RolesBannerOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Banner Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}

function RolesAuthorOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Author Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}

function RolesCustomersOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Customers Management", "Reviews Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
  }
  if (isAdminA) {
    return <Outlet />;
  } else {
    return <PermissionError />;
  }
}

function RolesReviewsOutlet() {
  const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
  const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
  let isAdminA;
  if (auth) {
    const RoleA_Require_admin = ["Reviews Management", "Customers Management", "owner"];
    isAdminA = findOne(RoleA_Require_admin, cookies.loggin.roles);
    console.log(cookies.loggin.roles, isAdminA)
  }
  if (isAdminA) {
    console.log("true")
    return <Outlet />;
  } else {
    console.log("false")
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
            {/* //Roles customer */}
            <Route element={<RolesCustomersOutlet />}>
              <Route path="/admin/customer" element={<Customers />} />
              <Route path="/admin/wishlist/:id" element={<Wishlist />} />
            </Route>

            <Route element={<RolesBannerOutlet />}>
              <Route path="/admin/banner" element={<Banner />} />
            </Route>

            <Route element={<RolesOrderOutlet />}>
              <Route path="/admin/order" element={<Order />} />
              <Route path="/admin/Voucher" element={<Voucher />} />
            </Route>

            <Route element={<RolesProductOutlet />}>
              <Route path="/admin/book" element={<Books />} />
              <Route path="/admin/Catagorys_book" element={<Catagorys_book />} />
            </Route>

            <Route path="/admin/Catagorys_news" element={<Catagorys_News />} />
            <Route path="/admin/News" element={<News />} />

            <Route element={<RolesAuthorOutlet />}>
              <Route path="/admin/author" element={<Author />} />
              <Route path="/admin/author/create" element={<Create_authors_form />} />
              <Route path="/admin/author/edit/:id" element={<Edit_author_form />} />
            </Route>

            <Route element={<RolesReviewsOutlet />}>
              <Route path="/admin/Reviews" element={<Reviews />} />
              <Route path="/admin/Reviews/reply/:id" element={<Reply />} />
            </Route>

            {/* //Roles owner */}
            <Route element={<RoleOwnerOutlet />}>
              <Route path="/owner/admin" element={<Admin />} />
              <Route path="/owner/admin/create/" element={<Admin_Create_form />} />
              <Route path="/owner/admin/:id" element={<Admin_edit_form />} />
              <Route path="/admin/setting" element={<Setting />} />
            </Route>
          </Route>
          <Route path="/dashboard/login" element={
            <ProtectLogin>
              <Login />
            </ProtectLogin>
          } />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </main>

    </Router>
  </React.StrictMode >, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
