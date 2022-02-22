import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useCookies } from 'react-cookie';
import Autocomplete from '@mui/material/Autocomplete';

const NavigationBar = () => {
    const redirect = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['loggin'])
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const HandleLogout = () => {
        // store the user in localStorage
        removeCookie('loggin', { expires: "Thu, 01 Jan 1970 00:00:00 UTC", path: '/' });
        // redirect('/')
        // alert("Ok")
    };
    return (
        <div className="tg-navigationarea">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <nav id="tg-nav" className="tg-nav">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                            </div>
                            <div id="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                <ul className="web_navigation">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="author_page">
                                        <a href="/author">Authors</a>
                                        {/* <Link to="/author">Authors</Link> */}
                                    </li>
                                    <li><a href="/Collection">Collection</a></li>
                                    <li>
                                        <a href="/Contact">Contact</a>
                                    </li>
                                    <li>
                                        {
                                            auth ? (
                                                <a style={{
                                                    cursor: 'pointer',
                                                    background: '#66ff66',
                                                    color: "#000"
                                                }} href={'/Login'} onClick={HandleLogout}>Log out</a>
                                            ) : (
                                                <a style={{
                                                    cursor: 'pointer',
                                                    color: "#000"
                                                }} href="/Login">Log in</a>

                                            )
                                        }
                                    </li>
                                    <li>
                                        {auth && (
                                            <a href={"/Profile/setting"}>Profile</a>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavigationBar;