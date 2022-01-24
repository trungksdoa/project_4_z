import React, { useState, useEffect, useRef } from "react";
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Button from '@mui/material/Button';

import './App.css';

import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';

const FakeReview = [
    {
        id: 1,
        rating: 5,
        title:"Good",
        content: "Great snippet! Thanks for sharing.",
        date_create: "2022/02/05"
    },
    {
        id: 2,
        rating: 3,
        title:"same same",
        content: "Great snippet! Thanks for sharing.",
        date_create: "2022/02/05"
    },
    {
        id: 3,
        rating: 4,
        title:"Only say it just so good :))",
        content: "Great snippet! Thanks for sharing.",
        date_create: "2022/02/05"
    },
    {
        id: 4,
        rating: 1,
        title:"Fucking shit it too bad",
        content: "Bad snippet",
        date_create: "2022/02/05"
    },
]

const Reviews = () => {
    const [formValue, setFormValue] = useState({ rating: 1, content: "", title: "" });
    const [cookies, setCookie, removeCookie] = useCookies(['loggin'])
    const { id } = useParams();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "rating") {
            setFormValue({ ...formValue, [name]: parseInt(value) });
        } else {
            setFormValue({ ...formValue, [name]: value });
        }
        console.log(formValue)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const object = {};
        const array = [];
        object.title = formValue.title
        object.rating = formValue.rating;
        object.content = formValue.content;
        object.date_create = "2022/02/05";
        FakeReview.push(object)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Result:</label>
                    <pre>{JSON.stringify(formValue, undefined, 2)}</pre>
                </div>
                <div className="form-group">
                    <Rating
                        name="rating"
                        value={formValue.rating}
                        className="Rating_reviews"
                        size="large"
                        style={{ color: "#faaf00" }}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        name="title"
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 15, top: -5 } }}
                        defaultValue="Hello World"
                        value={formValue.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <TextareaAutosize
                        aria-label="Textarea"
                        placeholder="Content"
                        name="content"
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
        </>
    );
}
const List_review = () => {
    return (
        <ul className="media-list">
            {FakeReview.map((review, index) => {
                return (
                    <li className="media" key={index}>
                        <div className="media-body">
                            <div className="well well-lg">
                                <Rating name="read-only" size="large" value={review.rating} readOnly />
                                <div className="media-heading text-uppercase reviews">{review.title} </div>
                                <p className="media-date text-uppercase reviews list-inline">{review.date_create}</p>
                                <p className="media-comment">
                                    {review.content}
                                </p>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export { Reviews, List_review }