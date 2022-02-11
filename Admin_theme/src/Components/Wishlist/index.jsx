import React, { useState, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import WishlistTable from './WishlistTable.jsx'
import voucherAPI from '../../api/VoucherAPI'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// ----------------------------------------------------------------
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify'
import Pagination from '../Pagination/pagination';
import VoucherAPI from '../../api/VoucherAPI';

export const currency = {
    formatToCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

const Wishlist = () => {

    //Start list

    const [Voucher_List, setVoucher_List] = useState([
    ]);
    // ----------------------
    //FetchData
    // ----------------------
    async function fetchData() {
        await voucherAPI.getAll().then(res => {
            setVoucher_List(res.data);
        }).catch(e => {
            alert(e.msg)
        });
    }
    // ----------------------
    //UseEffect
    // ----------------------
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    // ----------------------
    //Filter
    // ----------------------
    useEffect(() => {
        setFiltered(
            Voucher_List.filter((voucher) =>
                voucher.voucherid.toLowerCase().includes(searchById.toLowerCase())
            ))
    }, [searchById, Voucher_List])

    // ----------------------
    //Pagination
    // ----------------------
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
    }
    // ----------------------
    //Return
    // ----------------------
    return (
        <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Voucher list
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
                                                    label="Search by ID"
                                                    type="search"
                                                    onChange={(e) => setsearchById(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <WishlistTable vouchers={currentItem} onDelete={handleDelete} onEdit={viewEdis} />
                        <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Wishlist;