import React, { useState, useMemo, useEffect } from 'react';
import CustomerApi from '../../api/CustomerApi';
import { Bar, Line } from 'react-chartjs-2';
import rankAPI from "../../api/RankAPI";
import Bar_comp from './BarChart';
import LineChar from './LineChar';
import { UserData } from "./Data";
import DashboardAPI from "../../api/DashboardAPI.js";
import './dashboard.css'
const Dashboard = () => {

    function printData(params) {
        var divToPrint = document.getElementById(params);
        const newWin = window.open("/");
        newWin.document.write(divToPrint.outerHTML);
        newWin.print();
        newWin.close();
    }
    //=----------------------------------
    const [countCustomer, setCounts] = useState(0);
    let body = document.getElementsByTagName("body")[0]
        , className = "g-sidenav-pinned";
    const ToggleSidebar = (e) => (
        body.classList.contains(className) ? (body.classList.remove(className)) : (body.classList.add(className),
            e.target.classList.remove("d-none"))
    )
    const fetchCustomers = async () => {
        try {
            const response = await DashboardAPI.gettotaluserByDay();
            setCounts(response.msg);
            // console.log(response.data)
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const [moneyMouth, setMoneyMouth] = useState("");
    const fetchMoneyMouth = async () => {
        try {
            const response = await DashboardAPI.gettotalpriceorderByMouth();
            setMoneyMouth(response.msg);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const [objmounth, setobjMouth] = useState([]);
    const fetchobjMouth = async () => {
        try {
            const response = await DashboardAPI.gettoporder();
            console.log(response.data)
            setobjMouth(response.data);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const [totalOrderBy, setTotalOrderBy] = useState("");
    const fetchTotalOrderByDate = async () => {
        try {
            const response = await DashboardAPI.gettotalorderByDay();
            setTotalOrderBy(response.data.length);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }

    const [productData, setProductData] = useState([]);
    const [userData, setUserData] = useState({});
    const fetchProductRank = async () => {
        await rankAPI.getAll().then((response) => {
            setProductData(response.data.sort())
        }).catch((error) => {
            alert(error.msg)
        })
    }
    const [monthly, setmonthly] = useState([]);
    async function getData() {
        await DashboardAPI.gettotalmonthly()
            .then((res) => {
                setmonthly(res.data);
                // console.log(res)
            })
            .catch(res => alert(res.msg));
    }

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Revenue chart for the year'
            }
        }
    };
    useEffect(() => {
        let controller = new AbortController();
        getData();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        let controller = new AbortController();
        fetchProductRank();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        let controller = new AbortController();
        fetchTotalOrderByDate();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        let controller = new AbortController();
        fetchCustomers();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        let controller = new AbortController();
        fetchMoneyMouth();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        let controller = new AbortController();
        fetchobjMouth();
        return () => controller?.abort();

    }, [])
    useEffect(() => {
        setUserData({
            labels: productData.map((data) => data.book_name),
            datasets: [
                {
                    label: "Product Rank",
                    data: productData.map((data) => data.total_review),
                    backgroundColor: [
                        "rgba(75,192,192,1)",
                        "#ecf0f1",
                        "#50AF95",
                        "#f3ba2f",
                        "#2a71d0",
                    ],
                    borderColor: "black",
                    borderWidth: 2,
                },
            ],
        })
    }, [productData])
    return (
        <>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">weekend</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Month's Money</p>
                                    <h4 className="mb-0">{parseInt(moneyMouth).toFixed(2)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">person</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Register customer by Day</p>
                                    <h4 className="mb-0">{countCustomer}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">Order</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Total Order By Day</p>
                                    <h4 className="mb-0">{totalOrderBy}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <div className="card">
                            <div className="card-header border-transparent">
                                <h3 className="card-title">Revenue statistics by 12 months</h3>
                                <button className="btn btn-outline-info" onClick={() => printData('total')}>Print</button>
                            </div>
                            <div className="card-body p-0" style={{ display: 'block' }}>
                                <div className="table-responsive">
                                    <table className="table m-0" id='total' style={{ border: '1px solid' }}>
                                        <thead>
                                            <tr>
                                                {labels.map(label => {
                                                    return (
                                                        <th style={{ border: '1px solid' }} scope="col">{label}</th>
                                                    )
                                                })}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                {monthly.map(month => {
                                                    return (
                                                        <td style={{ textAlign: 'center', border: '1px solid' }} scope="row">{month}</td>
                                                    )
                                                })}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 50 }}>
                        <div className="card">
                            <div className="card-header border-transparent">
                                <h3 className="card-title">Best Selling Book Rank</h3>
                                <button className="btn btn-outline-info" onClick={() => printData('tbbook')}>Print</button>
                            </div>
                            <div className="card-body p-0" style={{ display: 'block' }}>
                                <div className="table-responsive">
                                    <table className="table m-0" id='tbbook'>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "center", border: '1px solid' }}>NO</th>
                                                <th style={{ textAlign: "center", border: '1px solid' }}>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {objmounth.map((obj, index) => {
                                                return (
                                                    <tr>
                                                        <td style={{ textAlign: "center", border: '1px solid' }}>{index + 1}</td>
                                                        <td style={{ textAlign: "center", border: '1px solid' }}>{obj.bookname}</td>
                                                    </tr>
                                                )
                                            })}



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <div className="card-footer clearfix" style={{ display: 'block' }}>
                                <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;