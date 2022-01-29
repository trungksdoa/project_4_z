import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReviewTable from './ReviewTable.jsx'
import ReviewAPI from '../../api/ReviewAPI'


// ----------------------------------------------------------------
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';

const Reviews = () => {
    const [Reviews_list, setReviews_list] = useState([]);
    const [searchByBook, setSearchBook] = useState("");
    const [searchBySearchCustomer, setSearchCustomer] = useState("");
    const [searchByStatus, setSearchStatus] = useState("");
    const [filtered, setFiltered] = useState([]);

    const handleChange = async (index, value) => {
        let newArr = [...Reviews_list]; // copying the old datas array
        newArr[index].active = value;
        setTimeout(setReviews_list(newArr), 10000);
        await ReviewAPI.ChangeStatus(newArr[index].review_id, value);
    };

    const handleDelete = async (index, value) => {
        // window.confirm returns a boolean, true or false, based on whether the user pressed 'Ok' (which will result in true) or 'Cancel' (which will result in false)
        if (window.confirm("This is a dangerous action do you want to continue?")) {
            const newReviews = [...Reviews_list];
            await ReviewAPI.Delete(newReviews[index].review_id);
            newReviews.splice(index, 1);
            setReviews_list(newReviews)
        } else {
            //
        }
    };

    const RefreshData = () => {
        fetchData();
    }

    async function fetchData() {
        const res = await ReviewAPI.getAll();
        setReviews_list(res.data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        setFiltered(
            Reviews_list.filter((review) =>
                review.book_id.toLowerCase().includes(searchByBook.toLowerCase()) &&
                review.user_id.toLowerCase().includes(searchBySearchCustomer.toLowerCase()) &&
                review.active.toString().includes(searchByStatus)
            ))
    }, [searchByBook, searchBySearchCustomer, searchByStatus, Reviews_list])
    return (

        <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Reviews list
                            <span>
                                <a style={{ position: 'absolute', top: "0.5rem", right: "2rem", cursor: 'pointer' }}
                                    onClick={RefreshData}
                                >
                                    <Fab color="primary" aria-label="add">
                                        <CachedIcon />
                                    </Fab>
                                </a>
                            </span>

                        </h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="pt-4 pb-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                <TextField
                                                    id="filled-search"
                                                    label="Search by book"
                                                    type="search"
                                                    onChange={(e) => setSearchBook(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>

                                        </div>
                                        <div className="col-3">
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                <TextField
                                                    id="filled-search"
                                                    label="Search by customer"
                                                    type="search"
                                                    onChange={(e) => setSearchCustomer(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="col-3">
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={searchByStatus}
                                                    onChange={(e) => setSearchStatus(e.target.value)}
                                                >
                                                    <MenuItem value={""}>None</MenuItem>
                                                    <MenuItem value={1}>Show</MenuItem>
                                                    <MenuItem value={2}>Hidden</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ReviewTable reviews={filtered} onChange={handleChange} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Reviews;