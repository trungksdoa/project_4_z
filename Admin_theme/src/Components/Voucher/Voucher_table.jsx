import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

import { currency } from './index.jsx';

const Voucher_table = (props) => {
    const { vouchers, onDelete, onEdit } = props;

    function OnorderDelete(voucherId) {
        if (onDelete) {
            onDelete(voucherId)
        }
    }
    function OnEditData(voucherId) {
        if (onEdit) {
            onEdit(voucherId)
        }
    }
    return (
        <table id="Revies" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Voucher title</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Voucher Description</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Voucher startDate</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Voucher expiredDate</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Voucher value
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                </tr>
            </thead>
            <tbody>
                {vouchers.length != 0 ? vouchers.map((voucher, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {voucher.voucherid}

                                        <a style={{ cursor: 'pointer' }}onClick={()=>OnEditData(voucher.voucherid)}>Edit</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{voucher.vouchertitle}</h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{voucher.voucherdescription}</h6>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{voucher.voucherfrom}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{voucher.voucherto}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{voucher.vouchervalue}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">
                                    <a style={{ cursor: 'pointer' }} onClick={() => OnorderDelete(voucher.voucherid)}><DeleteIcon /></a>
                                </span>
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
Voucher_table.propTypes = {
    vouchers: PropTypes.array,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
};

Voucher_table.defaultProps = {
    vouchers: [],
    onDelete: null,
    onEdit: null
};
export default Voucher_table;