import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';



const Review_Table = (props) => {
    const { reviews, onChange, onDelete, onReply } = props;

    function OnStatusChange(index, status) {
        if (onChange) {
            onChange(index, status)
        }
    }
    function OnReviewDelete(index) {
        if (onDelete) {
            onDelete(index)
        }
    }
    function GoToReply(id){
        if(onReply){
            onReply(id)
        }
    }
    return (
        <table id="Revies" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Book</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Title/Content</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Rating
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date
                        reviews</th>
                    <th className="text-center opacity-7" />
                    <th className="text-center opacity-7" />
                </tr>
            </thead>
            <tbody>
                {reviews.length != 0 ? reviews.map((review, index) => {

                    return (
                        <tr key={index}>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {review.reviewid}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{review.userid.firstName + " " + review.userid.lastName}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{review.booksId.bookname}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-xs font-weight-bold mb-0">
                                    Title: {review.reviewtitle}
                                    <br></br>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        placeholder="Empty"
                                        style={{ width: 200 }}
                                        defaultValue={review.reviewcontent}
                                        disabled
                                    />
                                </div>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{review.ratingstart}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="Select-filled-label">Status</InputLabel>
                                        <Select
                                            labelId="Select-filled-label"
                                            id="simple-select-filled"
                                            onChange={(e) => OnStatusChange(index, e.target.value)}
                                            value={review.active}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            autoWidth
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={1}>Show</MenuItem>
                                            <MenuItem value={2}>Hidden</MenuItem>
                                        </Select>
                                    </FormControl>
                                </span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{review.createddate}</span>
                            </td>
                            <td className="align-middle">
                                <a style={{ cursor: 'pointer' }} onClick={() => OnReviewDelete(index)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <span style={{ fontSize: "1em", color: "red" }}>
                                        <i className="fas fa-trash-alt fa-2x" />
                                    </span>
                                </a>
                            </td>
                            <td className="align-middle">
                                <a style={{ cursor: 'pointer' }} onClick={() => GoToReply(review.reviewid)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <span style={{ fontSize: "1em", color: "red" }}>
                                        Reply
                                    </span>
                                </a>
                            </td>
                        </tr>
                    )
                }) : (
                    <tr>
                        <td colSpan="9999" style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                )}

            </tbody>
        </table>
    )
}
Review_Table.propTypes = {
    reviews: PropTypes.array,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onReply: PropTypes.func,
};

Review_Table.defaultProps = {
    reviews: [],
    onChange: null,
    onDelete: null,
    onReply:null
};
export default Review_Table;