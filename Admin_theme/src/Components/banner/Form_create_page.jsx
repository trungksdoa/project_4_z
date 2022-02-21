import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BannerAPI from '../../api/BannerAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import CKEditor from '../Pagination/CK_Editor.jsx'
const FormPage = () => {
    const [formData, setFormData] = useState({
        banner_Image: "",
        banner_content: "",
        banner_createddate: "",
        banner_id: 1,
        banner_modifieddate: "",
        banner_title: ""
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
                toast.success(res.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigator('/admin/banner')
            }).catch(err => {
                toast.error(err.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
        } else {
            setIsSubmit(false);
        }
    }
    const validate = (value) => {
        const error = {};
        if (!value.banner_title) {
            error.banner_title = "Title is required";
        } else if (value.banner_title.trim().length <= 3) {
            error.banner_title = "Title length must be at max 3 characters";
        } else if (value.banner_title.trim().length <= 0) {
            error.banner_title = "Title can not blank";
        }
        if (!value.banner_content) {
            error.banner_content = "Title is required";
        } else if (value.banner_content.trim().length <= 3) {
            error.banner_content = "Content length must be at max 3 characters";
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
                    <div className="admin_card" style={{ width: "50%", margin: "auto" }}>
                        <h3 className="text-center">Add banner</h3>
                        <form onSubmit={handleClick}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
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
                                <Grid item xs={12} sm={12}>
                                     <TextField
                                        name="banner_content"
                                        fullWidth
                                        value={formData.banner_content}
                                        onChange={handleChange}
                                        id="banner_content"
                                        label="Banner Content"
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formError.banner_content}</p>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div className="card-body p-3 text-center">
                                        {/* Profile picture image*/}
                                        {imgData !== null && (
                                            <img src={imgData} alt="" width={350} height={350} />
                                        )}
                                        {/* Profile picture help block*/}
                                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                        <p style={{ color: "red" }}>{formError.file}</p>
                                        {/* Profile picture upload button*/}
                                        <input type="file" name="image" ref={fileUploader} onChange={(e) => HandleImageChange(e)} style={{ display: "none" }} />
                                        <button className="btn btn-primary" onClick={upload} type="button">Upload new image</button>
                                    </div>
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