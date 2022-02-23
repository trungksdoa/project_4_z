import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import BookAPI from '../../api/BookAPI';
import { toast } from 'react-toastify'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Book_table = (props) => {

    const [confirmDelete, setCobfirmDelete] = useState(false);
    const [id, setId] = useState(0);

    const handleClickOpen = (ids) => {
        setCobfirmDelete(true);
        setId(ids)
    };

    const handleClose = () => {
        setCobfirmDelete(false);
    };


    const { books, onViewDetail, onDelete, onEdit } = props;
    // console.log(books)
    function OnViewDetail(index) {
        if (onViewDetail) {
            onViewDetail(index)
        }
    }
    async function OnDelete() {
        await BookAPI.changeStatus(id, 2);
        handleClose();
        // console.log(boodId)
    }
    function OnEdit(index) {
        if (onEdit) {
            onEdit(index)
        }
    }

    const changeStatus = async (boodId, status) => {
        await BookAPI.changeStatus(boodId, status);
    }

    return (
        <div className="container-fluid py-4">
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
                    <Button onClick={OnDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <table id="dtable" className="table align-items-center mb-0">
                <thead>
                    <tr>
                        {/* <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th> */}
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Releasedate
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Modifieddate
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Amounts
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                        <th className="text-center opacity-7" />
                        <th className="text-center opacity-7" />
                    </tr>
                </thead>
                <tbody>
                    {books.length != 0 ? books.map((book, index) => {
                        const status = book.status === 3 ? 3 : 4;
                        return (
                            <tr key={index}>
                                {/* <td>
                                    <div className="d-flex px-3 py-1">
                                        <p className="text-xs font-weight-bold mb-0">{index}</p>
                                    </div>
                                </td> */}
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{book.bookname} books</p>
                                </td>
                                <td className="align-middle">
                                    <p className="text-xs font-weight-bold mb-0">${book.bookprice.toFixed(2)}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{book.bookreleasedate} </p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{book.bookmodifieddate} </p>
                                </td>
                                <td className="align-middle">
                                    <p className="text-xs font-weight-bold mb-0">{book.amounts}</p>
                                </td>
                                <td >
                                    <span className="text-secondary text-xs font-weight-bold">
                                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="Select-filled-label">Status</InputLabel>
                                            <Select
                                                labelId="Select-filled-label"
                                                id="simple-select-filled"
                                                onChange={(e) => changeStatus(book.booksid, e.target.value)}
                                                value={status}
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                autoWidth
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value={3}>Out stock</MenuItem>
                                                <MenuItem value={4}>On stock</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </span>
                                </td>
                                <td className="align-middle text-center">
                                    <a style={{ cursor: 'pointer' }} onClick={() => handleClickOpen(book.booksid)}>
                                        <span style={{ fontSize: "0.6em", color: "red" }}>
                                            <i className="fas fa-trash-alt fa-2x" />
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
        </div>


    )
}
Book_table.propTypes = {
    books: PropTypes.array,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Book_table.defaultProps = {
    books: [],
    onViewDetail: null,
    onDelete: null,
    onEdit: null
};

export default Book_table