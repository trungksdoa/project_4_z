import React, { useLayoutEffect, useState } from "react";
import profileAPI from '../../api/profileAPI';
import { useNavigate } from "react-router-dom";
const Page2 = () => {
    const navigate = useNavigate();

    const datasd = {
        orderaddress: "dsdsadsa",
        ordercity: "sadsadsa",
        ordercreateddate: "2022-02-01T17:00:00.000+00:00",
        orderdistrict: "sdasdsa",
        orderid: 3,
        ordernote: "asdsa",
        orderstatus: 1,
        ordervoucher: {},
        userid: {}
    }
    const [list, setList] = useState([datasd]);

    async function fetchData() {
        await profileAPI.OrderList().then(res => {
            setList(res.data)
        }).catch(err => alert(err.msg))
    }
    useLayoutEffect(() => {
        // fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 2000)
        return (() => {
            clearInterval(interval)
        })
    }, []);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div >

                    </div>
                </div>
            </div>
            <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Date order</th>
                        <th>Voucher</th>
                        <th>Delivery address</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {list.length !== 0 ? list.map((value, index) => {
                        const status = value.orderstatus === 1 ? "Confirm" : (value.orderstatus === 2 ? "Pending" : "Cancel")
                        return (
                            <tr key={value.orderid}>
                                <td>{value.orderid}</td>
                                <td style={{ padding: 10 }}><span style={status === "Confirm" ? {color:'green'} : (status === "Pending" ? {color:'black'} : {color: "red" })}>{status}</span></td>
                                <td>{new Date(value.ordercreateddate).toString()}</td>
                                <td>{value.ordervoucher.vouchertitle}</td>
                                <td>
                                    {value.orderaddress + ", " + value.ordercity + ", " + value.orderdistrict}
                                </td>
                                <td>
                                    {value.ordernote}
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
        </>
    );
}

export default Page2