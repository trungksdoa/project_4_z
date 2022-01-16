import React from 'react';
import { ReleaseBook } from '../Book/Books.jsx';
import { data } from './arrays';
const Release = (props) => {
    return (<section className="tg-sectionspace tg-haslayout">
        <div className="container">
            <div className="row">
                <div className="tg-newrelease">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="tg-sectionhead">
                            <h2><span>Taste The New Spice</span>New Release Books</h2>
                        </div>
                        <div className="tg-description">
                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>
                        </div>
                        <div className="tg-btns">
                            <a className="tg-btn tg-active" href="#!">View All</a>
                            <a className="tg-btn" href="#!">Read More</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="tg-newreleasebooks">
                                {props.data.map((book, index) => {
                                    if (index <= 2) {
                                        return <ReleaseBook key={book.id} {...book}></ReleaseBook>;
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Release;