import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import { useCookies } from 'react-cookie';
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
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="#!">All Categories</a>
                                        <div className="mega-menu">
                                            <ul className="tg-themetabnav" role="tablist">
                                                <li role="presentation" className="active">
                                                    <a href="#artandphotography" aria-controls="artandphotography" role="tab" data-toggle="tab">Art &amp; Photography</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#biography" aria-controls="biography" role="tab" data-toggle="tab">Biography</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#childrensbook" aria-controls="childrensbook" role="tab" data-toggle="tab">Children’s Book</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#craftandhobbies" aria-controls="craftandhobbies" role="tab" data-toggle="tab">Craft &amp; Hobbies</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#crimethriller" aria-controls="crimethriller" role="tab" data-toggle="tab">Crime &amp; Thriller</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#fantasyhorror" aria-controls="fantasyhorror" role="tab" data-toggle="tab">Fantasy &amp; Horror</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#fiction" aria-controls="fiction" role="tab" data-toggle="tab">Fiction</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#fooddrink" aria-controls="fooddrink" role="tab" data-toggle="tab">Food &amp; Drink</a>
                                                </li><li role="presentation">
                                                    <a href="#graphicanimemanga" aria-controls="graphicanimemanga" role="tab" data-toggle="tab">Graphic, Anime &amp; Manga</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#sciencefiction" aria-controls="sciencefiction" role="tab" data-toggle="tab">Science Fiction</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
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
                                    <li><a href="contactus.html">About us</a></li>
                                    {/* <li className="menu-item-has-children"> */}
                                    <li>
                                        {/* <li><NavLink to="/Login">Log in</NavLink></li>
                                                    <li><NavLink to="/Register">Register</NavLink></li> */}
                                        {/* <ul className="sub-menu">
                                                    <li></li>
                                                </ul> */}
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
                                            <a href={"/Profile/" + cookies.loggin.userID}>Profile</a>
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