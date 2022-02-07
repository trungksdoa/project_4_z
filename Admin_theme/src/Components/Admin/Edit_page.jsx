
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import AdminAPI from '../../api/AdminAPI';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {toast} from 'react-toastify'
import roles from './roles.json';
const Edit_form = () => {
    const [formvalue, setFormValue] = useState({ adminemail: "", adminpassword: "", roles: "" })
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showOrHide, setShowOrHide] = useState("hide");
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

    const { id } = useParams();

    async function getUser() {
        await AdminAPI.findOne(id).then(res => {
            setFormValue(res.data)
        }).catch(err => {
            if (err.status === 404) {
                navigate("/notfound")
            } else {
                alert(err.msg)
            }
        }
        );

    }
    async function submitAction() {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formvalue)
            await AdminAPI.Edit(id, formvalue).then(res => {
                toast(res.msg)
            }).catch(err => alert(err.msg));
        } else {
            setIsSubmit(false);
        }
    }
    function ChangeShowHide() {
        setShowOrHide(showOrHide == "show" ? "hide" : "show")
    }
    useEffect(() => {
        submitAction();
    }, [formError])

    useEffect(() => {
        getUser();
    }, [])

    const backToList = () => {
        navigate("/owner/admin");
    }
    const vaildate = (value) => {
        const error = {};
        if (!value.adminpassword) {
            error.adminpassword = "Password is required";
        } else if (value.adminpassword.trim().length <= 0) {
            error.adminpassword = "Password can not be blank";
        } else if (value.adminpassword.trim().length <= 10) {
            error.adminpassword = "Password length needs to be at least 10 characters";
        }
        return error;
    }
    return (
        <div className="container">
            <div className="col-12">
                <a style={{ cursor: 'pointer' }} onClick={backToList}>Back</a>
                <div className="container">
                    <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
                        <h3 className="text-center">Update admin</h3>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="adminemail"
                                        fullWidth
                                        disabled
                                        id="adminemail"
                                        label="Email"
                                        value={formvalue.adminemail}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div className="input-group" style={{float:"left"}}>
                                        <TextField
                                            id="adminpassword"
                                            fullWidth
                                            value={formvalue.adminpassword}
                                            type={showOrHide == "show" ? "text" : "password"}
                                            label="Password"
                                            name="adminpassword"
                                            onChange={handleChange}
                                        >
                                        </TextField>
                                        <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={ChangeShowHide}>
                                            {showOrHide === "show" && (
                                                <VisibilityOffIcon />
                                            )}
                                            {showOrHide === "hide" && (
                                                <VisibilityIcon />
                                            )}
                                        </span>
                                    </div>

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
export default Edit_form;