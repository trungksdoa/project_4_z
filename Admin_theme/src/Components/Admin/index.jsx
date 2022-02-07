import React, { useState, useLayoutEffect } from 'react';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-toastify';
import AdminTable from './Admin_table';
import AdminAPI from '../../api/AdminAPI';
const Admins = () => {
    const [adminList, setAdminList] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const navigate = useNavigate();
    async function FetchData() {
        await AdminAPI.getAll().then(res => {
            setAdminList(res.data)
        }).catch(err => {
            setAdminList([]);
            alert(err.msg);
        });
    }
    useLayoutEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            FetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    useLayoutEffect(() => {
        setFiltered(
            adminList.filter((admins) =>
                !admins.roles.toLowerCase().includes('owner')
            ))
    }, [adminList])
    function GotoCreatePage() {
        navigate("/owner/admin/create")
    }
    const handleDelete = async (value) => {
        await AdminAPI.Delete(value).then(res => {
            toast(res.msg);
        }).catch(err => {
            setAdminList([]);
            alert(err.msg);
        });
    }
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <a style={{ cursor: 'pointer' }} onClick={GotoCreatePage}><AddCircleIcon fontSize="large" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Admins list</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <AdminTable data={filtered} onDelete={handleDelete} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admins;