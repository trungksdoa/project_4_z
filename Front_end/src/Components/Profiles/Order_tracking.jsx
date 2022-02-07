import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
export const fakeOrder = [
    {
        id: 1,
        status: 1,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: true
    },
    {
        id: 2,
        status: 1,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: false
    }, {
        id: 3,
        status: 1,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: false
    }, {
        id: 4,
        status: 2,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: false
    }, {
        id: 5,
        status: 2,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: false
    }, {
        id: 6,
        status: 3,
        dateOrder: "2022/02/24",
        Voucher: "FREESHIP2020",
        Address: "1494/12 address",
        note: "10 gio 20 nhe :)))",
        isReview: false
    },
]
const Page2 = () => {
    const navigate = useNavigate();

    const [list, setList] = useState([]);
    useEffect(() => {
        setList(fakeOrder);
    }, []);

    // const newList = [];
    const updateConfirm = (id) => {
        const updatedData = list.map(x => (x.id === id ? { ...x, status: 3 } : x));
        setList(updatedData)
    }

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
                    {list.map((value, index) => {
                        return (<tr key={value.id}>
                            <td>{value.id}</td>
                            <td style={value.status === 1 ? { background: 'rgb(0 255 255)', padding: 10 } : (value.status === 2 ? { background: 'yellow', padding: 10 } : { background: '#00f800', padding: 10 })}>{value.status === 1 ? "Delivered" : (value.status === 2 ? "Undelivered" : "Confirmed")}</td>
                            <td>{value.dateOrder}</td>
                            <td>{value.Voucher}</td>
                            <td>
                                {value.Address}
                            </td>
                            <td>
                                {value.note}
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Page2