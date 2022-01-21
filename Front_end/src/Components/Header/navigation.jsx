import React from 'react';

import { Link, useSearchParams } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

const NavigationBar = () => {
    const [item, setItem] = useLocalStorage('user', null);
    let status = true;
    if (item == "undefined" || item == undefined) {
        status = false;
    }
    console.log(status);
    function Account(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <ul className="sub-menu">
                    <li><NavLink to="/Profile">Profile</NavLink></li>
                    <li><a onClick={localStorage.removeItem("user")} style={{ cursor: "pointer" }}>Log out</a></li>
                </ul>
            );
        }
        return (
            <ul className="sub-menu">
                <li><NavLink to="/Login">Log in</NavLink></li>
                <li><NavLink to="/Register">Register</NavLink></li>
            </ul>
        );
    }
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
                                            <div className="tab-content tg-themetabcontent">
                                                <div role="tabpanel" className="tab-pane active" id="artandphotography">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="biography">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="childrensbook">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="craftandhobbies">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="crimethriller">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="fantasyhorror">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="fiction">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="fooddrink">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="graphicanimemanga">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="sciencefiction">
                                                    <ul>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>History</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Veniam quis nostrud</a></li>
                                                                <li><a href="products.html">Exercitation</a></li>
                                                                <li><a href="products.html">Laboris nisi ut aliuip</a></li>
                                                                <li><a href="products.html">Commodo conseat</a></li>
                                                                <li><a href="products.html">Duis aute irure</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Architecture</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Tough As Nails</a></li>
                                                                <li><a href="products.html">Pro Grease Monkey</a></li>
                                                                <li><a href="products.html">Building Memories</a></li>
                                                                <li><a href="products.html">Bulldozer Boyz</a></li>
                                                                <li><a href="products.html">Build Or Leave On Us</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                        <li>
                                                            <div className="tg-linkstitle">
                                                                <h2>Art Forms</h2>
                                                            </div>
                                                            <ul>
                                                                <li><a href="products.html">Consectetur adipisicing</a></li>
                                                                <li><a href="products.html">Aelit sed do eiusmod</a></li>
                                                                <li><a href="products.html">Tempor incididunt labore</a></li>
                                                                <li><a href="products.html">Dolore magna aliqua</a></li>
                                                                <li><a href="products.html">Ut enim ad minim</a></li>
                                                            </ul>
                                                            <a className="tg-btnviewall" href="products.html">View All</a>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        <li>
                                                            <figure><img src="images/img-01.png" alt="image description" /></figure>
                                                            <div className="tg-textbox">
                                                                <h3>More Than<span>12,0657,53</span>Books Collection</h3>
                                                                <div className="tg-description">
                                                                    <p>Consectetur adipisicing elit sed doe eiusmod tempor incididunt laebore toloregna aliqua enim.</p>
                                                                </div>
                                                                <a className="tg-btn" href="products.html">view all</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="author_page">
                                        <NavLink to="/author">Authors</NavLink>
                                        {/* <Link to="/author">Authors</Link> */}
                                    </li>
                                    <li><NavLink to="/Collection">Collection</NavLink></li>
                                    <li>
                                        <NavLink to="/News">News</NavLink>
                                        {/* <a href="#!">News</a> */}
                                    </li>
                                    <li>
                                        <NavLink to="/Contact">Contact</NavLink>
                                    </li>
                                    <li><a href="contactus.html">About us</a></li>
                                    <li className="menu-item-has-children">
                                        <a>Account</a>
                                        {/* <ul className="sub-menu">
                                            <li><NavLink to="/Login">Log in</NavLink></li>
                                            <li><NavLink to="/Register">Register</NavLink></li>
                                        </ul> */}
                                        <Account isLoggedIn={status} />
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