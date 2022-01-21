
import React from 'react';

import Author_dom from './authors.jsx';

import Pb_author from '../Home/PB_Author.jsx';

import Tesminal from '../Home/Testimonials.jsx'

import { useEffect, useState } from "react";



import { store, useGlobalState } from 'state-pool';

const Author_page = () => {

  const Roles_list = localStorage.getItem("rolse");

  // const params = window.location.pathname;
  // const [AuthorsPage, setAuthorsPage] = useState("/author");
  // useEffect(() => {
  //   setAuthorsPage(params);
  //   console.log(AuthorsPage);
  // }, [AuthorsPage])

  return (
    <>
      <title>Author</title>

      {/*************************************
                 Inner Banner Start
         **************************************/}
      <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="tg-innerbannercontent">
                <h1>Authors</h1>
                <ol className="tg-breadcrumb">
                  <li><a href="#;">home</a></li>
                  <li className="tg-active">Authors</li>
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
        {/* ************************************
                     Authors Start
             **************************************/}
        {<Author_dom></Author_dom>}
        {/*************************************
                     Authors End
             **************************************/}
        {/*************************************
                     Testimonials Start
             **************************************/}
        {<Tesminal></Tesminal>}
        {/*************************************
                     Testimonials End
             **************************************/}
        {/*************************************
                     Picked By Author Start
             **************************************/}
      </main>
      {/*************************************
                 Main End
         **************************************/}
    </>
  );
}

export default Author_page