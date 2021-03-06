import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReviewTable from './ReviewTable.jsx'
import ReviewAPI from '../../api/ReviewAPI'

import { useNavigate } from 'react-router-dom'

// ----------------------------------------------------------------
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Pagination from '../Pagination/pagination';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Reviews = () => {

    const [confirmDelete, setCobfirmDelete] = useState(false);
    const [id, setId] = useState(0);

    const handleClickOpen = (ids) => {
        setCobfirmDelete(true);
        setId(ids)
    };

    const handleClose = () => {
        setCobfirmDelete(false);
    };

    const [Reviews_list, setReviews_list] = useState([
    ]);
    const [searchByBook, setSearchBook] = useState("");
    const [searchBySearchCustomer, setSearchCustomer] = useState("");
    const [searchByStatus, setSearchStatus] = useState("");
    const [searchByRating, setSearchRating] = useState("");
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();

    const handleChange = async (reviewId, value) => {
        let newArr = [...Reviews_list]; // copying the old datas array
        const index = newArr.findIndex(item => item.reviewid === reviewId);
        newArr[index].active = value;
        setTimeout(setReviews_list(newArr), 10000);
        await ReviewAPI.ChangeStatus(reviewId, value);
    };

    const handleDelete = async () => {
        await ReviewAPI.Delete(id);
        handleClose();
    };

    async function fetchData() {
        await ReviewAPI.getAll().then(res => {
            setReviews_list(res.data);
        }).catch(e => {
            alert(e.msg)
        });
    }

    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    // function fullname(review) {
    //     const fullname = review.users.firstName + " " + review.users.lastName;
    //     return fullname;
    // }
    function gotoReply(id) {
        navigate('/admin/Reviews/reply/' + id);
    }
    useEffect(() => {
        setFiltered(
            Reviews_list.filter((review) =>
                review.bookname.toLowerCase().includes(searchByBook.toLowerCase()) &&
                review.fullname.toLowerCase().includes(searchBySearchCustomer.toLowerCase()) &&
                review.active.toString().includes(searchByStatus) &&
                review.ratingstart.toString().includes(searchByRating)
            ))
    }, [searchByBook, searchBySearchCustomer, searchByStatus, Reviews_list])

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
    }


    return (

        <div className="col-12">
            <Dialog
                open={confirmDelete}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Confirm?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Reviews list
                            {/* <span>
                                <a style={{ position: 'absolute', top: "0.5rem", right: "2rem", cursor: 'pointer' }}
                                    onClick={RefreshData}
                                >
                                    <Fab color="primary" aria-label="add">
                                        <CachedIcon />
                                    </Fab>
                                </a>
                            </span> */}
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
                                        <div className="col-2">
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
                                        <div className="col-2">
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={searchByRating}
                                                    onChange={(e) => setSearchRating(e.target.value)}
                                                >
                                                    <MenuItem value={""}>All</MenuItem>
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ReviewTable reviews={currentItem} onReply={(id) => gotoReply(id)} onChange={handleChange} onDelete={handleClickOpen} />
                        <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Reviews;