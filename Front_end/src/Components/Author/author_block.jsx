import React from 'react';
import { Link } from 'react-router-dom';
import Author_detail from './Author_detail/author_detail.jsx' ;
const author_block = ({ id, img, name, number }) => {
    const authorId = id;
    return (
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div className="tg-author">
                <Link to={'/author/'+id}
                >
                    <figure><img src={img} alt="image description" /></figure>
                    <div className="tg-authorcontent">
                        <h2>{name}</h2>
                        <span>{number}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default author_block;