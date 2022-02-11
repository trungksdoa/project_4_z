import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Book_table = (props) => {
    const { books, onViewDetail, onDelete, onEdit } = props;
    // console.log(books)
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
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Releasedate
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Modifieddate
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Amounts
                        </th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                        <th className="text-center opacity-7" />
                        <th className="text-center opacity-7" />
                    </tr>
                </thead>
                <tbody>
                    {books.length != 0 ? books.map((book, index) => {

                        return (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex px-3 py-1">
                                        <p className="text-xs font-weight-bold mb-0">{book.bookid}</p>
                                    </div>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{book.book_name} books</p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.bookprice}</p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.bookdescription} </p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.bookreleasedate} </p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.bookmodifieddate} </p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.amounts}</p>
                                </td>
                                <td>
                                <p className="text-xs font-weight-bold mb-0">{book.status}</p>
                                </td>
                                <td className="align-middle text-center">
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnDelete(index)}>
                                        <span style={{ fontSize: "0.6em", color: "red" }}>
                                            <i className="fas fa-trash-alt fa-2x" />
                                        </span>
                                    </a>
                                </td>
                                <td className="align-middle" style={{ textAlign: 'left' }}>
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnViewDetail(book.bookid)}><i className="fa fa-eye" /></a>
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
Book_table.propTypes = {
    books: PropTypes.array,
    onViewDetail: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Book_table.defaultProps = {
    books: [],
    onViewDetail: null,
    onDelete: null,
    onEdit: null
};

export default Book_table