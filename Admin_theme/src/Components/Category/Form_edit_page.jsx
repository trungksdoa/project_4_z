import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryAPI from '../../api/CategoryAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';

// -------------------------------
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const FormPage = () => {
    // -------------------------

    const [catagory, setCatagory] = React.useState([]);
    const handleChangeCatagory = (event) => {
        const {
            target: { value },
        } = event;
        setCatagory(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    // --------------------------
    const initialValues = {
        catagorycreateddate: "",
        catagorydescription: "",
        catagoryid: 27,
        catagorymodifieddate: "",
        catagoryname: ""
    }
    const [formData, setFormData] = useState(initialValues)

    const [formError, setformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedFile, setFiles] = useState(null);
    const [imgData, setImgData] = useState(null);
    const formDataBody = new FormData();

    const fileUploader = useRef();

    const navigator = useNavigate();

    const { id } = useParams();

    const fetchData = async () => {
        await CategoryAPI.FindOne(id).then((category) => {
            setFormData(category.data);
            //setPreData(category.data)
            // console.log(category.data)
        }).catch((err) => alert(err.msg));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const validateResult = validate(formData);
        setformError(validateResult)
        setIsSubmit(true);
    }
    const handleSubmit = async () => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            const formbody = {
                category_name: formData.catagoryname,
                category_description: formData.catagorydescription
            }
            formDataBody.append("categorys_string", JSON.stringify(formbody));
            await CategoryAPI.Edit(id,formDataBody).then(res => {
                toast(res.msg)
            }).catch(err => {
                alert(err.msg)
            })
        } else {
            setIsSubmit(false);
        }
    }
    const validate = (value) => {
        const error = {};
        if (!value.catagoryname) {
            error.catagoryname = "Catagory name is required";
        } else if (value.catagoryname.trim().length <= 3) {
            error.catagoryname = "Catagory name length must be at max 3 characters";
        } else if (value.catagoryname.trim().length <= 0) {
            error.catagoryname = "Catagory name can not blank";
        }
        if (!value.catagorydescription) {
            error.catagorydescription = "Catagory Description is required";
        } else if (value.catagorydescription.trim().length <= 10) {
            error.catagorydescription = "Catagory Description length must be at max 10 characters";
        } else if (value.catagorydescription.trim().length <= 0) {
            error.catagorydescription = "Catagory Description can not blank";
        }
        return error;
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        handleSubmit();
    }, [formError])
    
    const goBackList = () => {
        navigator('/admin/category')
    }
    return (
        
        <div className="container">
            
            <div className="col-12">
                <a style={{ cursor: 'pointer' }} onClick={goBackList}>Back</a>
                <div className="container">
                    <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
                        <h3 className="text-center">Update Category</h3>
                        
                        <form onSubmit={handleClick}>
                            
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            name="catagoryname"
                                            fullWidth
                                            value={formData.catagoryname}
                                            onChange={handleChange}
                                            id="catagoryname"
                                            label="Category name"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.catagoryname}</p>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            name="catagorydescription"
                                            fullWidth
                                            value={formData.catagorydescription}
                                            onChange={handleChange}
                                            id="catagorydescription"
                                            label="Category Description"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.catagorydescription}</p>
                                    </Grid>
                                    </Grid>
                                
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FormPage