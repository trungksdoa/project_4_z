import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerApi from '../../api/CustomerApi';
import Customer_table from './customer_table.jsx';

//UI
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Pagination from '../Pagination/pagination';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
//END UI
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const sendEmail = (body) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return emailjs.send("service_xt5ybrk", "template_xkn5p8d", {
        to_name: body.to_name,
        to_emails: body.to_emails,
        message: body.message,
        currentDate: new Date().toLocaleDateString("en-US", options),
    }, 'user_1UXaoGqhOPJSi33AX5vWr');
};

const Customers = () => {
    const [userID, setUserId] = useState("");
    const [open, setOpen] = useState(false);

    const handleClickOpen = (userId) => {
        setUserId(userId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setReason("")
    };

    const [reason, setReason] = useState('');

    const handleChange = (event) => {
        setReason(event.target.value);
    };
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    const [Listcustomer, setListCustomer] = useState([]);
    const [searchByNameOrEmail, setSearchByNameOrEmail] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    // $('#customers').DataTable();
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    const fetchCustomers = async () => {
        try {
            const response = await CustomerApi.getAll();
            console.log(response.data)
            setListCustomer(response.data);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    const banAction = async () => {
        if (reason === "") {
            setError("Please select ban reason")
        } else {
            const newCustomer = [...Listcustomer];
            const index = newCustomer.findIndex(item => item.userid === userID);
            const data = newCustomer[index];
            const body = {};
            body.to_name = data.firstName + " " + data.lastName;
            body.to_emails = data.useremail
            body.message = reason;
            await sendEmail(body).then(async (res) => {
                await CustomerApi.ban(userID).then(res => {
                    if (res.code !== 200) {
                        alert(res.msg)
                    } else {
                        handleClose();
                        toast(res.msg)
                    }
                }).catch(err => {
                    alert(err.msg)
                })
            }).catch((error) => {
                alert(error);
            })
        }

    }
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    const unBanAction = async (userId) => {
        await CustomerApi.Unban(userId).then(res => {
            if (res.code !== 200) {
                alert(res.msg)
            } else {
                toast(res.msg)
            }
        }).catch(err => {
            alert(err.msg)
        })
    }
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchCustomers();

        }, 1000)
        return () => clearInterval(interval)
    }, [])
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    function fullname(customers) {
        const fullname = customers.firstName + " " + customers.lastName + "-" + customers.useremail;
        return fullname;
    }
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    useEffect(() => {
        setFiltered(
            Listcustomer.filter((customer) =>
                fullname(customer).toLowerCase().includes(searchByNameOrEmail.toLowerCase())
            ))
    }, [searchByNameOrEmail, Listcustomer])
    //----------------------------------------------------------------
    //===============================================================
    //----------------------------------------------------------------
    const ViewOrder = (userId) => {
        // console.log(userId)
        navigate("/admin/order/" + userId)
    }


    const ViewWishlist = (userId) => {
        // console.log(userId)
        navigate("/admin/wishlist/" + userId)
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
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Customers list</h6>
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
                                                            label="Search by name or email"
                                                            type="search"
                                                            onChange={(e) => setSearchByNameOrEmail(e.target.value)}
                                                            variant="filled"
                                                        />
                                                    </FormControl>
                                                    <Dialog open={open} onClose={handleClose}>
                                                        <DialogTitle>Ban Reason</DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText style={{ color: "red" }}>
                                                                {error !== "" && (
                                                                    error
                                                                )}
                                                            </DialogContentText>
                                                            <FormControl fullWidth>
                                                                <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={reason}
                                                                    label="Reason"
                                                                    onChange={handleChange}
                                                                >
                                                                    <MenuItem value={"Spam"}>Spam</MenuItem>
                                                                    <MenuItem value={"Negative behavior"}>Negative behavior</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose}>Cancel</Button>
                                                            <Button onClick={banAction}>BAN</Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Customer_table Ban={handleClickOpen} UnBan={unBanAction} data={currentItem} Wishlist={ViewWishlist} Order={ViewOrder} />
                                <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Customers;