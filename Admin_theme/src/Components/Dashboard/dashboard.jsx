import React, { useState, useMemo, useLayoutEffect } from 'react';
import CustomerApi from '../../api/CustomerApi';
import { Bar } from 'react-chartjs-2';
import rankAPI from "../../api/RankAPI";
import Bar_comp from './BarChart';
import { UserData } from "./Data";

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};
const Dashboard = () => {

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
            const response = await CustomerApi.getAll();
            setCounts(response.data.length);
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
    useLayoutEffect(() => {
        fetchProductRank();
    }, [])
    useLayoutEffect(() => {
        fetchCustomers();
    }, [])

    useLayoutEffect(() => {
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
    console.log(userData)
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
                                    <p className="text-sm mb-0 text-capitalize">Week's Money</p>
                                    <h4 className="mb-0">$53k</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-3">
                                <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than lask week</p>
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
                                    <p className="text-sm mb-0 text-capitalize">Register customer</p>
                                    <h4 className="mb-0">{countCustomer.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-header p-3 pt-2">
                                <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                    <i className="material-icons opacity-10">weekend</i>
                                </div>
                                <div className="text-end pt-1">
                                    <p className="text-sm mb-0 text-capitalize">Sales</p>
                                    <h4 className="mb-0">$103,430</h4>
                                </div>
                            </div>
                            <hr className="dark horizontal my-0" />
                            <div className="card-footer p-3">
                                <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-sm-6">
                        {productData.length !== 0 && (
                            <Bar_comp options={options} chartData={userData} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;