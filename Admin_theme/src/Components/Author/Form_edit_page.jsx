import React, { useLayoutEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorAPI from '../../api/AuthorAPI';
import parse from 'html-react-parser';
import ShowMoreText from "react-show-more-text";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Ck_editor from '../Pagination/CK_Editor.jsx';
import Au_API from '../../api/AuthorAPI'
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
const FormPage = () => {
    // ----------------------------------------------------------------

    // UseState

    // ----------------------------------------------------------------
    const [author, setAuthor] = useState({ authorname: "", numberpublishedbooks: 0, authorinformation: "" });
    const [formErrors, setFormErrors] = useState({});
    const [author_image, setAuthorImage] = useState();
    const [author_id, setAuthorId] = useState()
    const [action, setAction] = useState("view");
    const [imgData, setImgData] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    // ----------------------------------------------------------------

    // Use(From Reacts)

    // ----------------------------------------------------------------
    const ref = useRef();
    const navigate = useNavigate();
    const { id } = useParams();
    const Only_number = /^[0-9\b]+$/;
    const character_only = /^[a-zA-Z]+$/g;

    // ----------------------------------------------------------------

    // UseEffect

    // ----------------------------------------------------------------
    useLayoutEffect(() => {
        findOne(id)
    }, [])
    useLayoutEffect(() => {
        EditAuthor();
    }, [formErrors])
    // ----------------------------------------------------------------

    async function findOne(id) {
        await AuthorAPI.FindOne(id).then(result => {
            setAuthor({ ...author, authorname: result.data.authorname, numberpublishedbooks: parseInt(result.data.numberpublishedbooks), authorinformation: result.data.authorinformation });
            setAuthorImage("http://localhost:9999/image/" + result.data.authorImage);
            setAuthorId(result.data.authorid)
        }).catch(err => {
            alert(err.status)
        })
    }

    // ----------------------------------------------------------------

    // File upload

    // ----------------------------------------------------------------
    async function imageUpload(id, formData) {
        await Au_API.Update_Image(id, formData);
    }
    const HandleImageChange = (e) => {
        var file = {}
        const { name, value, files } = e.target;
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

                imageUpload(author_id, formData);
            }
        } else {
            alert("Invalid type");
            ref.current.value = "";
        }
    }
    // ----------------------------------------------------------------

    // Handle change

    // ----------------------------------------------------------------
    const HandleChange = (e) => {
        var file = {}
        const { name, value, files } = e.target;
        if (name === "numberpublishedbooks") {
            if (Only_number.test(value)) {
                if (value.length >= 0 && value.length <= 1000000)
                    setAuthor({ ...author, [name]: value });
            }
        } else if (name === "authorname") {
            if (character_only.test(value.trim().toLowerCase())) {
                setAuthor({ ...author, [name]: value });
            }
        } else {

            setAuthor({ ...author, [name]: value })
        }
    }
    // ----------------------------------------------------------------

    // Handle ckEditor change

    // ----------------------------------------------------------------
    const HandleChangeCKEditor = (event, editor) => {
        const data = editor.getData();
        setAuthor({ ...author, "authorinformation": data });
    }
    // ----------------------------------------------------------------

    // Handle Action change between view or edit

    // ----------------------------------------------------------------
    const HandleAction = () => {
        const actions = action == "view" ? "edit" : "view";
        setAction(actions);
    }
    // ----------------------------------------------------------------

    // Handle submit when click submit

    // ----------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(author);
        setFormErrors(errors);
        setIsSubmit(true)
    };
    // ----------------------------------------------------------------

    // Handle validate

    // ----------------------------------------------------------------
    const validate = (values, file) => {
        //Object error to return error when error founded
        const errors = {};
        if (!values.authorname) {
            errors.authorname = "Author name is required!";

        }
        else if (values.authorname.trim().length <= 0) {
            errors.authorname = "Author name not be blank";

        } else if (values.authorname.trim().length <= 3) {
            errors.authorname = "String lenght not less than 3";
        }
        // Không nhập số author name 
        // Không ký tự đặt biệt author name
        if (!values.numberpublishedbooks) {
            errors.numberpublishedbooks = "Number of pulished book is required!";

        } else if (values.numberpublishedbooks.length <= 0) {
            errors.numberpublishedbooks = "Number of pulished book not be blank";
        }
        //0000000000

        if (!values.authorinformation) {
            errors.authorinformation = "Author information is required!";

        } else if (values.authorinformation.trim().length <= 0) {
            errors.authorinformation = "Author information not be blank";

        }

        return errors;
    };
    // ----------------------------------------------------------------

    // Request APi

    // ----------------------------------------------------------------
    async function EditAuthor() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const formData = new FormData();
            formData.append("author_String", JSON.stringify(author));
            // // // API CALL
            await Au_API.Edit(author_id, formData).then(res => {
                toast(res.msg)
                navigate("/admin/author")
            }).catch((e) => {
                alert(e.msg)
            });
            setAction("view")
        }
    }
    // ----------------------------------------------------------------

    // Redirect to list

    // ----------------------------------------------------------------
    const BackToTable = () => {
        navigate('/admin/author')
    }
    // ----------------------------------------------------------------

    // Return

    // ----------------------------------------------------------------
    return (
        <div className="container-fluid py-4">
            <div className="container">
                <a style={{ marginLeft: 15, cursor: 'pointer' }}
                    onClick={HandleAction}
                >
                    <EditIcon />
                </a>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="sda">Name</label>
                        </div>
                        <div className="col">
                            {action == "view" ? (
                                <>
                                    {author.authorname}
                                </>
                            ) : (
                                <>
                                    <TextField
                                        name="authorname"
                                        required
                                        className="form-control"
                                        fullWidth
                                        id="authorname"
                                        value={author.authorname}
                                        label="Author Name"
                                        onChange={HandleChange}
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formErrors.authorname}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="sda">Published</label>
                        </div>
                        <div className="col">
                            {action == "view" ? (
                                <>
                                    {author.numberpublishedbooks} books
                                </>
                            ) : (
                                <>
                                    <TextField
                                        name="numberpublishedbooks"
                                        required
                                        className="form-control"
                                        fullWidth
                                        id="numberpublishedbooks"
                                        value={author.numberpublishedbooks}
                                        label="Pulished book number"
                                        onChange={HandleChange}
                                        autoFocus
                                    />
                                    <p style={{ color: "red" }}>{formErrors.numberpublishedbooks}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="sda">Infomation</label>
                        </div>
                        <div className="col">
                            {action == "view" ? (
                                <>
                                    <ShowMoreText
                                        /* Default options */
                                        lines={5}
                                        more="Show more"
                                        less="Show less"
                                        className="content-css"
                                        anchorClass="my-anchor-css-class"
                                        // onClick={this.executeOnClick}
                                        expanded={false}
                                        width={600}
                                        truncatedEndingComponent={"... "}
                                    >
                                        <span style={{ fontWeight: 600, lineHeight: 3, color: "black" }}>
                                            {parse(author.authorinformation)}
                                        </span>
                                    </ShowMoreText>
                                </>
                            ) : (
                                <>
                                    <Ck_editor
                                        OnKeyPress={HandleChangeCKEditor}
                                        values={author.authorinformation}
                                    />
                                    <p style={{ color: "red" }}>{formErrors.authorinformation}</p>
                                </>



                            )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="sda">Image</label>
                        </div>
                        <div className="col">
                            <>
                                <input type='file' ref={ref} name="authorImage" onChange={(e) => HandleImageChange(e)} />
                                {imgData == null ? (
                                    <img src={author_image} alt="" width="400px" height="400px" />
                                ) : (
                                    <img src={imgData} alt="" width="400px" height="400px" />
                                )}
                            </>
                        </div>
                    </div>
                    {action == "view" ? (
                        <>
                            <a onClick={BackToTable} className="btn btn-vimeo">Back List Authors</a>
                        </>
                    ) : (
                        <>
                            <button type="submit" className="btn btn-vimeo">Submit</button>
                        </>)}
                </form>
            </div >
            {/* <ToastContainer /> */}
        </div >

    )
};
export default FormPage