import React, { useLayoutEffect, useState, useRef } from "react";
import profileAPI from '../../api/profileAPI';
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Pagination from '../Pagination/pagination'

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
    width: 'auto',
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
        ordervoucher: { vouchervalue: 0 },
        userid: {},
        orderDetailCollection: []
    }
    const sumTotalPrice = useRef(0.00);
    const sumTotalAfterDiscountPrice = useRef(0.00);
    const statuss = useRef();
    const Discount = useRef({
        voucherdescription: "",
        voucherfrom: "",
        voucherid: "",
        voucherstatus: 0,
        vouchertitle: "",
        voucherto: "",
        voucherused: 0,
        vouchervalue: 0
    });
    const Orderds = useRef({
        orderaddress: "",
        ordercity: "",
        ordercreateddate: "",
        orderdistrict: "",
        orderid: 0,
        ordernote: "",
        orderstatus: 1,
        userid: {
            firstName: "Vo",
            lastName: "soda",
            phone: "0767468440",
            useremail: "trungksdoa@gmail.com"
        }
    });


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

        const status = newArr[index].orderstatus === 1 ? "Confirm" : (newArr[index].orderstatus === 2 ? "Pending" : "Cancel")
        const sumtotal = newArr[index].orderDetailCollection.reduce((a, b) => a + (b["total"] || 0), 0);
        sumTotalAfterDiscountPrice.current = newArr[index].ordervoucher !== null ? (sumtotal - (sumtotal * newArr[index].ordervoucher.vouchervalue) / 100) : (sumtotal)
        sumTotalPrice.current = sumtotal;
        statuss.current = status
        Discount.current = newArr[index].ordervoucher !== null ? newArr[index].ordervoucher : null
        Orderds.current = newArr[index];
        setModalValue(newArr[index].orderDetailCollection)
        setOpen(true)
    }
    useLayoutEffect(() => {
        fetchData()
    }, [pathname]);


    const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 4;

	const itemOfLast = currentPage * itemsPerPage;
	const itemOfFirst = itemOfLast - itemsPerPage;
	const currentItem = list.slice(itemOfFirst, itemOfLast)


	const paginate = page => {
		setCurrentPage(page)
	}
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <div className="container-fluid">
                        <div className="container">
                            {/* Title */}
                            <div className="d-flex justify-content-between align-items-center py-3">
                                <h2 className="h5 mb-0"><a href="#" className="text-muted" /> Order #{Orderds.current.orderid}</h2>
                            </div>
                            {/* Main content */}
                            <div className="row">
                                <div className="col-lg-8">
                                    {/* Details */}
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="mb-3 d-flex justify-content-between">
                                                <div>
                                                    <span className="me-3">{Orderds.current.ordercreateddate}</span>                                                </div>
                                                <div className="d-flex">
                                                    <button className="btn btn-link p-0 me-3 d-none d-lg-block btn-icon-text"><i className="bi bi-download" /> <span className="text">Invoice</span></button>
                                                    <div className="dropdown">
                                                        <button className="btn btn-link p-0 text-muted" type="button" data-bs-toggle="dropdown">
                                                            <i className="bi bi-three-dots-vertical" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil" /> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="bi bi-printer" /> Print</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="table table-borderless" >
                                                <tbody>
                                                    {modalValue.map((order, index) => {

                                                        // console.log(order)
                                                        const { quantity, total, detailid, bookid } = order


                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="d-flex mb-2">
                                                                        <div className="flex-shrink-0">
                                                                            <img src={"http://localhost:9999/image/" + bookid.pdetailid.imageLink + "?v=" + new Date().getTime()} alt="" width={35} className="img-fluid" />
                                                                        </div>
                                                                        <div className="flex-lg-grow-1 ms-3">
                                                                            <h6 className="small mb-0"><a href="#" className="text-reset">{bookid.bookname}</a></h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{quantity}</td>
                                                                <td className="text-end">${currency.formatToCurrency(total)}</td>
                                                            </tr>
                                                        )
                                                    })}

                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colSpan={2} style={{ textAlign: "left" }}>Subtotal</td>
                                                        <td className="text-end">${sumTotalPrice.current.toFixed(2)}</td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={2} style={{ textAlign: "left" }}>Discount (Code: {Discount.current !== null ? Discount.current.voucherid : 0})</td>
                                                        <td className="text-danger text-end">-${Discount.current !== null ? Discount.current.vouchervalue : 0}</td>
                                                    </tr>
                                                    <tr className="fw-bold">
                                                        <td colSpan={2} style={{ textAlign: "left" }}>TOTAL</td>
                                                        <td className="text-end">${sumTotalAfterDiscountPrice.current.toFixed(2)}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {/* Customer Notes */}
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h3 className="h6">Customer Notes</h3>
                                            <p>{Orderds.current.ordernote}</p>
                                        </div>
                                    </div>
                                    <div className="card mb-4">
                                        {/* Shipping information */}
                                        <div className="card-body">
                                            <h3 className="h6">Shipping Information</h3>

                                            <hr />
                                            <h3 className="h6">Address</h3>
                                            <address>
                                                <strong>John Doe</strong><br />
                                                1355 Market St, Suite 900<br />
                                                San Francisco, CA 94103<br />
                                                <abbr title="Phone">P:</abbr> (123) 456-7890
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                    {currentItem.length !== 0 ? currentItem.map((value, index) => {
                        const status = value.orderstatus === 1 ? "Confirm" : (value.orderstatus === 2 ? "Pending" : "Cancel")
                        const sumtotal = value.orderDetailCollection.reduce((a, b) => a + (b["total"] || 0), 0);

                        return (
                            <tr key={value.orderid}>
                                <td>{value.orderid}</td>
                                <td style={{ padding: 10 }}><span style={status === "Confirm" ? { color: 'green' } : (status === "Pending" ? { color: 'purple' } : { color: "red" })}>{status}</span></td>
                                <td>{new Date(value.ordercreateddate).toString()}</td>
                                <td>{value.ordervoucher !== null && (value.ordervoucher.voucherid)}</td>
                                <td>
                                    {value.orderaddress + ", " + value.ordercity + ", " + value.orderdistrict}
                                </td>
                                <td>
                                    {value.ordernote}
                                </td>
                                <td>
                                    {value.ordervoucher !== null ? (sumtotal - (sumtotal * value.ordervoucher.vouchervalue) / 100) : (sumtotal)}
                                    {/* {currency.formatToCurrency(sumtotal)}{sumtotal-(sumtotal*value.ordervoucher.vouchervalue)/100} */}
                                </td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => ViewDetails(value.orderid)}>Detail</button>
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
            <Pagination PerPage={itemsPerPage} total={list.length} paginate={paginate} currenPages={currentPage} />
        </>
    );
}

export default Page2