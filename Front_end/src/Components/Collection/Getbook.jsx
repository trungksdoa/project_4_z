import React from 'react';
import PropType from 'prop-types';

Getbook.PropType = {
	bookList: PropType.array
};
Getbook.defaultProps = {
	bookList: []
};
function Getbook(props) {
	//const { bookList } = props;
    const { bookList, onAdd } = props;
	return (
        <div className="tg-productgrid">
            
			{bookList.map((post) => (
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
				<div className="tg-postbook">
					<figure className="tg-featureimg">
						<div className="tg-bookimg">
							<div className="tg-frontcover">
								<img key={post.booksid} src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" +new Date().getTime()} alt="image description" />
							</div>
							<div className="tg-backcover">
								<img key={post.booksid} src={"http://localhost:9999/image/" + post.pdetailid.imageLink + "?v=" +new Date().getTime()} alt="image description" />
							</div>
						</div>
						<a className="tg-btnaddtowishlist" href="javascript:void(0);">
							<i className="icon-heart" />
							<span>add to wishlist</span>
						</a>
					</figure>
					<div className="tg-postbookcontent">
						<ul className="tg-bookscategories">
							<li>
								<a href="javascript:void(0);">Language:{post.pdetailid.language}</a>
							</li>
						</ul>
						<div className="tg-themetagbox">
							<span className="tg-themetag">sale</span>
						</div>
						<div className="tg-booktitle">
							<h3>
								<a href="javascript:void(0);"key={post.booksid}>{post.bookname}</a>
							</h3>
						</div>
						<span className="tg-bookwriter">
							By: <a href="javascript:void(0);"key={post.booksid}>{post.authorid.authorname}</a>
						</span>
						<span className="tg-stars">
							<span />
						</span>
						<span className="tg-bookprice">
							<ins key={post.booksid} >${post.bookprice}</ins>
							
						</span>
						<a className="tg-btn tg-btnstyletwo" href="javascript:void(0);">
							<i className="fa fa-shopping-basket" />
							<em onClick={() => onAdd(bookList)}>Add To Basket</em>
						</a>
					</div>
				</div>
                </div>
			))}
		
        </div>
		
	);
}
export default Getbook;
