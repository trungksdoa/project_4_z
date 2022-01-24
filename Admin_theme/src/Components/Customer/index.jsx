import React, { useState, useMemo, useEffect } from 'react';
import CustomerApi from '../../api/CustomerApi';


import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

const Customers = () => {
    const [Listcustomer, setListCustomer] = useState([]);

    // $('#customers').DataTable();
    const fetchCustomers = async () => {
        try {
            const response = await CustomerApi.getAll();
            setListCustomer(response);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const handleAction = () => {

    }
    useEffect(() => {
        fetchCustomers();
        setInterval(() => fetchCustomers(), 2000)
    }, [])
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Customers list</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table id="customers" className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email/Name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Register date</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Modified date</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Check order</th>
                                            <th className="text-secondary opacity-7" />
                                            <th className="text-secondary opacity-7" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Listcustomer.map((item, index) => {
                                            const { userID, status, phone, userCreatedDate, userEmail, userModifiedDate, first_name, last_name } = item;
                                            const full_name = first_name + " " + last_name;

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div className="d-flex flex-column justify-content-center">
                                                                {index}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{full_name}</h6>
                                                                <p className="text-xs text-secondary mb-0">{userEmail}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">+84{phone}</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        {status == 1 ? <span className="badge badge-sm bg-gradient-success">Active</span> : (status == 2 ? <span className="badge badge-sm bg-gradient-warning">Non-active</span> : <span className="badge badge-sm bg-gradient-danger">Banned</span>)}
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">{userCreatedDate}</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">{userModifiedDate}</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <a href="#!" className="text-secondary text-xs font-weight-bold"><i className="fas fa-hand-pointer fa-2x" /></a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a style={{cursor: 'pointer'}} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fas fa-ban fa-2x" />
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#!" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            <i className="fas fa-heart fa-2x" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {/* 
                                    
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        4
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">John Michael</h6>
                                                        <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">+84335857134</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="badge badge-sm bg-gradient-success">Active</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <a href="#!" className="text-secondary text-xs font-weight-bold"><i className="fas fa-hand-pointer fa-2x" /></a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#!" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-ban fa-2x" />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#!" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-heart fa-2x" />
                                                </a>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Customers;