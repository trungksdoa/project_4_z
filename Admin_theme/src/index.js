import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Routes } from 'react-router-dom';

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
import './index.css'
function Login() {
  return (<h3>Login page</h3>)
}
function Banner() {
  return (<h3>Banner page</h3>)
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
    <div className="container-fluid py-4"><h3 style={{textAlign: 'center',margin:"60px"}}>404 page Not Found</h3></div >
  )
}
//Đặt trong   <div className="container-fluid py-4">nội dung</div> cho nó căn giữa
ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Asidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <Routes>
          <Route path="/admin/dashboard" element={<Home />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/setting" element={<Setting />} />
          <Route path="/admin/banner" element={<Banner />} />
          <Route path="/admin/order" element={<Order />} />
          <Route path="/admin/author" element={<Author />} />
          <Route path="/admin/author/create" element={<Create_authors_form />} />
          <Route path="/admin/author/edit" element={<Edit_author_form />} />
          <Route path="/admin/book" element={<Books />} />
          <Route path="/admin/Catagorys_book" element={<Catagorys_book />} />
          <Route path="/admin/Catagorys_news" element={<Catagorys_News />} />
          <Route path="/admin/News" element={<News />} />
          <Route path="/admin/wishlist/:id" element={<Wishlist />} />
          <Route path="/owner/admin" element={<Admin />} />
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/*" element={<Page404 />} />
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
