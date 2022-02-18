import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Header from './Components/Header/Header.jsx';

import Footer from './Components/Footer/Footer.jsx';

import Home from './Components/Home/Home.jsx';

import Author from './Components/Author/index.jsx';

import Author_detail from './Components/Author/Author_detail/author_detail.jsx';

import Error_404 from './Components/Error/404.jsx';

import Login from './Components/Login_register/Logins.jsx';

import Register from './Components/Login_register/Register.jsx';

import Book_detail from './Components/Book/Book_detail.jsx';

import Contact from './Components/Contact/Contact.jsx';

import Cart from './Components/Cart/Cart.jsx';

import Profile from './Components/Profiles/index.jsx';

import Payment from './Components/Payment/Payment.jsx';

import Collection from './Components/Collection/Collection.jsx';

import Getbook from './Components/Collection/Getbook.jsx';


import ForgetPassword from './Components/Login_register/Forget_password.jsx';

import Overview from './Components/Profiles/Overview.jsx';

import Order_tracking from './Components/Profiles/Order_tracking.jsx';

import Wishlist from './Components/Profiles/Wishlist.jsx';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Checkout from './Components/Order/Checkout.jsx';

function ProtectLogin({ children }) {
	const [ cookies, setCookie, removeCookie ] = useCookies([ 'loggin' ]);
	const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
	return !auth ? children : <Navigate to="/" />;
}

function PrivateOutlet() {
	const [ cookies, setCookie, removeCookie ] = useCookies([ 'loggin' ]);
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

                    <Route path="/author" element={<Author />} />

                    <Route path="/author/:authorId" element={<Author_detail />} />

                    <Route path="/Book/:id" element={<Book_detail />} />

                    <Route path="/Cart" element={<Cart />} />

                    <Route path="/Collection" element={<Collection />} />

                    <Route path="/Contact" element={<Contact />} />

                    <Route path="/Forgetpassword" element={<ForgetPassword />} />

                    {/* //need protect */}
                    <Route element={<PrivateOutlet />}>
                         <Route path="/Order/Checkout" element={<Checkout/>}>
                            
                        </Route>

                        {/* <Route path="/Checkout" element={<Checkout />} /> */}
                        <Route path="/Payment" element={<Payment />} />

                        <Route path="/Profile/*" element={<Profile/>}>
                            <Route path="setting" element={<Overview />} />

                            <Route path="Order" element={<Order_tracking />} />

                            <Route path="Wishlist" element={<Wishlist />} />
                        </Route>


                    </Route>
                </Routes>
                <ToastContainer />
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;
