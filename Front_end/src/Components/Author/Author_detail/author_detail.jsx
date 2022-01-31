import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { FeatureBook_Author } from '../../Book/Books.jsx';
import { data } from '../../Home/arrays';
import AuthorAPU from '../../../api/Author';

const Authors_detail = () => {
    const [author, setAuthor] = useState({ authorid: 0, authorImage: "", authorinformation: "", authorname: "", numberpublishedbooks: 0 });
    const [books, setBooks] = useState({
        booksid: "", bookname: "", bookprice: "", pdetailid: {
            imageLink: "",
        }
    });
    let { authorId } = useParams();
    async function Fetch(id) {
        await AuthorAPU.FindOne(id).then(result => {
            setAuthor(result.data)
            setBooks(result.data.booksCollection);
        }).catch(err => {
            alert(err.msg)
        })
    }
    console.table(books)
    console.table(author)
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
                                        <img src="images/author/imag-25.jpg" alt="image description" />
                                    </figure>
                                    <div className="tg-authorcontentdetail">
                                        <div className="tg-sectionhead">
                                            <h2><span>15,686 Published Books</span>Scarlet Hawthorne</h2>
                                            <ul className="tg-socialicons">
                                                <li className="tg-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                <li className="tg-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                <li className="tg-linkedin"><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                <li className="tg-googleplus"><a href="javascript:void(0);"><i className="fa fa-google-plus" /></a></li>
                                                <li className="tg-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="tg-description">
                                            <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoiars nisiuip commodo consequat aute irure dolor in aprehenderit aveli esseati cillum dolor fugiat nulla pariatur cepteur sint occaecat cupidatat.</p>
                                            <p>Caanon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnisate natus error sit voluptatem accusantium doloremque totam rem aperiam, eaque ipsa quae abillo inventoe veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
                                            <p>Voluptas sit asapernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quistan ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </div>
                                        <div className="tg-booksfromauthor">
                                            <div className="tg-sectionhead">
                                                <h2>Books of Scarlet</h2>
                                            </div>
                                            <div className="row">
                                                {books.map((book, index) => {
                                                    return <FeatureBook_Author key={book.id} {...book}></FeatureBook_Author>;
                                                })}
                                            </div>
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