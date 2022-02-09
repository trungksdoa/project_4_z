import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BannerAPI from '../../api/BannerAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import CKEditor from '../Pagination/CK_Editor.jsx'

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
    const [formData, setFormData] = useState({
    })
    const [formError, setformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [selectedFile, setFiles] = useState(null);
    const [imgData, setImgData] = useState(null);
    const formDataBody = new FormData();

    const fileUploader = useRef();

    const navigator = useNavigate();

    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const HandleChangeCKEditor = (event, editor) => {
        const data = editor.getData();
        setFormData({ ...formData, "banner_content": data });
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const validateResult = validate(formData);
        setformError(validateResult)
        setIsSubmit(true);
    }
    const handleSubmit = async () => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            formDataBody.append("file", selectedFile);
            const formbody = {
                bannerImage: selectedFile.name,
                bannerTitle: formData.banner_title,
                bannerContent: formData.banner_content
            }
            formDataBody.append("banner_string", JSON.stringify(formbody));
            await BannerAPI.SaveFormData(formDataBody).then(res => {
                toast(res.msg)
                navigator('/admin/banner')
            }).catch(err => {
                alert(err.msg)
            })
        } else {
            setIsSubmit(false);
        }
    }
    const validate = (value) => {
        const error = {};
        if (!value.banner_title) {
            error.banner_title = "Title is required";
        } else if (value.banner_title.trim().length <= 10) {
            error.banner_title = "Title length must be at max 10 characters";
        } else if (value.banner_title.trim().length <= 0) {
            error.banner_title = "Title can not blank";
        }
        if (!value.banner_content) {
            error.banner_content = "Title is required";
        } else if (value.banner_content.trim().length <= 10) {
            error.banner_content = "Content length must be at max 10 characters";
        } else if (value.banner_content.trim().length <= 0) {
            error.banner_content = "Content can not blank";
        }
        if (selectedFile == null) {
            error.file = "Image is required";
        }
        return error;
    }
    useEffect(() => {
        handleSubmit();
    }, [formError])

    const upload = () => {
        fileUploader.current.click();
    }

    const HandleImageChange = (e) => {
        var file = {}
        const { files } = e.target;
        if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
            console.log(files[0].size)

            if (files[0].size > 5120000) {
                alert("Invalid size , must be < 5 mb")
            } else {
                for (let index = 0; index < files.length; index++) {
                    const element = files[index];
                    file.lastModified = element.lastModified
                    file.lastModifiedDate = element.lastModifiedDate
                    file.name = element.name
                    file.size = element.size
                    file.type = element.type
                }
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    setImgData(reader.result);
                });
                reader.readAsDataURL(files[0]);


                setFiles(files[0])
                //Append data

                // 
            }
        } else {
            alert("Invalid type");
            fileUploader.current.value = "";
        }
    }
    const goBackList = () => {
        navigator('/admin/banner')
    }
    return (
        <div className="container">
            <div className="col-12">
                <a style={{ cursor: 'pointer' }} onClick={goBackList}>Back</a>
                <div className="container">
                    <div className="admin_card" style={{ width: "100%", margin: "auto" }}>
                        <h3 className="text-center">Add Book</h3>
                        <form onSubmit={handleClick}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="banner_title"
                                            fullWidth
                                            value={formData.banner_title}
                                            onChange={handleChange}
                                            id="banner_title"
                                            label="Banner title"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.banner_title}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-12">
                                    <FormControl sx={{ m: 0, width: "100%" }}>
                                        <InputLabel id="demo-multiple-checkbox-label">Catagory</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={catagory}
                                            onChange={handleChangeCatagory}
                                            input={<OutlinedInput label="Catagory" />}
                                            renderValue={(selected) => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={catagory.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-lg-12">
                                    <label>Description: </label>
                                    <CKEditor OnKeyPress={HandleChangeCKEditor} values={formData.banner_content} />
                                    <p style={{ color: "red" }}>{formError.banner_content}</p>
                                </div>
                                <div className="col-lg-12 text-center">
                                    {imgData !== null && (
                                        <img src={imgData} alt="" width={350} height={350} />
                                    )}
                                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                    <p style={{ color: "red" }}>{formError.file}</p>
                                    {/* Profile picture upload button*/}
                                    <input type="file" name="image" ref={fileUploader} onChange={(e) => HandleImageChange(e)} style={{ display: "none" }} />
                                    <button className="btn btn-primary" onClick={upload} type="button">Upload new image</button>
                                </div>
                            </div>
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