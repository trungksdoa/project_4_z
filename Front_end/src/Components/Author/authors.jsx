import React from 'react';
import {data} from './Arrays';
import Author_block from './author_block.jsx';
const author_dom = (props) => {
    return (
        <div className="tg-authorsgrid">
            <div className="container">
                <div className="row">
                    <div className="tg-authors">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-sectionhead">
                                <h2><span>Strong Minds Behind Us</span>Most Popular Authors</h2>
                            </div>
                        </div>
                        {props.data.map((authors, index) => {
                            return <Author_block key={index} {...authors}></Author_block>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default author_dom