import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import Fab from '@mui/material/Fab';
import CachedIcon from '@mui/icons-material/Cached';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const Author = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-12">
                    <a><i className="fa fa-plus-square" /></a>
                    <div className="card my-4">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 className="text-white text-capitalize ps-3">Authors table</h6>
                                <span>
                                    <a style={{ position: 'absolute', top: "0.5rem", right: "2rem", cursor: 'pointer' }}
                                    // onClick={RefreshData}
                                    >
                                        <Fab color="primary" aria-label="add">
                                            <CachedIcon />
                                        </Fab>
                                    </a>
                                </span>

                            </div>
                        </div>
                        <div className="card-body px-0 pb-2">
                            <div className="table-responsive p-0">
                                <table id="dtable" className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Published
                                            </th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Details</th>
                                            <th className="text-center opacity-7" />
                                            <th className="text-center opacity-7" />
                                            <th className="text-center opacity-7" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">casillas</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-xs font-weight-bold mb-0">154.02 book</p>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <p className="text-xs font-weight-bold mb-0">description</p>
                                            </td>
                                            <td className="align-middle" style={{ textAlign: 'right' }}>
                                                <a><ModeEditOutlineIcon /></a>
                                            </td>
                                            <td className="align-middle text-center">
                                                <a>
                                                    <span style={{ fontSize: "0.6em", color: "red" }}>
                                                        <i className="fas fa-trash-alt fa-2x" />
                                                    </span>
                                                </a>
                                            </td>
                                            <td className="align-middle" style={{ textAlign: 'left' }}>
                                                <a><i className="fa fa-eye" /></a>
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
export default Author;