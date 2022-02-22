
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AdminAPI from '../../api/AdminAPI';
import roles from './roles.json';
const Create_form = () => {
    const [formvalue, setFormValue] = useState({ adminemail: "", adminpassword: "", roles: "" })
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formvalue, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(vaildate(formvalue));
        setIsSubmit(true);
        // await AdminAPI.Create(formvalue);
    }
    async function submitAction() {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formvalue)
            await AdminAPI.Create(formvalue).then(res => {
                toast.success(res.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/owner/admin")
            }).catch(err => toast.error(err.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }));
        } else {
            setIsSubmit(false);
        }
    }
    useEffect(() => {
        submitAction();
    }, [formError])
    const backToList = () => {
        navigate("/owner/admin");
    }
    const vaildate = (value) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value.adminemail) {
            error.adminemail = "Email is required";
        } else if (!regex.test(value.adminemail)) {
            error.adminemail = "Email is not correct";
        } else if (value.adminemail.trim().length <= 0) {
            error.adminemail = "Emails can not be blank";
        }

        if (!value.adminpassword) {
            error.adminpassword = "Password is required";
        } else if (value.adminpassword.trim().length <= 0) {
            error.adminpassword = "Password can not be blank";
        } else if (value.adminpassword.trim().length <= 10) {
            error.adminpassword = "Password length needs to be at least 10 characters";
        }
        if (!value.roles) {
            error.roles = "Roles is required";
        }
        return error;
    }
    return (
        <div className="container">
            <div className="col-12">
                <a style={{ cursor: 'pointer' }} onClick={backToList}>Back</a>
                <div className="container">
                    <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
                        <h3 className="text-center">Create new admin</h3>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="adminemail"
                                        fullWidth
                                        id="adminemail"
                                        label="Email"
                                        value={formvalue.adminemail}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formError.adminemail}</p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="adminpassword"
                                        fullWidth
                                        value={formvalue.adminpassword}
                                        type="password"
                                        label="Password"
                                        name="adminpassword"
                                        onChange={handleChange}
                                    />
                                    <p style={{ color: "red" }}>{formError.adminpassword}</p>
                                </Grid>
                            </Grid>
                            <div className="mb-3">
                                <FormControl variant="filled" style={{ marginTop: 30 }} sx={{ m: 0, minWidth: "100%" }}>
                                    <InputLabel id="demo-simple-select-filled-label">Roles</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={formvalue.roles}
                                        fullWidth
                                        onChange={handleChange}
                                        name="roles"
                                    >
                                        {roles.map((item, index) => {
                                            return <MenuItem key={index} value={item}>{item}</MenuItem>;
                                        })}
                                    </Select>
                                    <p style={{ color: "red" }}>{formError.roles}</p>
                                </FormControl>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Create_form;