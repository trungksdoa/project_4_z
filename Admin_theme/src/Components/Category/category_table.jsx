import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Categorytable = (props) => { 
    const { categorys, onViewDetail, onDelete, onEdit } = props;
    // console.log(categorys)
    function OnViewDetail(index) {
        if (onViewDetail) {
            onViewDetail(index)
        }
    }
    function OnDelete(index) {
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
        <>
            <table id="dtable" className="table align-items-center mb-0">
                <thead>
                    <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Modifieddate</th>
                        <th className="text-center opacity-7" />
                        <th className="text-center opacity-7" />
                    </tr>
                </thead>
                <tbody>
                    {categorys.length != 0 ? categorys.map((category, index) => {

                        return (
                            
                            <tr key={index}>
                                
                                <td>
                                    <div className="d-flex px-3 py-1">
                                        <p className="text-xs font-weight-bold mb-0">{category.catagoryid}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{category.catagoryname}</p>
                                </td>
                                <td>
                                    {category.catagorymodifieddate}
                                </td>
                                <td className="align-middle text-center">
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnDelete(category.catagoryid)}>
                                        <span style={{ fontSize: "0.6em", color: "red" }}>
                                            <i className="fas fa-trash-alt fa-2x" />
                                        </span>
                                    </a>
                                </td>
                                <td className="align-middle" style={{ textAlign: 'left' }}>
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnViewDetail(category.catagoryid)}><i className="fa fa-eye" /></a>
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
Categorytable.propTypes = {
    categorys: PropTypes.array,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Categorytable.defaultProps = {
    categorys: [],
    onViewDetail: null,
    onDelete: null,
    onEdit: null
};

export default Categorytable