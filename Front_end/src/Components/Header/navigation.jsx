import React from 'react';


const navigationBar = () => {
    //Logic here
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
                                <ul>
                                    <li className="menu-item-has-children menu-item-has-mega-menu">
                                        <a href="javascript:void(0);">All Categories</a>
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
                                    <li className="menu-item-has-children current-menu-item">
                                        <a href="javascript:void(0);">Home</a>
                                        <ul className="sub-menu">
                                            <li className="current-menu-item"><a href="index-2.html">Home V one</a></li>
                                            <li><a href="indexv2.html">Home V two</a></li>
                                            <li><a href="indexv3.html">Home V three</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="javascript:void(0);">Authors</a>
                                        <ul className="sub-menu">
                                            <li><a href="authors.html">Authors</a></li>
                                            <li><a href="authordetail.html">Author Detail</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="products.html">Best Selling</a></li>
                                    <li><a href="products.html">Weekly Sale</a></li>
                                    <li className="menu-item-has-children">
                                        <a href="javascript:void(0);">Latest News</a>
                                        <ul className="sub-menu">
                                            <li><a href="newslist.html">News List</a></li>
                                            <li><a href="newsgrid.html">News Grid</a></li>
                                            <li><a href="newsdetail.html">News Detail</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contactus.html">Contact</a></li>
                                    <li className="menu-item-has-children current-menu-item">
                                        <a href="javascript:void(0);"><i className="icon-menu" /></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="aboutus.html">Products</a>
                                                <ul className="sub-menu">
                                                    <li><a href="products.html">Products</a></li>
                                                    <li><a href="productdetail.html">Product Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="aboutus.html">About Us</a></li>
                                            <li><a href="404error.html">404 Error</a></li>
                                            <li><a href="comingsoon.html">Coming Soon</a></li>
                                        </ul>
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
export default navigationBar;