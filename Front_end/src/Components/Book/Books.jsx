const Book = ({ img, title, cate, author }) => {
    return (
        <div className="item">
            <div className="tg-postbook">
                <figure className="tg-featureimg">
                    <div className="tg-bookimg">
                        <div className="tg-frontcover"><img src={img} alt="image description" /></div>
                        <div className="tg-backcover"><img src={img} alt="image description" /></div>
                    </div>
                    <a className="tg-btnaddtowishlist" href="javascript:void(0);">
                        <i className="icon-heart" />
                        <span>add to wishlist</span>
                    </a>
                </figure>
                <div className="tg-postbookcontent">
                    <ul className="tg-bookscategories">
                        <li><a href="javascript:void(0);">Adventure</a></li>
                        <li><a href="javascript:void(0);">Fun</a></li>
                    </ul>
                    <div className="tg-themetagbox"><span className="tg-themetag">sale</span></div>
                    <div className="tg-booktitle">
                        <h3><a href="javascript:void(0);">{title}</a></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                    <span className="tg-bookprice">
                        <ins>$25.18</ins>
                        <del>$27.20</del>
                    </span>
                    <a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                        <i className="fa fa-shopping-basket" />
                        <em>Add To Basket</em>
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeatureBook = ({ img, title, cate, author }) => {
    return (
        <div className="tg-featureditm">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hidden-sm hidden-xs">
                <figure><img src={img} alt="image description" /></figure>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="tg-featureditmcontent">
                    <div className="tg-themetagbox"><span className="tg-themetag">featured</span></div>
                    <div className="tg-booktitle">
                        <h3><a href="javascript:void(0);">{title}</a></h3>
                    </div>
                    <span className="tg-bookwriter">By: <a href="javascript:void(0);">{author}</a></span>
                    <span className="tg-stars"><span /></span>
                    <div className="tg-priceandbtn">
                        <span className="tg-bookprice">
                            <ins>$23.18</ins>
                            <del>$30.20</del>
                        </span>
                        <a className="tg-btn tg-btnstyletwo tg-active" href="javascript:void(0);">
                            <i className="fa fa-shopping-basket" />
                            <em>Add To Basket</em>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export { Book, FeatureBook }
