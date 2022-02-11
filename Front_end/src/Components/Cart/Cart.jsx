import React from 'react';
import "./Cart.css"
const Cart = () => {
    
    return (
        <>
            <div className="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index={-100} data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-07.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="tg-innerbannercontent">
                                <h1>Cart</h1>
                                <ol className="tg-breadcrumb">
                                    <li><a href="javascript:void(0);">home</a></li>
                                    <li className="tg-active">Contact Us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main id="tg-main" class="tg-main tg-haslayout">
                <div className="container padding-bottom-3x mb-1">
                    {/* Alert*/}
                    <div className="alert alert-info alert-dismissible fade show text-center" style={{ marginBottom: '30px' }}><span className="alert-close" data-dismiss="alert" /><img className="d-inline align-center" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAzIDUxMi4wMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDMgNTEyLjAwMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMjU2LjAwMSw2NGMtNzAuNTkyLDAtMTI4LDU3LjQwOC0xMjgsMTI4czU3LjQwOCwxMjgsMTI4LDEyOHMxMjgtNTcuNDA4LDEyOC0xMjhTMzI2LjU5Myw2NCwyNTYuMDAxLDY0eiAgICAgIE0yNTYuMDAxLDI5OC42NjdjLTU4LjgxNiwwLTEwNi42NjctNDcuODUxLTEwNi42NjctMTA2LjY2N1MxOTcuMTg1LDg1LjMzMywyNTYuMDAxLDg1LjMzM1MzNjIuNjY4LDEzMy4xODQsMzYyLjY2OCwxOTIgICAgIFMzMTQuODE3LDI5OC42NjcsMjU2LjAwMSwyOTguNjY3eiIgZmlsbD0iIzUwYzZlOSIvPgoJCQk8cGF0aCBkPSJNMzg1LjY0NCwzMzMuMjA1YzM4LjIyOS0zNS4xMzYsNjIuMzU3LTg1LjMzMyw2Mi4zNTctMTQxLjIwNWMwLTEwNS44NTYtODYuMTIzLTE5Mi0xOTItMTkycy0xOTIsODYuMTQ0LTE5MiwxOTIgICAgIGMwLDU1Ljg1MSwyNC4xMjgsMTA2LjA2OSw2Mi4zMzYsMTQxLjE4NEw2NC42ODQsNDk3LjZjLTEuNTM2LDQuMTE3LTAuNDA1LDguNzI1LDIuODM3LDExLjY2OSAgICAgYzIuMDI3LDEuNzkyLDQuNTY1LDIuNzMxLDcuMTQ3LDIuNzMxYzEuNjIxLDAsMy4yNDMtMC4zNjMsNC43NzktMS4xMDlsNzkuNzg3LTM5Ljg5M2w1OC44NTksMzkuMjMyICAgICBjMi42ODgsMS43OTIsNi4xMDEsMi4yNCw5LjE5NSwxLjI4YzMuMDkzLTEuMDAzLDUuNTY4LTMuMzQ5LDYuNjk5LTYuNGwyMy4yOTYtNjIuMTQ0bDIwLjU4Nyw2MS43MzkgICAgIGMxLjA2NywzLjE1NywzLjU0MSw1LjYzMiw2LjY3Nyw2LjcyYzMuMTM2LDEuMDY3LDYuNTkyLDAuNjQsOS4zNjUtMS4yMTZsNTguODU5LTM5LjIzMmw3OS43ODcsMzkuODkzICAgICBjMS41MzYsMC43NjgsMy4xNTcsMS4xMzEsNC43NzksMS4xMzFjMi41ODEsMCw1LjEyLTAuOTM5LDcuMTI1LTIuNzUyYzMuMjY0LTIuOTIzLDQuMzczLTcuNTUyLDIuODM3LTExLjY2OUwzODUuNjQ0LDMzMy4yMDV6ICAgICAgTTI0Ni4wMTcsNDEyLjI2N2wtMjcuMjg1LDcyLjc0N2wtNTIuODIxLTM1LjJjLTMuMi0yLjExMi03LjMxNy0yLjM4OS0xMC42ODgtMC42NjFMOTQuMTg4LDQ3OS42OGw0OS41NzktMTMyLjIyNCAgICAgYzI2Ljg1OSwxOS40MzUsNTguNzk1LDMyLjIxMyw5My41NDcsMzUuNjA1TDI0Ni43LDQxMS4yQzI0Ni40ODcsNDExLjU2MywyNDYuMTY3LDQxMS44NCwyNDYuMDE3LDQxMi4yNjd6IE0yNTYuMDAxLDM2Mi42NjcgICAgIEMxNjEuOSwzNjIuNjY3LDg1LjMzNSwyODYuMTAxLDg1LjMzNSwxOTJTMTYxLjksMjEuMzMzLDI1Ni4wMDEsMjEuMzMzUzQyNi42NjgsOTcuODk5LDQyNi42NjgsMTkyICAgICBTMzUwLjEwMywzNjIuNjY3LDI1Ni4wMDEsMzYyLjY2N3ogTTM1Ni43NTksNDQ5LjEzMWMtMy40MTMtMS43MjgtNy41MDktMS40NzItMTAuNjg4LDAuNjYxbC01Mi4zNzMsMzQuOTIzbC0zMy42NDMtMTAwLjkyOCAgICAgYzQwLjM0MS0wLjg1Myw3Ny41ODktMTQuMTg3LDEwOC4xNi0zNi4zMzFsNDkuNTc5LDEzMi4yMDNMMzU2Ljc1OSw0NDkuMTMxeiIgZmlsbD0iIzUwYzZlOSIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" width={18} height={18} alt="Medal icon" />&nbsp;&nbsp;With this purchase you will earn <strong>290</strong> Reward Points.</div>
                    {/* Shopping Cart*/}
                    <div className="table-responsive shopping-cart">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th className="text-center">Quantity</th>
                                    <th className="text-center">Subtotal</th>
                                    <th className="text-center"><a className="btn btn-sm btn-outline-danger" href="#">Clear Cart</a></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="product-item">
                                            <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/FF0000/000000" alt="Product" /></a>
                                            <div className="product-info">
                                                <h4 className="product-title"><a href="#">Unionbay Park</a></h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="count-input">
                                            <input type="number" min="0" value="0" className="form-control" />
                                        </div>
                                    </td>
                                    <td className="text-center text-lg text-medium">$43.90</td>
                                    <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i className="fa fa-trash" /></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="product-item">
                                            <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/5F9EA0/000000" alt="Product" /></a>
                                            <div className="product-info">
                                                <h4 className="product-title"><a href="#">Daily Fabric Cap</a></h4><span><em>Size:</em> XL</span><span><em>Color:</em> Black</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="count-input">
                                            <input type="number" min="0" value="0" className="form-control" />
                                        </div>
                                    </td>
                                    <td className="text-center text-lg text-medium">$24.89</td>
                                    <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i className="fa fa-trash" /></a></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="product-item">
                                            <a className="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/9932CC/000000" alt="Product" /></a>
                                            <div className="product-info">
                                                <h4 className="product-title"><a href="#">Cole Haan Crossbody</a></h4><span><em>Size:</em> -</span><span><em>Color:</em> Turquoise</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <div className="count-input">
                                            <input type="number" min="0" value="0" className="form-control" />
                                        </div>
                                    </td>
                                    <td className="text-center text-lg text-medium">$200.00</td>
                                    <td className="text-center"><a className="remove-from-cart" href="#" data-toggle="tooltip" title data-original-title="Remove item"><i className="fa fa-trash" /></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="shopping-cart-footer">
                        <div className="column">
                            <form className="coupon-form" method="post">
                                <input className="form-control form-control-sm" type="text" placeholder="Coupon code" required />
                                <button className="btn btn-outline-primary btn-sm" type="submit">Apply Coupon</button>
                            </form>
                        </div>
                        <div className="column text-lg">Subtotal: <span className="text-medium">$289.68</span></div>
                    </div>
                    <div className="shopping-cart-footer">
                        <div className="column"><a className="btn btn-outline-secondary" href="#"><i className="icon-arrow-left" />&nbsp;Back to Shopping</a></div>
                        <div className="column"><a className="btn btn-primary" href="#" data-toast data-toast-type="success" data-toast-position="topRight" data-toast-icon="icon-circle-check" data-toast-title="Your cart" data-toast-message="is updated successfully!">Update Cart</a><a className="btn btn-success" href="#">Checkout</a></div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Cart;