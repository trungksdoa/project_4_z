import React, { useEffect, useState, useRef } from 'react';
import {useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import settingAPi from '../../api/SettingAPI';

import bookAPI from '../../api/BookAPI';

import TimePicker from 'react-time-picker';
import { toast } from 'react-toastify'
const Update_Pdetail = () => {

    const [setting, setSetting] = useState({ address: "", email: "", id: "", phonenum: "", timeservice: "" });
    const [formError, setformError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [image, setImage] = useState(null);
    const [imgData, setImgData] = useState(null);
    const {id} = useParams();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSetting({ ...setting, [name]: value })
    }
    const fileUploader = useRef();

    const upload = () => {
        fileUploader.current.click();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformError(vaildate(setting));
        setIsSubmit(true);
        // await AdminAPI.Create(formvalue);
    }

    async function submitAction() {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(setting)
            await settingAPi.save(setting).then(res => {
                toast(res.msg)
            }).catch(err => alert(err.msg));
        } else {
            setIsSubmit(false);
        }
    }
    const uploadRequest = async (id, form) => {
        await settingAPi.upload(id, form).then(res => {
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
                uploadRequest(formData)
                // 
            }
        } else {
            alert("Invalid type");
            fileUploader.current.value = "";
        }
    }
    const [formDatas,setFormData] = useState({});
    const fetchData = async () => {
        await bookAPI.FindOnePdetails(id).then((data) => {
            setFormData(data.data)
        }).catch((error) => {
            if(error.status === 404){
                window.location.href = "/NotFound"
            }
        })

    }
    console.log(formDatas)

    useEffect(() => {fetchData()},[])
    useEffect(() => {
        const getSetting = async () => {
            await settingAPi.getSetting().then((setting) => {
                setSetting(setting.data)
                setImage(setting.data.logo_name_path)
            }).catch((error) => {
                alert(error.msg);
            });
        }
        getSetting();
    }, [])

    useEffect(() => {
        submitAction();
    }, [formError])

    const vaildate = (value) => {
        const error = {};
        if (!value.address) {
            error.address = "address is required";
        } else if (value.address.trim().length <= 0) {
            error.address = "address can not be blank";
        }
        if (!value.email) {
            error.email = "email is required";
        } else if (value.email.trim().length <= 0) {
            error.email = "email can not be blank";
        }
        if (!value.phonenum) {
            error.phonenum = "phonenum is required";
        } else if (value.phonenum.trim().length <= 0) {
            error.phonenum = "phonenum can not be blank";
        }
        if (!value.timeservice) {
            error.timeservice = "timeservice is required";
        } else if (value.timeservice.trim().length <= 0) {
            error.timeservice = "timeservice can not be blank";
        }
        return error;
    }
    return (

        <div className="container-fluid px-2 px-md-4">
            <div className="row">
                <div className="row">
                    <div className="col-12 col-xl-4">
                        <div className="card card-plain h-100">
                            <div className="card-header pb-0 p-3">
                                <h6 className="mb-0">Books image</h6>
                            </div>
                            <div className="card-body p-3 text-center">
                                {/* Profile picture image*/}
                                {imgData == null ? (
                                    <img className="img-account-profile mb-2" width={350} height={350} src={"http://localhost:9999/image/" + image + "?v=" + new Date().getTime()} alt="" />
                                ) : (
                                    <img src={imgData} alt="" width={350} height={350} />
                                )}
                                {/* Profile picture help block*/}
                                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                {/* Profile picture upload button*/}
                                <input type="file" name="image" ref={fileUploader} onChange={(e) => HandleImageChange(e)} style={{ display: "none" }} />
                                <button className="btn btn-primary" onClick={upload} type="button">Upload new image</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-8">
                        <div className="card card-plain h-100">
                            <div className="card-header pb-0 p-3">
                                <div className="row">
                                    <div className="col-md-8 d-flex align-items-center">
                                        <h6 className="mb-0">Product detail</h6>
                                    </div>
                                    <div className="col-md-4 text-end">
                                        <a href="javascript:;">
                                            <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <form onSubmit={handleSubmit}>
                                    {/* Form Group (Address)*/}
                                    <div className="mb-3">
                                        <TextField
                                            name="address"
                                            fullWidth
                                            id="address"
                                            value={setting.address}
                                            onChange={handleChange}
                                            label="Address contact"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.address}</p>
                                    </div>
                                    {/* Form Row*/}
                                    {/* Form Row        */}
                                    <div className="mb-3">
                                        {/* Form Group (phone number)*/}
                                        <TextField
                                            name="phonenum"
                                            fullWidth
                                            id="phonenum"
                                            value={setting.phonenum}
                                            onChange={handleChange}
                                            label="Phone contact"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.phonenum}</p>
                                        {/* Form Group (Timeservices)*/}
                                    </div>
                                    {/* Form Group (email address)*/}
                                    <div className="mb-3">
                                        <TextField
                                            name="email"
                                            fullWidth
                                            id="email"
                                            value={setting.email}
                                            onChange={handleChange}
                                            label="Email contact"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.email}</p>
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            name="timeservice"
                                            fullWidth
                                            id="timeservice"
                                            value={setting.timeservice}
                                            onChange={handleChange}
                                            label="Time contact"
                                            autoFocus
                                        />
                                        <p style={{ color: "red" }}>{formError.timeservice}</p>
                                    </div>
                                    {/* Form Row*/}
                                    {/* Save changes button*/}
                                    <button className="btn btn-primary" type="submit">Save changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Update_Pdetail   