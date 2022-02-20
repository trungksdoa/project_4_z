import React, { useLayoutEffect, useState } from "react";
import profileAPI from '../../api/profileAPI';
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
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


const Page2 = () => {
    const initialValues = {
        orderaddress: "dsdsadsa",
        ordercity: "sadsadsa",
        ordercreateddate: "2022-02-01T17:00:00.000+00:00",
        orderdistrict: "sdasdsa",
        orderid: 3,
        ordernote: "asdsa",
        orderstatus: 1,
        ordervoucher: {vouchervalue: 0},
        userid: {},
        orderDetailCollection: []
    }

    const [list, setList] = useState([initialValues]);
    const { pathname } = useLocation();
    const [modalValue, setModalValue] = useState([]);
    const [open, setOpen] = useState(false);
    
    const handleClose = () => setOpen(false);
    //Cookie
    const [cookies, setCookie, removeCookie] = useCookies(['loggin']);
    //Check is loggin
    // const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;
    const navigate = useNavigate();

    async function fetchData() {
        await profileAPI.OrderList(cookies.loggin.userID).then(res => {
            setList(res.data)
        }).catch(err => alert(err.msg))
    }
    const ViewDetails = (orderId) => {
        let newArr = [...list]; // copying the old datas array
        const index = newArr.findIndex(item => item.orderid === orderId);
        setModalValue(newArr[index].orderDetailCollection)
        setOpen(true)
    }
    useLayoutEffect(() => {
        fetchData()
    }, [pathname]);


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="table-responsive" style={{ maxHeight: 300 }}>
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
            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Date order</th>
                        <th>Voucher</th>
                        <th>Delivery address</th>
                        <th>Note</th>
                        <th>Total</th>
                        <th>Show product</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length !== 0 ? list.map((value, index) => {
                        const status = value.orderstatus === 1 ? "Confirm" : (value.orderstatus === 2 ? "Pending" : "Cancel")
                        const sumtotal = value.orderDetailCollection.reduce((a, b) => a + (b["total"] || 0), 0);
        
                        return (
                            <tr key={value.orderid}>
                                <td>{value.orderid}</td>
                                <td style={{ padding: 10 }}><span style={status === "Confirm" ? { color: 'green' } : (status === "Pending" ? { color: 'purple' } : { color: "red" })}>{status}</span></td>
                                <td>{new Date(value.ordercreateddate).toString()}</td>
                                <td>{value.ordervoucher !== null && ( value.ordervoucher.vouchertitle)}</td>
                                <td>
                                    {value.orderaddress + ", " + value.ordercity + ", " + value.orderdistrict}
                                </td>
                                <td>
                                    {value.ordernote}
                                </td>
                                <td>
                                    {value.ordervoucher !== null ? (sumtotal-(sumtotal*value.ordervoucher.vouchervalue)/100) : (sumtotal)}
                                   {/* {currency.formatToCurrency(sumtotal)}{sumtotal-(sumtotal*value.ordervoucher.vouchervalue)/100} */}
                                </td>
                                <td>
                                    <button onClick={() => ViewDetails(value.orderid)}>Show product</button>
                                </td>
                            </tr>
                        )
                    }) : (
                        <tr>
                            <td colSpan="9999" style={{ textAlign: "center" }}>No order found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Page2