import React, { useLayoutEffect, useState, useRef } from 'react';
import ReviewAPI from '../../api/ReviewAPI';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
import { Reviews, List_review, Single_review, Reviews_edit } from './Book_reviews.jsx'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    cursor: 'pointer',
    position: "relative",
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>
                        {children}
                    </div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const ReviewsComponent = () => {
    // --------------Reviews-----------------
    const [value, setValue] = useState(0);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const [isReviewd, setIsReviewd] = useState(true);
    const { id } = useParams();
    const [user_review, setUserReview] = useState({
        active: 0,
        createddate: "",
        ratingstart: 0,
        reviewcontent: "",
        reviewid: 0,
        reviewtitle: "",
        userid: {
            userid: "",
            firstName: "",
            lastName: "",
            useremail: "",
            userpassword: "responseresponse",
            birthday: "",
            phone: "",
            status: 0,
            usercreateddate: "",
            usermodifieddate: ""
        }
    });
    const [data, setData] = useState([{
        active: 0,
        createddate: "",
        ratingstart: 0,
        reviewcontent: "",
        reviewid: 0,
        reviewtitle: "",
        userid: {
            userid: "",
            firstName: "",
            lastName: "",
            useremail: "",
            userpassword: "responseresponse",
            birthday: "",
            phone: "",
            status: 0,
            usercreateddate: "",
            usermodifieddate: ""
        },
        booksId: {
            booksid: ""
        }
    }]);
    const [action, setAction] = useState("view");
    const [searchRating, setSearchRating] = useState("");
    const [filterd, setFiltered] = useState([]);
    const numbeRating = useRef();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleEdit_Reviews = (target, reviewId) => {
        const action_ = action === "view" ? "edit" : "view";
        setAction(action_)
        // console.log(target, reviewId)
    };
    const HandleBackToView = () => {
        setAction("view")
    }
    async function Fetch(id) {
        return await ReviewAPI.FindALl(id)
    }

    function caculator(data) {
        //Tóm tắt
        //1: thuộc tính star nằm trong đối tượng
        //2: lấy tổng số đánh giá
        //3: công thức (1 x SUM(WHERE rating = 1) + 2 x total_rate_2 + 3 x total_rate_3 + 4 x total_rate_4 + 5 x total_rate_5) / total_rating
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        var average = 0;
        const newArray = data.filter(review => review.active === 1)
        var total_rating = newArray.map(item => item.ratingstart).reduce((prev, curr) => prev + curr, 0);

        data.forEach(function (x) { counts[x.ratingstart] = (counts[x.ratingstart] || 0) + 1; });

        numbeRating.current = counts

        const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
        const sum = sumValues(counts); // gives 5

        return total_rating / sum;
    }

    useLayoutEffect(() => {
        if (auth) {
            const interval = setInterval(() => {
                Fetch(id).then(res => {
                    setData(res.data);
                    let obj = res.data.find(o => o.userid.userid === cookies.loggin.userID);
                    if (obj === undefined) {
                        setIsReviewd(false);
                        setUserReview({
                            active: 0,
                            createddate: "",
                            ratingstart: 0,
                            reviewcontent: "",
                            reviewid: 0,
                            reviewtitle: "",
                            userid: {
                                userid: "",
                                firstName: "",
                                lastName: "",
                                useremail: "",
                                userpassword: "responseresponse",
                                birthday: "",
                                phone: "",
                                status: 0,
                                usercreateddate: "",
                                usermodifieddate: ""
                            }
                        })
                    } else {
                        setIsReviewd(true);
                        setUserReview(obj)
                    }
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [])

    useLayoutEffect(() => {
        setFiltered(data.filter(review =>
            review.ratingstart.toString().includes(searchRating)
        ))
    }, [data, searchRating])
    // --------------End Reviews-----------------
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        label="Description"
                        {...a11yProps(0)} />
                    <Tab label="Review" {...a11yProps(1)} />
                </Tabs>
            </Box>
            {auth ? (
                <>
                    <TabPanel value={value} index={0}>
                        {action === "view" ? (
                            <>
                                <div className="product-rating-overview">
                                    <div className="product-rating-overview__briefing">
                                        <div className="product-rating-overview__score-wrapper">
                                            <span className="product-rating-overview__rating-score">{Math.round(caculator(data) * 100) / 100}</span>
                                            <span className="product-rating-overview__rating-score-out-of"> out of 5 </span>
                                        </div>
                                        <div className="shopee-rating-stars product-rating-overview__stars">
                                            <div className="shopee-rating-stars__stars">
                                                <Rating name="read-only" size="large" precision={0.5} value={caculator(data)} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-rating-overview__filters">
                                        <div className="product-rating-overview__filter product-rating-overview__filter--active product-rating-overview__filter--all" onClick={() => setSearchRating("")}>All</div>
                                        <div className="product-rating-overview__filter" onClick={() => setSearchRating("5")}>5 star ({numbeRating.current[5]})</div>
                                        <div className="product-rating-overview__filter" onClick={() => setSearchRating("4")}>4 star ({numbeRating.current[4]})</div>
                                        <div className="product-rating-overview__filter" onClick={() => setSearchRating("3")}>3 star ({numbeRating.current[3]})</div>
                                        <div className="product-rating-overview__filter" onClick={() => setSearchRating("2")}>2 star ({numbeRating.current[2]})</div>
                                        <div className="product-rating-overview__filter" onClick={() => setSearchRating("1")}>1 star ({numbeRating.current[1]})</div>
                                    </div>
                                </div>
                                <Single_review data={user_review} OnEdit={handleEdit_Reviews} />
                                {filterd.length === 0 ? (
                                    <p> No reviews found</p>
                                ) : (
                                    <List_review data={filterd} customerId={user_review.userid.userid} />
                                )}
                            </>
                        ) : (
                            <Reviews_edit onBack={HandleBackToView} bookId={id} customerId={user_review.userid.userid} data={user_review} changeView={() => setAction("view")} />
                        )}
                        <hr></hr>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {isReviewd && (
                            <h6>You have already rated</h6>
                        )}
                        {!isReviewd && (
                            <Reviews bookId={id} customerId={cookies.loggin.userID} />
                        )}
                    </TabPanel>
                </>
            ) : (
                <h6>Please loggin</h6>
            )}

        </Box>
    )
}
export default ReviewsComponent