import React from 'react';
import { Link } from 'react-router-dom';
import Author_detail from './Author_detail/author_detail.jsx';
const author_block = ({ authorid, authorImage, authorname, numberpublishedbooks }) => {
    return (
        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
            <div className="tg-author">
                <Link to={'/author/' + authorid}
                >
                    <figure><img src={"http://localhost:9999/image/" + authorImage + "?v=" +new Date().getTime()} className="img_author_avatar" alt="img toolmber" width="100%" height="165px" /></figure>
                    <div className="tg-authorcontent">
                        <h2>{authorname}</h2>
                        <span>{numberpublishedbooks} books</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default author_block;