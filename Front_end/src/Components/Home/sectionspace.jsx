import React from "react";
import { useEffect, useState, useContext } from "react";
import { Book } from '../Book/Books.jsx';
import PropTypes from 'prop-types'

const Sectionspace = ({ handleAddWishlist, data, action }) => {
    return (
        <section className="tg-sectionspace tg-haslayout">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="tg-sectionhead">
                            <h2><span>People’s Choice</span>Bestselling Books</h2>
                            <a className="tg-btn" href="#!">View All</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div id="tg-bestsellingbooksslider" className="tg-bestsellingbooksslider tg-bestsellingbooks owl-carousel">
                            {data.map((book, index) => {
                                if (data.length !== index) {
                                    return <Book addWishlist={handleAddWishlist} changeAction={action} key={book.id} {...book}></Book>;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
Sectionspace.propTypes = {
    data: PropTypes.array.isRequired,
    handleAddWishlist: PropTypes.func,
}
Sectionspace.defaultProps = {
    data: [],
    handleAddWishlist: null
}
export default Sectionspace;