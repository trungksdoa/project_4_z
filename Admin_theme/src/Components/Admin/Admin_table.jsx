import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

// -----------------------------
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const Admin_table = ({ data, onDelete }) => {
    const [Listdata, setList] = useState([]);
    const navigate = useNavigate();
    const [formvalue, setFormValue] = useState({
        password: "",
        roles: "",
    });
    // $('#customers').DataTable();
    const fetchAdmin = async () => {
        try {
            setList(data);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const handleEdit = (id) => {
        navigate("/owner/admin/" + id)
    }
    const handleDelete = (id) => {
        if (onDelete) {
            onDelete(id);
        }
    }
    useEffect(() => {
        // fetchCustomers();
        fetchAdmin();
    }, [data])
    return (
        <table id="admins" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roles</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Account creation date</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Edit date</th>
                    <th className="text-secondary opacity-7" />
                    <th className="text-center opacity-7" />
                </tr>
            </thead>
            <tbody>
                {Listdata.length != 0 ? Listdata.map((item, index) => {
                    const { adminid, adminemail, adminpassword, admincreateddate, adminmodifieddate, roles } = item
                    return (
                        <tr key={index}>
                            <td>
                                <div className="d-flex px-3 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {adminid}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{adminemail}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{roles}</p>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{admincreateddate}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{adminmodifieddate}</span>
                            </td>
                            <td className="align-middle">
                                <a style={{ cursor: 'pointer' }} onClick={() => handleEdit(adminid)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <i className="fas fa-edit fa-2x" />
                                </a>
                            </td>
                            <td className="align-middle">
                                <a style={{ cursor: 'pointer' }} onClick={() => handleDelete(adminid)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    <i className="fas fa-trash-alt fa-2x" />
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
    );
}
Admin_table.propTypes = {
    data: PropTypes.array,
    onDelete: PropTypes.func,
};

Admin_table.defaultProps = {
    data: [],
    onDelete: null,
};
export default Admin_table;