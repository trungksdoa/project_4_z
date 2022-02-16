import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { currency } from '../Order/index.jsx';

const WislistTable = (props) => {
    const { wishlists } = props;

    return (
        <table id="Revies" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Book</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Price</th>
                </tr>
            </thead>
            <tbody>
                {wishlists.length != 0 ? wishlists.map((wislist, index) => {
                    const { 
                        bookname,
                        bookprice,
                        booksId,
                        firstname,
                        lastname,
                        userID,
                        wishlist_id
                    } = wislist;
                    return (
                        <tr key={index}>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {wishlist_id}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{bookname}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{currency.formatToCurrency(bookprice)}</h6>
                                    </div>
                                </div>
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
WislistTable.propTypes = {
    wishlists: PropTypes.array
};

WislistTable.defaultProps = {
    wishlists: []
};
export default WislistTable;