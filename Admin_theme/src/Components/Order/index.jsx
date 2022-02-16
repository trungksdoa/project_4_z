import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import OrderTable from './Order_table.jsx'
import orderAPI from '../../api/Order_trung'
import { useParams } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// ----------------------------------------------------------------
import { toast } from 'react-toastify'
import Pagination from '../Pagination/pagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export const currency = {
    formatToCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Orders = () => {

    const { id } = useParams();
    let initialValues = [];
    const module = {};
    if (id !== undefined) {
        module.fetchAll = async () => {
            await orderAPI.getAllByUserId(id).then(res => {
                setOrder_list(res.data);
            }).catch(e => {
                alert(e.msg)
            });
        }
    } else {
        module.fetchAll = async () => {
            await orderAPI.getAll().then(res => {
                setOrder_list(res.data);
            }).catch(e => {
                alert(e.msg)
            });
        }
    }
    // ------------------------------
    // ================
    // ------------------------------
    const [Order_list, setOrder_list] = useState(initialValues);
    const [searchBySearchCustomer, setSearchCustomer] = useState("");
    const [open, setOpen] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [modalValue, setModalValue] = useState([]);
    const navigate = useNavigate();
    // ------------------------------
    // ================
    // ------------------------------
    const handleChange = async (orderId, value) => {
        let newArr = [...Order_list]; // copying the old datas array
        const index = newArr.findIndex(item => item.orderid === orderId);
        newArr[index].orderstatus = value;
        setTimeout(setOrder_list(newArr), 10000);
        await orderAPI.changeStatus(orderId, value).then(res => {
            toast(res.msg)
        }).catch(err => {
            alert(err.msg)
        });
    };
    // ------------------------------
    // ================
    // ------------------------------
    const ViewDetails = (orderId) => {
        let newArr = [...Order_list]; // copying the old datas array
        const index = newArr.findIndex(item => item.orderid === orderId);
        setModalValue(newArr[index].orderDetailCollection)
        setOpen(true)
    }
    // ------------------------------
    // ================
    // ------------------------------
    const handleClose = () => setOpen(false);
    // ------------------------------
    // ================
    // ------------------------------
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            module.fetchAll();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    // ------------------------------
    // ================
    // ------------------------------
    function fullname(order) {
        const fullname = order.userid.firstName + " " + order.userid.lastName;
        return fullname;
    }
    // ------------------------------
    // ================
    // ------------------------------
    useEffect(() => {
        setFiltered(
            Order_list.filter((review) =>
                fullname(review).toLowerCase().includes(searchBySearchCustomer.toLowerCase())
            ))
    }, [searchBySearchCustomer, Order_list])
    // ------------------------------
    // ================
    // ------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
    }
    const GotoCustomer = () => {
        navigate("/admin/customer/")
    }
    // ------------------------------
    // ================
    // ------------------------------
    return (
        <div className="col-12">
            {id && (
                <a style={{ cursor: 'pointer' }} onClick={GotoCustomer}>Back</a>
            )}
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Order list
                            <Modal
                                open={open}
                                onClose={handleClose}
                            >
                                <Box sx={style}>
                                    <div class="table-responsive" style={{ maxHeight: 300 }}>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Book</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {modalValue.map((order, index) => {
                                                    // console.log(order)
                                                    const { quantity, total, detailid, bookid } = order
                                                    return (
                                                        <tr key={index} >
                                                            <td scope="row">
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        {index + 1}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td >
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        {bookid.bookname}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        {quantity}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex px-2 py-1">
                                                                    <div className="d-flex flex-column justify-content-center">
                                                                        {currency.formatToCurrency(total)}
                                                                    </div>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Box>
                            </Modal>
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
                                                    label="Search by customer"
                                                    type="search"
                                                    onChange={(e) => setSearchCustomer(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrderTable Order={currentItem} onChange={handleChange} onViewDetail={ViewDetails} />
                        <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Orders;