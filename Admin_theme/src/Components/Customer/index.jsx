import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerApi from '../../api/CustomerApi';
import Customer_table from './customer_table.jsx';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Pagination from '../Pagination/pagination';

import { toast } from 'react-toastify';
const Customers = () => {
    const [Listcustomer, setListCustomer] = useState([]);
    const [searchByNameOrEmail, setSearchByNameOrEmail] = useState("");
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();
    // $('#customers').DataTable();
    const fetchCustomers = async () => {
        try {
            const response = await CustomerApi.getAll();
            console.log(response.data)
            setListCustomer(response.data);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const banAction = async (userId) => {
        console.log(userId)
        await CustomerApi.ban(userId).then(res => {
            if (res.code !== 200) {
                alert(res.msg)
            } else {
                toast(res.msg)
            }
        }).catch(err => {
            alert(err.msg)
        })
    }
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
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchCustomers();

        }, 1000)
        return () => clearInterval(interval)
    }, [])

    function fullname(customers) {
        const fullname = customers.firstName + " " + customers.lastName + "-" + customers.useremail;
        return fullname;
    }
    useEffect(() => {
        setFiltered(
            Listcustomer.filter((customer) =>
                fullname(customer).toLowerCase().includes(searchByNameOrEmail.toLowerCase())
            ))
    }, [searchByNameOrEmail, Listcustomer])

    const ViewOrder = (userId) => {
        // console.log(userId)
        navigate("/admin/order/" + userId)
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

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Customer_table Ban={banAction} UnBan={unBanAction} data={currentItem} Order={ViewOrder} />
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