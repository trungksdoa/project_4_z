import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {currency} from'./index.jsx';

const Order_Table = (props) => {
    const { Order, onChange, onDelete, onViewDetail } = props;

    function OnStatusChange(orderId, status) {
        if (onChange) {
            onChange(orderId, status)
        }
    }
    function OnorderDelete(index) {
        if (onDelete) {
            onDelete(index)
        }
    }
    function OnViewDetail(orderId) {
        if (onViewDetail) {
            onViewDetail(orderId)
        }
    }
    return (
        <table id="Revies" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Order address</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Order note</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Order date
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Voucher
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Total
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    <th className="text-center opacity-7" />
                </tr>
            </thead>
            <tbody>
                {Order.length != 0 ? Order.map((order, index) => {
                    const sumtotal = order.orderDetailCollection.reduce((a, b) => a + (b["total"] || 0), 0);
                    const voucher = order.ordervoucher === null ? "No voucher" : order.ordervoucher.vouchertitle
                    return (
                        <tr key={index}>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {order.orderid}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{order.userid.firstName + " " + order.userid.lastName}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{order.orderaddress}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="text-xs font-weight-bold mb-0">
                                    {order.ordernote}
                                </div>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{order.ordercreateddate}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{ voucher}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{currency.formatToCurrency(sumtotal)}</span>
                            </td>
                            <td className="align-middle text-center text-sm">
                                {order.orderstatus === 2 ? (
                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={order.orderstatus}
                                            onChange={(e) => OnStatusChange(order.orderid, e.target.value)}
                                        >
                                            <MenuItem value={1}>Confirm</MenuItem>
                                            <MenuItem value={2}>Pending</MenuItem>
                                            <MenuItem value={3}>Cancle</MenuItem>

                                        </Select>
                                    </FormControl>
                                ) : (
                                    <span className={order.orderstatus === 1 ? "badge badge-sm bg-gradient-success" : "badge badge-sm bg-gradient-danger"}>{order.orderstatus === 1 ? "Comfirmed" : "Cancel"}</span>
                                )}
                            </td>
                            <td className="align-middle">
                                <a style={{ cursor: 'pointer' }} onClick={() => OnViewDetail(order.orderid)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <span style={{ fontSize: "1em", color: "red" }}>
                                        <RemoveRedEyeIcon style={{ fontSize: "1.9em" }} />
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
    )
}
Order_Table.propTypes = {
    orders: PropTypes.array,
    onChange: PropTypes.func,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func
};

Order_Table.defaultProps = {
    orders: [],
    onChange: null,
    onViewDetail: null,
    onDelete: null
};
export default Order_Table;