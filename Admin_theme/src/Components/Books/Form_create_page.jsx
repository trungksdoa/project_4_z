import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookAPI from '../../api/BookAPI';
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
        setFormData({ ...formData, "illustrationsnote": data });
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
                bookImage: selectedFile.name,
                bookprice: formData.bookprice,
                bookdescription: formData.bookdescription,
                amounts:formData.amounts,
                language:formData.language,
                pages:formData.pages,
                status:formData.status,
                illustrationsnote:formData.illustrationsnote,
                dimensions:formData.dimensions,


            }
            formDataBody.append("book_string", JSON.stringify(formbody));
            await BookAPI.Create(formDataBody).then(res => {
                toast(res.msg)
                navigator('/admin/book')
            }).catch(err => {
                alert(err.msg)
            })
        } else {
            setIsSubmit(false);
        }
    }
    const validate = (value) => {
        const error = {};
        if (!value.book_name) {
            error.book_name = "Name is required";
        } else if (value.book_name.trim().length <= 10) {
            error.book_name = "Name length must be at max 10 characters";
        } else if (value.book_name.trim().length <= 0) {
            error.book_name = "Name can not blank";
        }
        if (!value.bookdescription) {
            error.bookdescription = "Description is required";
        } else if (value.bookdescription.trim().length <= 10) {
            error.bookdescription = "Description length must be at max 10 characters";
        } else if (value.bookdescription.trim().length <= 0) {
            error.bookdescription = "Description can not blank";
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
        navigator('/admin/book')
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
                                            name="book_name"
                                            fullWidth
                                            value={formData.book_name}
                                            onChange={handleChange}
                                            id="book_name"
                                            label="Book Name"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.book_name}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="bookprice"
                                            fullWidth
                                            value={formData.bookprice}
                                            onChange={handleChange}
                                            id="bookprice"
                                            label="Price"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.bookprice}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="bookdescription"
                                            fullWidth
                                            value={formData.bookdescription}
                                            onChange={handleChange}
                                            id="bookdescription"
                                            label="Description"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.bookdescription}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="amounts"
                                            fullWidth
                                            value={formData.amounts}
                                            onChange={handleChange}
                                            id="amounts"
                                            label="Amounts"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.amounts}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="dimensions"
                                            fullWidth
                                            value={formData.dimensions}
                                            onChange={handleChange}
                                            id="dimensions"
                                            label="Dimensions"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.dimensions}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="language"
                                            fullWidth
                                            value={formData.language}
                                            onChange={handleChange}
                                            id="language"
                                            label="Language"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.language}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="pages"
                                            fullWidth
                                            value={formData.pages}
                                            onChange={handleChange}
                                            id="pages"
                                            label="Pages"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.pages}</p>
                                    </Grid>
                                </div>
                                <div className="col-lg-6">
                                    <Grid item xs={8} sm={12}>
                                        <TextField
                                            name="status"
                                            fullWidth
                                            value={formData.status}
                                            onChange={handleChange}
                                            id="status"
                                            label="Status"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.status}</p>
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
                                    <label>illustrations note: </label>
                                    <CKEditor OnKeyPress={HandleChangeCKEditor} values={formData.illustrationsnote} />
                                    <p style={{ color: "red" }}>{formError.bookdescription}</p>
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