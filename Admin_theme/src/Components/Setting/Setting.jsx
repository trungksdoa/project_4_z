import React, { useEffect, useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import settingAPi from '../../api/SettingAPI';
import TimePicker from 'react-time-picker';
import { toast } from 'react-toastify'
const Setting = () => {
    const [setting, setSetting] = useState({ address: "", email: "", id: "", phonenum: "", timeservice: "" });
    const [image, setImage] = useState(null);
    const [imgData, setImgData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSetting({ ...setting, [name]: value })
    }
    const fileUploader = useRef();

    const upload = () => {
        fileUploader.current.click();
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
    return (

        <div className="container-fluid px-2 px-md-4">
            <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}>
                <span className="mask  bg-gradient-primary  opacity-6" />
            </div>

            <div className="card card-body mx-3 mx-md-4 mt-n6">
                <div className="row gx-4 mb-2">
                    <div className="col-auto my-auto">
                        <div className="h-100">
                            <h5 className="mb-1">
                                Võ Hoàng Trung
                            </h5>
                            <p className="mb-0 font-weight-normal text-sm">
                                CEO / Co-Founder
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col-12 col-xl-4">
                            <div className="card card-plain h-100">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Website logo</h6>
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
                                            <h6 className="mb-0">Website contact</h6>
                                        </div>
                                        <div className="col-md-4 text-end">
                                            <a href="javascript:;">
                                                <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3">
                                    <form>
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
                                        </div>
                                        {/* Form Row*/}
                                        {/* Save changes button*/}
                                        <button className="btn btn-primary" type="button">Save changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Setting