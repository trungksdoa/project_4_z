import React, { useLayoutEffect, useState } from "react";
import WishlistAPI from '../../api/WishlistAPI';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
import Pagination from '../Pagination/pagination'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Page3 = () => {

    const [confirmDelete, setCobfirmDelete] = useState(false);
    const [id,setId] =useState(0);

    const handleClickOpen = (wishlistId) => {
        setCobfirmDelete(true);
        setId(wishlistId)
    };

    const handleClose = () => {
        setCobfirmDelete(false);
    };

    const [wishlist, setWishlist] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    const navigate = useNavigate();
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    async function fetchData() {
        await WishlistAPI.getAll(cookies.loggin.userID).then(data => {
            setWishlist(data.data)
        }).catch(err => alert(err.msg))
    }
    const goToDetail = (id) => {
        navigate("/Book/" + id)
    }
    const handleDelete = async () => {
        await WishlistAPI.DeleteByWishlist(id).then(data => {
            setCookie('action', JSON.stringify({ doChange: new Date().getTime() }), { path: '/' });
            toast(data.msg)
            handleClose();
        }).catch(err => alert(err.msg))
    }
    useLayoutEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000)
        return (() => clearInterval(interval))
    }, [])

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = wishlist.slice(itemOfFirst, itemOfLast)


    const paginate = page => {
        setCurrentPage(page)
    }
    return (

        <>
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
            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Book name</th>
                        <th>Book price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItem.length !== 0 ? (
                        currentItem.map((wishlist, index) => {
                            const { bookname, bookprice, user_id, wishlist_id, booksId } = wishlist;
                            return (
                                <tr key={index}>
                                    <td>{wishlist_id}</td>
                                    <td>{bookname}</td>
                                    <td>{bookprice}</td>
                                    <td>
                                        <a style={{ cursor: 'pointer' }} onClick={() => goToDetail(booksId)}>Book detail</a> - <a style={{ cursor: 'pointer' }} onClick={() => handleClickOpen(wishlist_id)}>Remove</a>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="9999" style={{ textAlign: "center" }}>No data found</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Id</th>
                        <th>Book name</th>
                        <th>Book price</th>
                        <th>Delete</th>
                    </tr>
                </tfoot>
            </table>
            <Pagination PerPage={itemsPerPage} total={wishlist.length} paginate={paginate} currenPages={currentPage} />

        </>
    );
}

export default Page3