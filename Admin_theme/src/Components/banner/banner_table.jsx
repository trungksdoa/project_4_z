import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Banner_table = (props) => {
    const { banners, onViewDetail, onDelete, onEdit } = props;
    // console.log(authors)
    function OnViewDetail(index) {
        if (onViewDetail) {
            onViewDetail(index)
        }
    }
    function OnDelete(bannerId) {
        if (onDelete) {
            onDelete(bannerId)
        }
    }
    function OnEdit(index) {
        if (onEdit) {
            onEdit(index)
        }
    }

    return (
        <>
            <table id="dtable" className="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Banner Image</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Banner title
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Banner content
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Createddate</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Modifieddate</th>
                        <th className="text-center opacity-7" />
                        <th className="text-center opacity-7" />
                    </tr>
                </thead>
                <tbody>
                    {banners.length != 0 ? banners.map((author, index) => {

                        return (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex px-3 py-1">
                                        <p className="text-xs font-weight-bold mb-0">{author.banner_id}</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex px-3 py-1">
                                        <div>
                                            <img src={"http://localhost:9999/image/" + author.banner_Image + "?v=" + new Date().getTime()} className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex px-2 py-1">
                                        <div className="d-flex flex-column justify-content-center">
                                            <h6 className="mb-0 text-sm">{author.banner_title}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{author.banner_content} books</p>
                                </td>
                                <td>
                                    {author.banner_createddate}
                                </td>
                                <td>
                                    {author.banner_modifieddate}
                                </td>
                                <td className="align-middle text-center">
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnDelete(author.banner_id)}>
                                        <span style={{ fontSize: "0.6em", color: "red" }}>
                                            <i className="fas fa-trash-alt fa-2x" />
                                        </span>
                                    </a>
                                </td>
                                <td className="align-middle" style={{ textAlign: 'left' }}>
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnViewDetail(author.banner_id)}><i className="fa fa-eye" /></a>
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
        </>
    )
}
Banner_table.propTypes = {
    banners: PropTypes.array,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Banner_table.defaultProps = {
    banners: [],
    onViewDetail: null,
    onDelete: null,
    onEdit: null
};

export default Banner_table