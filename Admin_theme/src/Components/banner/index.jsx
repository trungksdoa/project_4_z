import React, { useState, useLayoutEffect, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import BannerAPI from '../../api/BannerAPI';
import Banner_table from './banner_table.jsx';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Pagination from '../Pagination/pagination';
import { toast } from 'react-toastify';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const Banner = () => {

    const [confirmDelete, setCobfirmDelete] = useState(false);
    const [id, setId] = useState(0);

    const handleClickOpen = (ids) => {
        setCobfirmDelete(true);
        setId(ids)
    };

    const handleClose = () => {
        setCobfirmDelete(false);
    };


    const [banner_list, setAuthor_list] = useState([]);
    const datasadas = {
        banner_Image: "",
        banner_content: "",
        banner_createddate: "",
        banner_id: "",
        banner_modifieddate: "",
        banner_title: "",
    }
    const [SearchByName, setSearchByName] = useState("");
    const [filtered, setFiltered] = useState([]);

    async function fetchData() {
        await BannerAPI.getBanner().then((banner) => {
            setAuthor_list(banner.data)
            console.log(banner_list);
        }).catch((error) => {
            alert(error.msg);
        })
    }
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData()
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setFiltered(
            banner_list.filter((banner) =>
                banner.banner_title.toLowerCase().includes(SearchByName.toLowerCase())
            ))
    }, [SearchByName, banner_list])

    const navigate = useNavigate();

    function handleView(index) {
        const newArray = [...banner_list];
        const object = newArray.find(obj => obj.banner_id === index);
        navigate("/admin/banner/" + object.banner_id)
    }
    const handleDelete = async () => {
        await BannerAPI.delete(id).then((res) => {
            toast(res.msg)
            handleClose();
        }).catch((error) => {
            alert(error.msg);
        })
    }

    // /////////////////////////////////////
    // // ---------------------------------
    // /////////////////////////////////////
    // // We start with an empty list of items.
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)


    const paginate = page => {
        setCurrentPage(page)
    }
    const handGoToCreate = () => {
        navigate('/admin/banner/create')
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
                    <a style={{ cursor: 'pointer' }} onClick={handGoToCreate}><AddCircleIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Banner table</h6>


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
                                                            label="Search by author name"
                                                            type="search"
                                                            onChange={(e) => setSearchByName(e.target.value)}
                                                            variant="filled"
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Banner_table banners={currentItem} onViewDetail={handleView} onDelete={handleClickOpen}/>
                                <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;