import React from 'react';

const footer = () => {
    return (
        <footer classname="footer py-4  ">
            <div classname="container-fluid">
                <div classname="row align-items-center justify-content-lg-between">
                    <div classname="col-lg-6 mb-lg-0 mb-4">
                        <div classname="copyright text-center text-sm text-muted text-lg-start">
                            © ,
                            made with <i classname="fa fa-heart"> by
                                <a href="https://www.creative-tim.com" classname="font-weight-bold" target="_blank">Creative Tim</a>
                                for a better web.
                            </i></div><i classname="fa fa-heart">
                        </i></div><i classname="fa fa-heart">
                        <div classname="col-lg-6">
                            <ul classname="nav nav-footer justify-content-center justify-content-lg-end">
                                <li classname="nav-item">
                                    <a href="https://www.creative-tim.com" classname="nav-link text-muted" target="_blank">Creative Tim</a>
                                </li>
                                <li classname="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" classname="nav-link text-muted" target="_blank">About Us</a>
                                </li>
                                <li classname="nav-item">
                                    <a href="https://www.creative-tim.com/blog" classname="nav-link text-muted" target="_blank">Blog</a>
                                </li>
                                <li classname="nav-item">
                                    <a href="https://www.creative-tim.com/license" classname="nav-link pe-0 text-muted" target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                </div>
        </footer>
    );
}
export default footer;