import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../Navbar/navbar.jsx';
import Sidebar from '../Sidebar/sidebar.jsx';
import CustomerApi from '../../api/CustomerApi';

const Dashboard = () => {
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

    useEffect(() => {
        fetchCustomers();
    }, [])
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
                </div>
            </div>
        </>
    );
}
export default Dashboard;