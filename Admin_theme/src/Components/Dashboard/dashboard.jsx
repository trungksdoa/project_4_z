import React, { useState, useMemo, useLayoutEffect } from 'react';
import CustomerApi from '../../api/CustomerApi';
import { Bar, Line } from 'react-chartjs-2';
import rankAPI from "../../api/RankAPI";
import Bar_comp from './BarChart';
import LineChar from './LineChar';
import { UserData } from "./Data";
import DashboardAPI from "../../api/DashboardAPI.js";

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

export const data = {
    labels,
    datasets: [{
            label: 'Dataset 1',
            data: [1,2,3,4,5,6,7,8,9,10,11,12],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: [1,2,3,4,5,6,7,8,9,10,11,12],

            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
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
    useLayoutEffect(() => {
        fetchProductRank();
    }, [])
    useLayoutEffect(() => {
        fetchTotalOrderByDate();
    }, [])
    useLayoutEffect(() => {
        fetchCustomers();
    }, [])
    useLayoutEffect(() => {
        fetchMoneyMouth();
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
                                    <p className="text-sm mb-0 text-capitalize">Register customer today</p>
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
                                    <p className="text-sm mb-0 text-capitalize">Total By Date</p>
                                    <h4 className="mb-0">{totalOrderBy}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-sm-6">
                        {productData.length !== 0 && (
                            <LineChar options={options} chartData={userData} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;