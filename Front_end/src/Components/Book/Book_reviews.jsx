import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';


import Button from '@mui/material/Button';

import './App.css';

import ReviewAPi from '../../api/ReviewAPI';

const labels = {
    1: 'Extremely bad',
    2: 'Fine',
    3: 'Good',
    4: 'Very good',
    5: 'Super cool'
};
const validate = (values) => {
    const errors = {};
    if (!values.reviewcontent) {
        errors.reviewcontent = "Content is required!";
    }
    else if (values.reviewcontent.trim().length <= 0) {
        errors.reviewcontent = "Content not be blank";
    }
    if (!values.reviewtitle) {
        errors.reviewtitle = "Title is required!";
    } else if (values.reviewtitle.trim().length <= 0) {
        errors.reviewtitle = "Title not be blank";
    }
    return errors;
};

const Reviews = ({ customerId, bookId }) => {

    const [formValue, setFormValue] = useState({ ratingstart: 1, reviewcontent: "", reviewtitle: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [hover, setHover] = useState(-1);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    };

    async function requests(param) {
        return await ReviewAPi.Create(param);
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }
    async function handleRequest() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const review = {};
            review.reviewtitle = formValue.reviewtitle
            review.ratingstart = formValue.ratingstart;
            review.reviewcontent = formValue.reviewcontent;
            review.userId = customerId;
            review.bookId = bookId;
            requests(review).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
                // alert(error.msg);
            })
        }
    }
    useEffect(() => {
        handleRequest();
    }, [formErrors])
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="ratingstart"
                            value={formValue.ratingstart}
                            className="Rating_reviews"
                            size="large"
                            style={{ color: "#faaf00" }}
                            onChange={(event, newValue) => {
                                if (newValue == null) {
                                    setFormValue({ ...formValue, "rating": 1 });
                                } else {
                                    setFormValue({ ...formValue, "ratingstart": parseInt(newValue) });
                                }
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : formValue.ratingstart]}</Box>
                    </Box>
                </div>
                <div className="form-group">
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        name="reviewtitle"
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 15, top: -5 } }}
                        value={formValue.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextareaAutosize
                        aria-label="Textarea"
                        placeholder="Content"
                        name="reviewcontent"
                        value={formValue.content}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                    <br></br>
                </div>

                <div className="form-group">
                    <Button type='submit' variant="contained">Submit</Button>
                </div>
            </form>
        </div>
    );
}
const Reviews_edit = ({ customerId, bookId, data, onBack,changeView }) => {
    const [formValue, setFormValue] = useState(data);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [hover, setHover] = useState(-1);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...formValue, [name]: value });
    };

    async function requests(param) {
        return await ReviewAPi.Create(param);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
    }
    async function handleRequest() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const review = {};
            review.reviewtitle = formValue.reviewtitle
            review.ratingstart = formValue.ratingstart;
            review.reviewcontent = formValue.reviewcontent;
            requests(formValue.reviewid, review).then(response => {
                console.log(response)
                changeView();
            }).catch(error => {
                console.log(error);
            });
        }
    }

    async function requests(id, param) {
        return await ReviewAPi.Edit(id, param);
    }

    function OnBack() {
        if (onBack) {
            onBack();
        }
    }
    useEffect(() => {
        handleRequest();
    }, [formErrors])
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Rating
                            name="rating"
                            value={formValue.ratingstart}
                            className="Rating_reviews"
                            size="large"
                            style={{ color: "#faaf00" }}
                            onChange={(event, newValue) => {
                                if (newValue == null) {
                                    setFormValue({ ...formValue, "ratingstart": 1 });
                                } else {
                                    setFormValue({ ...formValue, "ratingstart": parseInt(newValue) });
                                }
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : formValue.ratingstart]}</Box>
                    </Box>
                </div>
                <div className="form-group">
                    <TextField
                        id="outlined-required"
                        label="Title"
                        name="reviewtitle"
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 15, top: -5 } }}
                        value={formValue.reviewtitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextareaAutosize
                        aria-label="Textarea"
                        placeholder="Content"
                        name="reviewcontent"
                        value={formValue.reviewcontent}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                    <br></br>
                </div>

                <div className="form-group">
                    <Button type='submit' variant="contained">Submit</Button>

                    <Button onClick={OnBack}>Back</Button>
                </div>
            </form>
        </div>
    );
}


const List_review = ({ data, customerId }) => {

    return (
        <ul className="media-list">
            {data.map((review, index) => {
                const { userid, reviewtitle, reviewid, reviewcontent, ratingstart, createddate, active } = review
                const other_Review = customerId === userid.userid;
                return (
                    !other_Review && (
                        active === 1 && (
                            <li className="media" key={index}>
                                <span><b>Customer</b></span>: <span><b><strong>{userid.useremail}</strong></b></span>
                                <div className="media-body">
                                    <div className="well well-lg">
                                        <Rating name="read-only" size="large" value={ratingstart} readOnly />
                                        <div className="media-heading text-uppercase reviews">{reviewtitle} </div>
                                        <p className="media-date text-uppercase reviews list-inline">{createddate}</p>
                                        <p className="media-comment">
                                            {reviewcontent}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                )
            })}
            <hr></hr>
        </ul>
    )
}

const Single_review = ({ data, OnEdit }) => {
    const { userid, reviewtitle, reviewid, reviewcontent, ratingstart, createddate, active } = data

    function OnUpdate(e, reviewId) {
        if (OnEdit) {
            OnEdit(e.target, reviewId);
        }
    }
    return (
        <>
            {active === 1 && (
                <li className="media" key={userid.userid} style={{ listStyleType: "none" }}>
                    <div className="media-body">
                        <div className="well well-lg">
                            <Rating name="read-only" size="large" value={ratingstart} readOnly />
                            <div className="media-heading text-uppercase reviews">{reviewtitle} </div>
                            <p className="media-date text-uppercase reviews list-inline">{createddate}</p>
                            <p className="media-comment">
                                {reviewcontent}
                            </p>
                            <a style={{ cursor: 'pointer' }} onClick={(e) => OnUpdate(e, reviewid)}>Edit</a>
                        </div>
                    </div>
                </li>
            )}
            {active === 2 && (
                <h3>Your review is pending</h3>
            )}
            {active === 0 && (
                <h3>Bạn chưa đánh giá</h3>
            )}
        </>
    )
}


Single_review.propTypes = {
    data: PropTypes.object,
    OnEdit: PropTypes.func
};

Single_review.defaultProps = {
    data: {},
    OnEdit: null
};

Reviews.propTypes = {
    customerId: PropTypes.string,
    bookId: PropTypes.string
};

Reviews.defaultProps = {
    customerId: "",
    bookId: ""

};

Reviews_edit.propTypes = {
    customerId: PropTypes.string,
    bookId: PropTypes.string,
    onBack: PropTypes.func,
    data: PropTypes.object,
    changeView:PropTypes.func
};

Reviews_edit.defaultProps = {
    bookId: "",
    onBack: null,
    data: {},
    customerId: "",
    changeView:null
};

List_review.propTypes = {
    data: PropTypes.array,
    customerId: PropTypes.string
};

List_review.defaultProps = {
    data: [],
    customerId: "",

};
export { Reviews, List_review, Single_review, Reviews_edit }