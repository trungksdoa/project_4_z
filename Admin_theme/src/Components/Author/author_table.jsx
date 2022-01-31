import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
const Author_table = (props) => {
    const { authors, onViewDetail, onDelete, onEdit } = props;
    console.log(authors)
    function OnViewDetail(index) {
        if (onViewDetail) {
            onViewDetail(index)
        }
    }
    function OnDelete(index) {
        console.log(index)
        if (onDelete) {
            onDelete(index)
        }
    }
    function OnEdit(index) {
        if (onEdit) {
            onEdit(index)
        }
    }
    return (
        <table id="dtable" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Published
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Modifieddate</th>
                    <th className="text-center opacity-7" />
                    <th className="text-center opacity-7" />
                </tr>
            </thead>
            <tbody>
                {authors.length != 0 ? authors.map((author, index) => {

                    return (
                        <tr key={index}>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{author.authorid}</p>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div>
                                        <img src={"http://localhost:9999/image/" + author.authorImage} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{author.authorname}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="text-xs font-weight-bold mb-0">{author.numberpublishedbooks} books</p>
                            </td>
                            <td>
                                {author.modifieddate}
                            </td>
                            <td className="align-middle text-center">
                                <a style={{ cursor: 'pointer' }} onClick={() => OnDelete(index)}>
                                    <span style={{ fontSize: "0.6em", color: "red" }}>
                                        <i className="fas fa-trash-alt fa-2x" />
                                    </span>
                                </a>
                            </td>
                            <td className="align-middle" style={{ textAlign: 'left' }}>
                                <a style={{ cursor: 'pointer' }} onClick={() => OnViewDetail(index)}><i className="fa fa-eye" /></a>
                            </td>
                        </tr>
                    )
                }) : (
                    <tr>
                        <td colSpan="9999" style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
Author_table.propTypes = {
    authors: PropTypes.array,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Author_table.defaultProps = {
    authors: [],
    onViewDetail: null,
    onDelete: null,
    onEdit: null
};

export default Author_table