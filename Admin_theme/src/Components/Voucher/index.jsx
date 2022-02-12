import React, { useState, useEffect, useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import VoucherTable from './Voucher_table.jsx'
import voucherAPI from '../../api/VoucherAPI'
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
// ----------------------------------------------------------------
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify'
import Pagination from '../Pagination/pagination';
import VoucherAPI from '../../api/VoucherAPI';

export const currency = {
    formatToCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}

const Vouchers = () => {

    //Start list

    const [Voucher_List, setVoucher_List] = useState([
    ]);

    // ----------------------
    //Start data
    // ----------------------
    const initialValues = {
        voucherdescription: "",
        voucherfrom: new Date(),
        voucherid: "",
        voucherstatus: 1,
        vouchertitle: "",
        voucherto: new Date(),
        vouchervalue: 1
    }
    // ----------------------
    //Form data
    // ----------------------
    const [formData, setFormData] = useState(initialValues);
    // ----------------------
    //Form Error
    // ----------------------
    const [formError, setFormErrors] = useState({});
    // ----------------------
    //Check is submit
    // ----------------------
    const [isSubmit, setIsSubmit] = useState(false);
    // ----------------------
    //Check is edit
    // ----------------------
    const [isEdit, setIsEdit] = useState(false);


    // ----------------------
    //Regex
    // ----------------------
    const Only_number = /^[0-9\b]+$/;
    const character_only = /^[a-z\sA-Z]+$/g;

    // ----------------------
    //Validate data
    // ----------------------
    const validate = (value) => {
        const error = {};
        if (!value.vouchertitle) {
            error.vouchertitle = "Title is required";
        } else if (value.vouchertitle.trim().length <= 0) {
            error.vouchertitle = "Title can not blank";
        } else if (value.voucherdescription.trim().length > 50) {
            error.voucherdescription = "String length must be less than 50 characters";
        }
        if (!value.voucherdescription) {
            error.voucherdescription = "Title is required";
        } else if (value.voucherdescription.trim().length <= 0) {
            error.voucherdescription = "Title can not blank";
        } else if (value.voucherdescription.trim().length > 255) {
            error.voucherdescription = "String length must be less than 255 characters";
        }
        if (!value.voucherid) {
            error.voucherid = "ID is required";
        } else if (value.voucherid.trim().length <= 0) {
            error.voucherid = "ID can not blank";
        } else if (value.voucherid.trim().length > 50) {
            error.voucherid = "String length must be less than 50 characters";
        }
        return error;
    }
    // ----------------------
    //Handle error
    // ----------------------
    const handlePrevent = (e) => {
        e.preventDefault();
        setFormErrors(validate(formData))
        setIsSubmit(true);
    }

    // ----------------------
    //Reset Form
    // ----------------------
    const handleResetForm = () => {
        setFormData(initialValues)
        setFormErrors({})
    };
    // ----------------------
    //removeLeadingZeros
    // ----------------------
    function removeLeadingZeros(str) {
        // Regex to remove leading
        // zeros from a string
        const regex = new RegExp("^0+(?!$)", 'g');

        // Replaces the matched
        // value with given string
        str = str.replaceAll(regex, "");

        return str;
    }
    // ----------------------
    //Handle SetValue
    // ----------------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "vouchervalue") {
            if (Only_number.test(value)) {
                if (parseInt(value) >= 1 && parseInt(value) <= 100) {
                    setFormData({ ...formData, [name]: removeLeadingZeros(value) });
                }
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }
    // ----------------------
    //Handle submit
    // ----------------------
    const handleSubmit = async () => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log("call")
            if (isEdit) {
                await VoucherAPI.Update(formData.voucherid, formData).then(res => {
                    toast("Update voucher successfully")
                    setIsEdit(false);
                    setIsSubmit(false);
                    handleResetForm()
                }).catch(error => {
                    alert(error.msg)
                });
            } else {
                await VoucherAPI.Save(formData).then(res => {
                    toast("Create voucher successfully")
                    setIsSubmit(false);
                }).catch(error => {
                    alert(error.msg)
                });
            }
           
        } else {
            setIsSubmit(false);
        }
    }
    // ----------------------
    //Handle Edit
    // ----------------------
    const viewEdis = (voucherId) => {
        let newArr = [...Voucher_List]; // copying the old datas array
        const index = newArr.findIndex(item => item.voucherid === voucherId);
        setFormData(newArr[index]);
        setIsEdit(true);
    }
    // ----------------------
    //UseEffect call handleSubmit when it true
    // ----------------------
    useEffect(() => {
        handleSubmit();
    }, [formError])

    //SubmitForm END

    // ----------------------
    //Set value Search
    // ----------------------
    const [searchById, setsearchById] = useState("");
    // ----------------------
    //Filter 
    // ----------------------
    const [filtered, setFiltered] = useState([]);
    // ----------------------
    //Redirect
    // ----------------------
    const navigate = useNavigate();
    // ----------------------
    //HandleDelete
    // ----------------------
    const handleDelete = async (voucherId) => {
        // window.confirm returns a boolean, true or false, based on whether the user pressed 'Ok' (which will result in true) or 'Cancel' (which will result in false)
        if (window.confirm("This is a dangerous action do you want to continue?")) {
            await VoucherAPI.Deleted(voucherId).then(res => {
                toast(res.msg);
            }).catch(e => {
                console.log(e)
                alert(e.msg)
            })

        } else {
            //
        }
    };
    // ----------------------
    //FetchData
    // ----------------------
    async function fetchData() {
        await voucherAPI.getAll().then(res => {
            setVoucher_List(res.data);
        }).catch(e => {
            alert(e.msg)
        });
    }
    // ----------------------
    //UseEffect
    // ----------------------
    useEffect(() => {
        // fetchCustomers();
        const interval = setInterval(() => {
            fetchData();
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    // ----------------------
    //Filter
    // ----------------------
    useEffect(() => {
        setFiltered(
            Voucher_List.filter((voucher) =>
                voucher.voucherid.toLowerCase().includes(searchById.toLowerCase())
            ))
    }, [searchById, Voucher_List])

    // ----------------------
    //Pagination
    // ----------------------
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 5;

    const itemOfLast = currentPage * itemsPerPage;
    const itemOfFirst = itemOfLast - itemsPerPage;
    const currentItem = filtered.slice(itemOfFirst, itemOfLast)

    const paginate = page => {
        setCurrentPage(page)
    }
    // ----------------------
    //Return
    // ----------------------
    return (
        <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-white text-capitalize ps-3">Voucher list
                        </h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="pt-4 pb-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                                <TextField
                                                    id="filled-search"
                                                    label="Search by ID"
                                                    type="search"
                                                    onChange={(e) => setsearchById(e.target.value)}
                                                    variant="filled"
                                                />
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <VoucherTable vouchers={currentItem} onDelete={handleDelete} onEdit={viewEdis} />
                        <Pagination PerPage={itemsPerPage} total={filtered.length} paginate={paginate} currenPages={currentPage} />

                        <div className="container">
                            <div className="col-12">
                                <div className="container">
                                    <div className="admin_card" style={{ maxWidth: 600, width: "auto", margin: "auto" }}>
                                        <h3 className="text-center">{!isEdit ? "Create" : "Edit"} Voucher</h3>
                                        <form onSubmit={handlePrevent} id="Voucher-form">
                                            <Grid container spacing={2}>
                                                {!isEdit && (
                                                    <>
                                                        <Grid item xs={12} sm={12} lg={12}>
                                                            <TextField
                                                                name="voucherid"
                                                                fullWidth
                                                                value={formData.voucherid}
                                                                onChange={handleChange}
                                                                id="voucherid"
                                                                label="Voucher Id"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherid}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} lg={12}>
                                                            <TextField
                                                                name="vouchertitle"
                                                                fullWidth
                                                                value={formData.vouchertitle}
                                                                onChange={handleChange}
                                                                id="vouchertitle"
                                                                label="Voucher title"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.vouchertitle}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                name="voucherdescription"
                                                                fullWidth
                                                                value={formData.voucherdescription}
                                                                onChange={handleChange}
                                                                id="voucherdescription"
                                                                label="Banner description"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherdescription}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                name="vouchervalue"
                                                                fullWidth
                                                                value={formData.vouchervalue}
                                                                onChange={handleChange}
                                                                id="vouchervalue"
                                                                label="Value %"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.vouchervalue}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <label>Expired date</label>
                                                            <DatePicker
                                                                dateFormat="yyyy/MM/dd HH:mm:ss"
                                                                selected={new Date(formData.voucherto)}
                                                                className={"form-control"}
                                                                style={{ border: "1px solid" }}
                                                                onChange={(date) => setFormData({ ...formData, voucherto: date })}
                                                                withPortal
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherto}</p>
                                                        </Grid>
                                                    </>
                                                )}

                                                {isEdit && (
                                                    <>
                                                        <Grid item xs={12} sm={12} lg={12}>
                                                            <TextField
                                                                name="voucherid"
                                                                fullWidth
                                                                disabled={true}
                                                                value={formData.voucherid}
                                                                onChange={handleChange}
                                                                id="voucherid"
                                                                label="Voucher Id"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherid}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} lg={12}>
                                                            <TextField
                                                                name="vouchertitle"
                                                                fullWidth
                                                                value={formData.vouchertitle}
                                                                onChange={handleChange}
                                                                id="vouchertitle"
                                                                label="Voucher title"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.vouchertitle}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                name="voucherdescription"
                                                                fullWidth
                                                                value={formData.voucherdescription}
                                                                onChange={handleChange}
                                                                id="voucherdescription"
                                                                label="Banner description"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherdescription}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <TextField
                                                                name="vouchervalue"
                                                                fullWidth
                                                                value={formData.vouchervalue}
                                                                onChange={handleChange}
                                                                id="vouchervalue"
                                                                label="Value %"
                                                                autoFocus
                                                            />
                                                            <p style={{ color: "red" }}>{formError.vouchervalue}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <label>From date</label>
                                                            <DatePicker
                                                                dateFormat="yyyy/MM/dd HH:mm:ss"
                                                                selected={new Date(formData.voucherfrom)}
                                                                className={"form-control"}
                                                                style={{ border: "1px solid" }}
                                                                onChange={(date) => setFormData({ ...formData, voucherfrom: date })}
                                                                withPortal
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherfrom}</p>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12}>
                                                            <label>Expired date</label>
                                                            <DatePicker
                                                                dateFormat="yyyy/MM/dd HH:mm:ss"
                                                                selected={new Date(formData.voucherto)}
                                                                className={"form-control"}
                                                                style={{ border: "1px solid" }}
                                                                onChange={(date) => setFormData({ ...formData, voucherto: date })}
                                                                withPortal
                                                            />
                                                            <p style={{ color: "red" }}>{formError.voucherto}</p>
                                                        </Grid>
                                                    </>
                                                )}

                                            </Grid>
                                            <div className="mb-3">
                                                <button className="btn btn-primary" type="submit">Submit</button>
                                                &nbsp;&nbsp;
                                                <button className="btn btn-waring" onClick={handleResetForm} type="button">Reset</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Vouchers;