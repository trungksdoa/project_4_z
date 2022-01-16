import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
// import {BrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import Header from './Components/Header/Header.jsx';

import Footer from './Components/Footer/Footer.jsx';

import Home from "./Components/Home/Home.jsx";

import Author from "./Components/Author/index.jsx";

import Author_detail from './Components/Author/Author_detail/author_detail.jsx'

import Error_404 from "./Components/Error/404.jsx";

import Login from "./Components/Login_register/Logins.jsx";

import Register from "./Components/Login_register/Register.jsx";

import Book_detail from "./Components/Book/Book_detail.jsx";

import Contact from "./Components/Contact/Contact.jsx";

import Cart from "./Components/Cart/Cart.jsx";

import Profile from "./Components/Profiles/index.jsx";

import Payment from "./Components/Payment/Payment.jsx";

import Collection from './Components/Collection/Collection.jsx';

import News from './Components/News/News.jsx';
import News_detail from './Components/News/News_detail';
ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <div id="tg-wrapper" class="tg-wrapper tg-haslayout">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Authsos />}></Authsos> */}
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/author" element={<Author />} />
          <Route path="/author/:authorId/" element={<Author_detail />} />
          <Route path="/Book/:id" element={<Book_detail />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/News" element={<News />} />
          <Route path="/News/:id" element={<News_detail />} />
          <Route path="/Profile/:page" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
