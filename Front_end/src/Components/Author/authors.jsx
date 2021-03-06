import React from 'react';
import { data } from './Arrays';
import Author_block from './author_block.jsx';
import Pagination from '../Pagination/pagination'

const author_dom = (props) => {
    const { PerPage, total, paginate,currenPages,data } = props;
    return (
        <div className="tg-authorsgrid">
            <div className="container">
                <div className="row">
                    <div className="tg-authors" style={{ boxShadow: 'rgb(216 207 207) 0px 4px 8px 0px' }}>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-sectionhead" style={{ padding: "2rem 100px 30px 0" }}>
                                <h2><span>Strong Minds Behind Us</span>Most Popular Authors</h2>
                            </div>
                        </div>
                        {data.map((authors, index) => {
                            return <Author_block key={index} {...authors}></Author_block>
                        })}
                        <div className="col-lg-12">
                            <Pagination PerPage={PerPage} total={total} paginate={paginate} currenPages={currenPages} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default author_dom