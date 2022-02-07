import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { FeatureBook_Author } from '../../Book/Books.jsx';
import AuthorAPU from '../../../api/Author';
import parse from 'html-react-parser';

const Authors_detail = () => {
    const [author, setAuthor] = useState({ authorid: 0, authorImage: "", authorinformation: "", authorname: "", numberpublishedbooks: 0 });
    const [books, setBooks] = useState([
    ]);
    const [isEmptyList, setisEmptyList] = useState(false);
    let { authorId } = useParams();
    const navigate = useNavigate();
    async function Fetch(id) {
        await AuthorAPU.FindOne(id).then(result => {
            setAuthor(result.data)
            console.log(result.data)
            if (result.data.booksCollection == null) {
                setisEmptyList(true);
            } else {
                setBooks(result.data.booksCollection);
                setisEmptyList(false);
            }

        }).catch(err => {
            alert(err.msg)
            if (500 === err.status) {
                navigate("/")
            }
        })
    }
    useEffect(() => {
        Fetch(authorId);
    }, [])
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
                                    <li><a href="javascript:void(0);">home</a></li>
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
                {/*************************************
        Author Detail Start
**************************************/}
                <div className="tg-sectionspace tg-haslayout">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="tg-authordetail">
                                    <figure className="tg-authorimg">
                                        <img src="http://hopamchuan.com/node/get_artist_image/nguyen_du" style={{ width: "max(230px/1/0.9)" }} alt="image description" />
                                    </figure>
                                    <div className="tg-authorcontentdetail">
                                        <div className="tg-sectionhead">
                                            <h2><span>{author.numberpublishedbooks} Published Books</span>{author.authorname}</h2>
                                        </div>
                                        <div className="tg-description">
                                            <div style={{ fontSize: "20px" }} dangerouslySetInnerHTML={{ __html: author.authorinformation }} />
                                        </div>
                                        <div className="tg-booksfromauthor">
                                            <div className="tg-sectionhead">
                                                <h2>Books of Scarlet</h2>
                                            </div>
                                            <div className="row">
                                                {books.length !== 0 && books.map((book, index) => {
                                                    return <FeatureBook_Author key={book.id} {...book}></FeatureBook_Author>;
                                                })}
                                            </div>
                                            {books.length === 0 && <p style={{color: "red",fontSize: 30}}>Not found any books</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
        Author Detail End
**************************************/}
            </main>
            {/*************************************
        Main End
**************************************/}
        </>
    );
}
export default Authors_detail