import React from 'react';
const example = () => {
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
                                            <input type="text"   className="form-control" />
                                        </div>
                                        <div className="col-6">
                                            <label >Published</label>
                                            <input type="text"   className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label >Date Created</label>
                                            <input type="text"   className="form-control" />
                                        </div>
                                        <div className="col-6">
                                            <label >Modifieddate</label>
                                            <input type="text"   className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label >Infomation</label>
                                            <textarea type="text"  className="form-control" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <label >Image</label>
                                            <input type="File" className="form-control" />
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