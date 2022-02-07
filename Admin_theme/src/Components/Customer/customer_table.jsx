import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';

// -----------------------------
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Customers = ({ data, Ban, UnBan }) => {
    const [Listcustomer, setListCustomer] = useState([]);

    // $('#customers').DataTable();
    const fetchCustomers = async () => {
        try {
            setListCustomer(data);
        } catch (error) {
            console.log('failed to fetch List_customer list', error);
        }
    }
    const statusAction = (id, action) => {
        if (action == "ban") {
            if (Ban) {
                Ban(id);
            }
        } else if (action == "unban") {
            if (UnBan) {
                UnBan(id)
            }
        }
    }
    useEffect(() => {
        // fetchCustomers();
        fetchCustomers();
    }, [data])


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOrder = () => {
        //Do logic here
        handleClose();
    }
    const handlewishlish = () => {
        //Do logic here
        handleClose();
    }
    return (
        <table id="customers" className="table align-items-center mb-0">
            <thead>
                <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email/Name</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Birthday</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Register date</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Modified date</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    </th>
                    <th className="text-secondary opacity-7" />
                </tr>
            </thead>
            <tbody>
                {Listcustomer.length != 0 ? Listcustomer.map((item, index) => {

                    const { userid, status, usercreateddate, usermodifieddate, birthday, phone, useremail, firstName, lastName } = item;
                    const full_name = firstName + " " + lastName;

                    return (
                        <tr key={userid}>
                            <td className="align-middle text-center">
                                <div className="d-flex px-3 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        {index}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex px-2 py-1">
                                    <div className="d-flex flex-column justify-content-center">
                                        <h6 className="mb-0 text-sm">{full_name} &nbsp;&nbsp;
                                            {status === 1 ? <span className="badge badge-sm bg-gradient-success">Active</span> : (status === 2 ? <span className="badge badge-sm bg-gradient-warning">Non-active</span> : <span className="badge badge-sm bg-gradient-danger">Banned</span>)}
                                        </h6>
                                        <p className="text-xs text-secondary mb-0">{useremail}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{phone}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{birthday}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{usercreateddate}</span>
                            </td>
                            <td className="align-middle text-center">
                                <span className="text-secondary text-xs font-weight-bold">{usermodifieddate}</span>
                            </td>
                            <td className="align-middle text-center">
                                <Button
                                    id="demo-customized-button"
                                    aria-controls={open ? 'demo-customized-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    variant="contained"
                                    disableElevation
                                    onClick={handleClick}
                                    endIcon={<KeyboardArrowDownIcon />}
                                >
                                    Other
                                </Button>
                                <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleOrder} disableRipple>
                                        <ShoppingBagIcon style={{ fontSize: 20 }} />
                                        <a href="#!" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                            Order
                                        </a>
                                    </MenuItem>
                                    <MenuItem onClick={handlewishlish} disableRipple>
                                        <FavoriteIcon style={{ fontSize: 20 }} />
                                        <a href="#!" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                            Wishlish
                                        </a>
                                    </MenuItem>
                                </StyledMenu>
                            </td>
                            <td className="align-middle">
                                {status === 3 || status === 2 ? (
                                    <a style={{ cursor: 'pointer' }} onClick={() => statusAction(userid, "unban")} className="text-secondary font-weight-bold text-xs">
                                        <i className="fas fa-lock fa-2x" />
                                    </a>
                                ) : (
                                    <a style={{ cursor: 'pointer' }} onClick={() => statusAction(userid, "ban")} className="text-secondary font-weight-bold text-xs">
                                        <i className="fa fa-unlock-alt fa-2x" aria-hidden="true"></i>
                                    </a>
                                )}
                            </td>
                        </tr>
                    );
                }) : (
                    <tr>
                        <td colSpan="9999" style={{ textAlign: "center" }}>No data found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
Customers.propTypes = {
    data: PropTypes.array,
    View_Order: PropTypes.func,
    View_wishlist: PropTypes.func,
    View_Detail: PropTypes.func,
    Ban: PropTypes.func,
    UnBan: PropTypes.func,
};

Customers.defaultProps = {
    data: [],
    View_Order: null,
    View_wishlist: null,
    View_Detail: null,
    Ban: null,
    UnBan: null
};
export default Customers;