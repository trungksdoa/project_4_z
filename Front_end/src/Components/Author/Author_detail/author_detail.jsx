import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { FeatureBook_Author } from '../../Book/Books.jsx';
import AuthorAPU from '../../../api/Author';
import './author.css'
import ShowMoreText from "react-show-more-text";
import parse from 'html-react-parser';
import AddToWishlist from '../../FolderAction/AddToWishlist';
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
    // --------------------
    // =======Book=========
    // --------------------
    async function handleAddWishlist(booksId) {
        const res = await AddToWishlist.AddToWishlist(booksId)
        console.log(res);
    }
    // amounts: 100
    // bookcreateddate: "1990-04-04 00:00:00.0"
    // bookdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna."
    // bookmodifieddate: "1991-01-01 00:00:00.0"
    // bookname: "Awakening Africans"
    // bookprice: 80
    // bookreleasedate: "1990-04-04 00:00:00.0"
    // booksid: "Book17"
    // groupdetail: []
    // pdetailid:
    // dimensions: "123"
    // format: "2321"
    // illustrationsnote: "3"
    // imageLink: "Jaroslav_Hasek"
    // language: "21"
    // pages: 3232
    // pdetailid: 8
    // [[Prototype]]: Object
    // status: 2
    // wishlists: []
    // console.log(books)
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
                                    <li><a href="#!">home</a></li>
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
                                        <img src={"http://localhost:9999/image/" + author.authorImage + "?v=" + new Date().getTime()} style={{ width: "max(230px/1/0.9)" }} alt="image description" />
                                    </figure>
                                    <div className="tg-authorcontentdetail">
                                        <div className="tg-sectionhead">
                                            <h2><span>  <h5 style={{ color: "orange" }}> {author.numberpublishedbooks} Published Books</h5> </span>{author.authorname}</h2>
                                        </div>
                                        <div className="tg-description">
                                            <ShowMoreText
                                                /* Default options */
                                                lines={4}
                                                more="Show more"
                                                less="Show less"
                                                className="content-css"
                                                anchorClass="my-anchor-css-class"
                                                expanded={false}
                                                width={760}
                                                truncatedEndingComponent={"... "}
                                            >
                                                <div className="author_information" dangerouslySetInnerHTML={{ __html: author.authorinformation }} />

                                            </ShowMoreText>
                                        </div>

                                        <div className="tg-booksfromauthor">
                                            <div className="tg-sectionhead" >
                                                <h2 style={{ color: "orange" }}>Books of Scarlet</h2>
                                            </div>
                                            <div className="row">
                                                {/* {books.length !== 0 && books.map((book, index) => {
                                                    return <FeatureBook_Author key={index} {...book}></FeatureBook_Author>;
                                                })} */}
                                            </div>
                                            {/* {books.length === 0 && <p style={{ color: "red", fontSize: 30 }}>Not found any books</p>} */}
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