import React from 'react';
import { Link, NavLink } from 'react-router-dom'
const notfound = () => {
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="/images/parallax/bgparallax-07.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>404 Error</h1>
                                <ol className="tg-breadcrumb">
                                    <li><a href="/">home</a></li>
                                    <li className="tg-active">404 Error</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*************************************
                  Inner Banner End
          **************************************/}
            {/*************************************
                  Main Start
          **************************************/}
            <main id="tg-main" className="tg-main tg-haslayout">
                {/*************************************
                      404 Error Start
              **************************************/}
                <div className="tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="tg-404error">
                                <div className="col-xs-12 col-sm-12 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
                                    <div className="tg-404errorcontent">
                                        <h2>Ooops! Could Not Find It</h2>
                                        <span>404</span>
                                    </div>
                                    <div className="tg-gobackhome" style={{ float: "none", textAlign: "center", fontSize: 18, fontFamily: "fantasy" }}>
                                        <a href='/' >Back to home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
                      404 Error End
              **************************************/}
            </main>
            {/*************************************
                  Main End
          **************************************/}
        </>
    );
}
export default notfound;