import React, { useState, useLayoutEffect } from 'react';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-toastify';
import AdminTable from './Admin_table';
import AdminAPI from '../../api/AdminAPI';
import Pagination from '../Pagination/pagination';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Admins = () => {

    const [confirmDelete, setCobfirmDelete] = useState(false);
    const [id, setId] = useState(0);

    const handleClickOpen = (ids) => {
        setCobfirmDelete(true);
        setId(ids)
    };

    const handleClose = () => {
        setCobfirmDelete(false);
    };


    const [adminList, setAdminList] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();
    async function FetchData() {
        await AdminAPI.getAll().then(res => {
            setAdminList(res.data)
        }).catch(err => {
            setAdminList([]);
            alert(err.msg);
        });
    }
    useLayoutEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            FetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    useLayoutEffect(() => {
        setFiltered(adminList)
    }, [adminList])
    function GotoCreatePage() {
        navigate("/owner/admin/create")
    }
    const handleDelete = async () => {
        await AdminAPI.Delete(id).then(res => {
            toast.success(res.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleClose();
        }).catch(err => {
            toast.error(err.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    }
    // /////////////////////////////////////
    // // ---------------------------------
    // /////////////////////////////////////
    // // We start with an empty list of items.
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 3;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
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
                    <Button onClick={handleDelete} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="row">
                <div className="col-12">
                    <a style={{ cursor: 'pointer' }} onClick={GotoCreatePage}><AddCircleIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Admins list</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <AdminTable data={filtered} onDelete={handleClickOpen} />
                                {/* <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admins;