import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BannerAPI from '../../api/BannerAPI';
import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import CKEditor from '../Pagination/CK_Editor.jsx'
const FormPage = () => {
    const initialValues = {
        "bannerImage": "",
        "bannerContent": "",
        "bannerTitle": ""
    }
    const [formData, setFormData] = useState(initialValues)
    const [ckValue, setCkValue] = useState("")
    const [formError, setformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [imgData, setImgData] = useState(null);


    const fileUploader = useRef();

    const navigator = useNavigate();

    const { id } = useParams();
    const fetchData = async () => {
        await BannerAPI.getBannerById(id).then((banner) => {
            setFormData(banner.data);
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
            await BannerAPI.save(formData, id).then(res => {
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
        if (!value.bannerTitle) {
            error.bannerTitle = "Title is required";
        } else if (value.bannerTitle.trim().length <= 10) {
            error.bannerTitle = "Title length must be at max 10 characters";
        } else if (value.bannerTitle.trim().length <= 0) {
            error.bannerTitle = "Title can not blank";
        }
        if (!value.bannerContent) {
            error.bannerContent = "Title is required";
        } else if (value.bannerContent.trim().length <= 10) {
            error.bannerContent = "Content length must be at max 10 characters";
        } else if (value.bannerContent.trim().length <= 0) {
            error.bannerContent = "Content can not blank";
        }
        return error;
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        handleSubmit();
    }, [formError])

    const upload = () => {
        fileUploader.current.click();
    }
    const uploadRequest = async (id, form) => {
        await BannerAPI.upload(id, form).then(res => {
            toast(res.msg)
        }).catch(err => {
            alert(err.msg)
        })
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
                //Upload image


                const formData = new FormData();

                //Append data
                formData.append("file", files[0]);
                uploadRequest(id, formData)
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
                        <h3 className="text-center">Update banner</h3>
                        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
                        <pre>{JSON.stringify(ckValue, undefined, 2)}</pre>
                        <form onSubmit={handleClick}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bannerTitle"
                                        fullWidth
                                        value={formData.bannerTitle}
                                        onChange={handleChange}
                                        id="bannerTitle"
                                        label="Banner title"
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formError.bannerTitle}</p>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        name="bannerContent"
                                        fullWidth
                                        value={formData.bannerContent}
                                        onChange={handleChange}
                                        id="bannerContent"
                                        label="Banner Content"
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formError.bannerContent}</p>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div className="card-body p-3 text-center">
                                        {/* Profile picture image*/}
                                        {imgData == null ? (
                                            <img className="img-account-profile mb-2" width={350} height={350} src={"http://localhost:9999/image/" + formData.bannerImage + "?v=" + new Date().getTime()} alt="" />
                                        ) : (
                                            <img src={imgData} alt="" width={350} height={350} />
                                        )}
                                        {/* Profile picture help block*/}
                                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
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