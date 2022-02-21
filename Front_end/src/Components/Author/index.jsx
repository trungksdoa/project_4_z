
import React from 'react';

import Author_dom from './authors.jsx';

import { useEffect, useState } from "react";

import AuthorAPU from '../../api/Author';

import Pagination from '../Pagination/pagination'

const Author_page = () => {
  const [data, setData] = useState([]);

  // const params = window.location.pathname;
  async function Fetchdata() {
    await AuthorAPU.FindALl().then(result => {
      setData(result.data)
    }).catch(err => {
      alert(err.msg)
    })
  }
  // const [AuthorsPage, setAuthorsPage] = useState("/author");
  useEffect(() => {
    Fetchdata();
  }, [])
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const itemOfLast = currentPage * itemsPerPage;
  const itemOfFirst = itemOfLast - itemsPerPage;
  const currentItem = data.slice(itemOfFirst, itemOfLast)


  const paginate = page => {
    setCurrentPage(page)
  }
  return (
    <>
      <title>Author</title>

      {/*************************************
                 Inner Banner Start
         **************************************/}
      <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src={"http://localhost:9999/image/bgparallax-07.jpg?v=" + new Date().getTime()}>
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
        {<Author_dom PerPage={itemsPerPage} total={data.length} paginate={paginate} currenPages={currentPage} currenPages={currentPage}  data={currentItem}></Author_dom>}
        {/*************************************
                     Authors End
             **************************************/}
      </main>
      {/*************************************
                 Main End
         **************************************/}
    </>
  );
}

export default Author_page