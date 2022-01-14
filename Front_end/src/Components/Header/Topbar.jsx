import React from 'react';

const topbar = () => {
    //Logic here
    return (
        <div className="tg-topbar">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul className="tg-addnav">
                            <li>
                                <a href="#!">
                                    <i className="icon-envelope" />
                                    <em>Contact</em>
                                </a>
                            </li>
                        </ul>
                        <div className="tg-userlogin">
                            <figure><a href="#!"><img src="images/users/img-01.jpg" alt="image description" /></a></figure>
                            <span>Hi, boss</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default topbar;