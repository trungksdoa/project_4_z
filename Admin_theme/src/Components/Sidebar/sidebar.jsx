

import React from 'react';

import { NavLink } from 'react-router-dom';

import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import NewspaperIcon from '@mui/icons-material/Newspaper';

import MenuBookIcon from '@mui/icons-material/MenuBook';

import PersonIcon from '@mui/icons-material/Person';

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

import StarIcon from '@mui/icons-material/Star';
const sidebar = () => {
    let body = document.getElementsByTagName("body")[0]
        , className = "g-sidenav-pinned";
    const ToggleSidebar = (e) => (
        body.classList.contains(className) ? (body.classList.remove(className)) : (body.classList.add(className),
            e.target.classList.remove("d-none"))
    )
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" onClick={ToggleSidebar} id="iconSidenav" />
                <NavLink className="navbar-brand m-0" to="/admin/dashboard">
                    <img src="./assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                    <span className="ms-1 font-weight-bold text-white">Book online</span>
                </NavLink>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" to="/admin/dashboard">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="material-icons opacity-10">dashboard</i>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/customer">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <AssignmentIndIcon />
                            </div>
                            <span className="nav-link-text ms-1">Customers </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/owner/admin">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <AdminPanelSettingsIcon />
                            </div>
                            <span className="nav-link-text ms-1">Admins </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/banner">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <ViewCarouselIcon />
                            </div>
                            <span className="nav-link-text ms-1">Banner </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/order">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <ProductionQuantityLimitsIcon />
                            </div>
                            <span className="nav-link-text ms-1">Orders </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/author">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <PersonIcon />
                            </div>
                            <span className="nav-link-text ms-1">Authors </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/book">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <MenuBookIcon />
                            </div>
                            <span className="nav-link-text ms-1">Book </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/Reviews">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <StarIcon />
                            </div>
                            <span className="nav-link-text ms-1">Reviews </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white " to="/admin/News">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <NewspaperIcon />
                            </div>
                            <span className="nav-link-text ms-1">News </span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
export default sidebar