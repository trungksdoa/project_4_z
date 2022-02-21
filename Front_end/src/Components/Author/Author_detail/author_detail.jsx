import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { FeatureBook_Author } from '../../Book/Books.jsx';
import AuthorAPU from '../../../api/Author';
import './author.css'
import ShowMoreText from "react-show-more-text";
import BookAPI from '../../../api/BookAPI.js'
import AddToWishlist from '../../FolderAction/AddToWishlist';
import { CartProvider, useCart } from "react-use-cart";
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

const Authors_detail = () => {
    const [author, setAuthor] = useState({ authorid: 0, authorImage: "", authorinformation: "", authorname: "", numberpublishedbooks: 0 });

    const [books, setBooks] = useState([
    ]);
    const { addItem } = useCart();
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const [isEmptyList, setisEmptyList] = useState(false);
    let { authorId } = useParams();
    const navigate = useNavigate();
    async function Fetch() {
        await AuthorAPU.FindOne(authorId).then(result => {
            setAuthor(result.data)
        }).catch(err => {
            alert(err.msg)
            if (500 === err.status) {
                navigate("/")
            }
        })
    }
    async function LoadBookByAuthor() {
        await BookAPI.LoadByAuthor(authorId).then(result => {
            setBooks(result.data)
        }).catch(err => {
            alert(err.msg)
            if (500 === err.status) {
                navigate("/")
            }
        })
    }
    useEffect(() => {
        Fetch();
    }, [])
    useEffect(() => {
        LoadBookByAuthor()
    }, [])
    // --------------------
    // =======Book=========
    // --------------------
    async function handleAddWishlist(booksId) {
        await AddToWishlist.AddToWishlist(cookies, booksId).then(result => {
            LoadBookByAuthor();
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
            toast.success(result.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(err => {
            alert(err.msg)
        })
    }
    function handleCart(props) {
        const { booksid, bookprice, pdetailid, bookname } = props;
        const newObject = { id: "", price: 0, img: "", name: "" };
        newObject.id = booksid;
        newObject.price = bookprice;
        newObject.img = pdetailid.imageLink;
        newObject.name = bookname;
        addItem(newObject);
        toast.success("Add item #" + newObject.name + " to basket", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
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
                                                {books.length !== 0 && books.map((book, index) => {
                                                    return <FeatureBook_Author onAdd={handleCart} addWishlist={handleAddWishlist} key={index} {...book}></FeatureBook_Author>;
                                                })}
                                            </div>
                                            {books.length === 0 && <p style={{ color: "red", fontSize: 20 }}>Not found any books</p>}
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