import React,{useEffect,useState} from 'react';
import Au_API from '../../api/AuthorAPI';
const example = () => {

    const initialValues = { Fname: "", Lname: "", Emails: "", Pword: "", Cword: "", Pnum: "", birthday: new Date(moment().subtract(16, "years").toString()) };
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // if (e.target != undefined) {

        // }
        // setFormValues({ ...formValues, birthday: e });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const CreateAuthor = async (e) => {
        e.preventDefault();
        const res = await Au_API.Create()
    }
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">CREATE Authors</h6>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="container">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-6">
                                            <label >Name</label>
                                            <input type="text" name="Au_name" className="form-control" />
                                        </div>
                                        <div className="col-6">
                                            <label >Published</label>
                                            <input type="text" name="Au_Published" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label >Infomation</label>
                                            <textarea type="text" name="Au_Information"   className="form-control" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label >Image</label>
                                            <input type="File" value="131231" name="Au_images"   className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default example