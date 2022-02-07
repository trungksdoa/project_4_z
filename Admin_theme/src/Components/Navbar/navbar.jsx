
import React from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['loggin'])
    const auth = cookies.loggin !== undefined ? cookies.loggin.loggin : false;

    const redirect = useNavigate();
    let body = document.getElementsByTagName("body")[0]
        , className = "g-sidenav-pinned";
    const ToggleSidebar = (e) => (
        body.classList.contains(className) ? (body.classList.remove(className)) : (body.classList.add(className),
            e.target.classList.remove("d-none"))
    )
    const HandleLogout = () => {
        // store the user in localStorage
        removeCookie('loggin', { expires: "Thu, 01 Jan 1970 00:00:00 UTC", path: '/' });
        redirect('/dashboard/login')
        // alert("Ok")
    };
    const HandleLogin = () => {
        // store the user in localStorage
        redirect('/dashboard/login')
        // alert("Ok")
    };
    return (

        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="#;">Pages</a></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                    </ol>
                    <h6 className="font-weight-bolder mb-0">Dashboard</h6>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div className="input-group input-group-outline">
                            <h3>Welcome back</h3>
                        </div>
                    </div>
                    <ul className="navbar-nav  justify-content-end">
                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a style={{ cursor: "pointer" }} className="nav-link text-body p-0" onClick={ToggleSidebar} id="iconNavbarSidenav">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line" />
                                    <i className="sidenav-toggler-line" />
                                    <i className="sidenav-toggler-line" />
                                </div>
                            </a>
                        </li>
                        <li className="nav-item px-3 d-flex align-items-center">
                            <a href="#;" className="nav-link text-body p-0">
                                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                            </a>
                        </li>
                        <li className="nav-item px-3 d-flex align-items-center">
                            {auth && (
                                <a style={{ cursor: 'pointer' }} onClick={HandleLogout} className="nav-link text-body p-0">
                                    Log out
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;