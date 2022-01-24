const Admins = () => {

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Admins list</h6>
                                <span><a href="#" style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: 'white' }}><i className="fas fa-plus fa-lg" />
                                </a>
                                </span>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table id="admins" className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roles</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Account creation date</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Edit date</th>
                                            <th className="text-secondary opacity-7" />
                                            <th className="text-center opacity-7" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        1
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">trung@gmail.com</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">Role 1</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-edit fa-2x" />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-trash-alt fa-2x" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        2
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">john@creative-tim.com</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">Role 1</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-edit fa-2x" />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-trash-alt fa-2x" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        3
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">john@creative-tim.com</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">Role 1</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-edit fa-2x" />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-trash-alt fa-2x" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        4
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">john@creative-tim.com</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">Role 1</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-edit fa-2x" />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                    <i className="fas fa-trash-alt fa-2x" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admins;