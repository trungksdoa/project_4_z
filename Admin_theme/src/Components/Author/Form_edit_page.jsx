import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorAPI from '../../api/AuthorAPI';
import parse from 'html-react-parser';
import ShowMoreText from "react-show-more-text";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Ck_editor from './CK_Editor';
import Au_API from '../../api/AuthorAPI'
const FormPage = () => {
    const [author, setAuthor] = useState({ authorname: "", numberpublishedbooks: 0, authorinformation: "" });
    const [formErrors, setFormErrors] = useState({});
    const [author_image, setAuthorImage] = useState();
    const [author_id, setAuthorId] = useState()

    const [action, setAction] = useState("view");
    const [imgData, setImgData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);

    const ref = useRef();

    const navigate = useNavigate();
    const { id } = useParams();
    async function findOne(id) {
        await AuthorAPI.FindOne(id).then(result => {
            setAuthor({ ...author, authorname: result.data.authorname, numberpublishedbooks: parseInt(result.data.numberpublishedbooks), authorinformation: result.data.authorinformation });
            setAuthorImage(result.data.authorImage);
            setAuthorId(result.data.authorid)
        }).catch(err => {
            console.log(err)
        })
    }
    const Only_number = /^[0-9\b]+$/;

    const handleChange = (e) => {
        var file = {}
        const { name, value, files } = e.target;
        if (name === "authorImage") {
            if (files[0].type === "image/png" || files[0].type === "image/jpeg") {
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
                setSelectedFile(files[0])
            } else {
                alert("Invalid type");
                ref.current.value = "";
            }
        } else if (name === "numberpublishedbooks") {
            if (Only_number.test(value)) {
                if (value.length >= 0 && value.length <= 1000000)
                    setAuthor({ ...author, [name]: value });
            }
        } else {
            setAuthor({ ...author, [name]: value })
        }
    }
    const handleChangeCKEditor = (event, editor) => {
        const data = editor.getData();
        setAuthor({ ...author, "authorinformation": data });
    }
    const handleAction = () => {
        const actions = action == "view" ? "edit" : "view";
        setAction(actions);
        console.log(actions)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(author, selectedFile);
        setFormErrors(errors);
        setIsSubmit(true)
    };

    //Validate form
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
        if (!values.numberpublishedbooks) {
            errors.numberpublishedbooks = "Number of pulished book is required!";

        } else if (values.numberpublishedbooks.length <= 0) {
            errors.numberpublishedbooks = "Number of pulished book not be blank";

        }
        if (!values.authorinformation) {
            errors.authorinformation = "Author information is required!";

        } else if (values.authorinformation.trim().length <= 0) {
            errors.authorinformation = "Author information not be blank";

        }

        return errors;
    };
    async function EditAuthor() {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            const formData = new FormData();
            const uploadInput = document.getElementById('authorImage');

            //Append data
            formData.append("file", uploadInput.files[0]);
            formData.append("author_String", JSON.stringify(author));
            // // // API CALL
            await Au_API.Edit(author_id, formData).then(res => {
                setAuthorImage(res.data.authorImage);
            }).catch((e) => {
                alert(e.msg)
            });

            setAction("view")
        }
    }
    useEffect(() => {
        findOne(id)
    }, [])
    useEffect(() => {
        EditAuthor();
    }, [formErrors])
    const BackToTable = () => {
        navigate('/admin/author')
    }
    return (
        <div className="container-fluid py-4">
            <div className="container">
                <pre>{JSON.stringify(author, undefined, 2)}</pre>
                <pre>{JSON.stringify(formErrors, undefined, 2)}</pre>
                <a style={{ marginLeft: 15, cursor: 'pointer' }}
                    onClick={handleAction}
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
                                <input type='text' name="authorname" value={author.authorname} onChange={handleChange} />
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
                                    <input type='text' name="numberpublishedbooks" value={author.numberpublishedbooks} onChange={handleChange} />

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
                                        <span style={{fontWeight:600,lineHeight:3,color:"black"}}>
                                            {parse(author.authorinformation)}
                                        </span>
                                    </ShowMoreText>
                                </>
                            ) : (
                                <>
                                    <Ck_editor
                                        OnKeyPress={handleChangeCKEditor}
                                        values={author}
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
                            {action === "view" ? (
                                <>
                                    <img src={"http://localhost:9999/image/" + author_image} alt="" width="400px" />
                                </>
                            ) : (
                                <>
                                    <input type="file" ref={ref} name="authorImage" id="authorImage" onChange={handleChange} />

                                    <img src={imgData} alt="" width="400px" />

                                    <p style={{ color: "red" }}>{formErrors.imageSize}</p>
                                </>
                            )}
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
        </div >
    );
}
export default FormPage