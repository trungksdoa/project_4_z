import React, { useState, useMemo } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate
} from 'react-router-dom';
import { useCookies } from 'react-cookie';
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

import Sendemail from './Components/Login_register/Sendemail'
// function PrivateRoute({ children }) {
//     const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
//     const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
//     return auth ? children : <Navigate to="/" />;
// }

function ProtectLogin({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    return !auth ? children : <Navigate to="/" />;
}

function PrivateOutlet() {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    return auth ? <Outlet /> : <Navigate to="/" />;
}

const AppRouter = () => {
    return (
        <div id="tg-wrapper" className="tg-wrapper tg-haslayout">
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* <Route path="/" element={<Authsos />}></Authsos> */}
                    <Route path="/*" element={<Error_404 />} />

                    <Route exact path="/" element={<Home />} />

                    <Route path="/Login" element={
                        <ProtectLogin>
                            <Login />
                        </ProtectLogin>
                    } />

                    <Route path="/Register" element={
                        <ProtectLogin>
                            <Register />
                        </ProtectLogin>
                    } />
                    <Route path="/Sendmail/:userId/:userName" element={<Sendemail />} />
                    <Route path="/News" element={<News />} />

                    <Route path="/News/:id" element={<News_detail />} />

                    <Route path="/author" element={<Author />} />

                    <Route path="/author/:authorId/" element={<Author_detail />} />

                    <Route path="/Book/:id" element={<Book_detail />} />

                    <Route path="/Cart" element={<Cart />} />

                    <Route path="/Collection" element={<Collection />} />

                    <Route path="/Contact" element={<Contact />} />

                    {/* //need protect */}
                    <Route element={<PrivateOutlet />}>

                        <Route path="/Payment" element={<Payment />} />

                        <Route path="/Profile" element={<Profile />} />l

                        <Route path="/Profile/:page" element={<Profile />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;