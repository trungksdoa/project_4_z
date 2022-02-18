import React from 'react';
import { Cookies } from 'react-cookie';
import { CartProvider, useCart } from 'react-use-cart';
import { useCookies } from 'react-cookie';
import OrderAPI from '../../api/OrderAPI';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import VoucherAPI from '../../api/VoucherAPI.js';
import './Checkout.css';
function Checkout() {
	const { cartTotal, isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();
	//const orders = { district: "", address: "", city: "", voucher: ""};
	const [ cookies, setCookie, removeCookie ] = useCookies([ 'loggin' ]);
	//const [formData, setFormValues] = useState(initialValues);
	const [ formData, setFormData ] = useState({
		orderdistrict: '',
		orderaddress: '',
		ordercity: '',
		ordervoucher: '',
		ordernote: '',
		orderDetailDto: []
	});
	const [ formError, setformError ] = useState({});
	const [ isSubmit, setIsSubmit ] = useState(false);

	const navigator = useNavigate();

	const { id } = useParams();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};
	const handleClick = async (e) => {
		e.preventDefault();
		const validateResult = validate(formData);
		setformError(validateResult);
		setIsSubmit(true);
	};
	const onClick = async (e) => {};
	const handleSubmit = async () => {
		if (Object.keys(formError).length === 0 && isSubmit) {
			const formbody = {
				orderdistrict: formData.orderdistrict,
				orderaddress: formData.orderaddress,
				ordercity: formData.ordercity,
				ordervoucher: formData.ordervoucher,
				ordernote: formData.ordernote,
				userid: cookies.loggin.userID,
				orderDetailDto: []
			};
			items.map((currentValue, index) => {
				const { id, itemTotal, name, price, quantity } = currentValue;
				const body = {};
				body.bookid = id;
				body.total = itemTotal;
				body.quantity = quantity;
				formbody.orderDetailDto.push(body);
			});
			await OrderAPI.Create(formbody)
				.then((res) => {
					toast(res.msg);
					// navigator('/admin/category');
					window.location.href="/Profile/Order";
				})
				.catch((err) => {
					alert(err.msg);
				});
		} else {
			setIsSubmit(false);
		}
	};
	const validate = (values) => {
		const errors = {};
		// const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		const phone_regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
		if (!values.orderdistrict) {
			errors.orderdistrict = 'District is required!';
		} else if (values.orderdistrict.trim().length <= 0) {
			errors.orderdistrict = 'District not be blank';
		}
		if (!values.orderaddress) {
			errors.orderaddress = 'Address is required!';
		} else if (values.orderaddress.trim().length <= 0) {
			errors.orderaddress = 'Address not be blank';
		}
		if (!values.ordercity) {
			errors.ordercity = 'City is required!';
		} else if (values.ordercity.trim().length <= 0) {
			errors.ordercity = 'City not be blank';
		}
		return errors;
	};
	useEffect(
		() => {
			handleSubmit();
		},
		[ formError ]
	);
	///

	const [ voucher, setVoucher ] = useState({
		voucherid: '',
		vouchertitle: '',
		voucherdescription: '',
		voucherstatus: 0,
		vouchervalue: 0,
		voucherfrom: '',
		voucherto: ''
	});
	function OnClickApply(props) {
		if (formData.ordervoucher === '') {
			alert('Empty');
		} else {
			VoucherAPI.Check(props).then((res) => {
				setVoucher(res.data);
			});
		}
		// console.log(props);
	}
	return (
		<div className="container wrapper">
			<pre>{JSON.stringify(formData, null, 2)}</pre> <br />
			<pre>{JSON.stringify(formError, null, 2)}</pre>
			<pre>{}</pre>
			<div className="row cart-head">
				<div className="container">
					<div className="row">
						<p />
					</div>
					<div className="row">
						<p />
					</div>
				</div>
			</div>
			<div className="row cart-body">
				<form className="form-horizontal" method="post" onSubmit={handleClick}>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
						{/*REVIEW ORDER*/}
						<div className="panel panel-info">
							<div className="panel-heading">
								Review Order <div className="pull-right" />
							</div>
							<div className="panel-body">
								{items.map((item) => (
									<div className="form-group">
										<div className="col-sm-6 col-xs-6">
											<div className="col-xs-12">{item.name}</div>
											<div className="col-xs-12">
												<small>
													Quantity:<span>{item.quantity}</span>
												</small>
											</div>
										</div>
										<div className="col-sm-3 col-xs-3 text-right">
											<h6>
												<span>$</span>
												{item.quantity} x ${item.price.toFixed(2)}
											</h6>
										</div>
									</div>
								))}
								<div className="form-group">
									<hr />
								</div>
								<div className="form-group">
									<div className="col-xs-12">
										<strong>Subtotal</strong>
										<div className="pull-right">
											<span>$</span>
											<span>{cartTotal}</span>
										</div>
									</div>
									<div className="col-xs-12">
										<small>Voucher</small>
										<div className="pull-right"><span>{voucher.vouchervalue !== 0 && ("-"+voucher.vouchervalue+"%") }</span></div>
									</div>
								</div>
								<div className="form-group">
									<hr />
								</div>
								<div className="form-group">
									<div className="col-xs-12">
										<strong>Order Total</strong>
										<div className="pull-right">
											<span>$</span>
											<span>{cartTotal-(cartTotal*voucher.vouchervalue)/100}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*REVIEW ORDER END*/}
						<button type="submit" class="btn btn-success col-md-12 col-xs-12">
							Success
						</button>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
						{/*SHIPPING METHOD*/}
						<div className="panel panel-info">
							<div className="panel-heading">Address</div>
							<div className="panel-body">
								<div className="form-group">
									<div className="col-md-12">
										<h4>Shipping Address</h4>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>District:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											className="form-control"
											name="orderdistrict"
											placeholder="Please enter your delivery District"
											value={formData.orderdistrict}
											onChange={handleChange}
										/>
										<p style={{ color: 'red' }}>{formError.orderdistrict}</p>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-6 col-xs-12">
										<strong>First Name:</strong>
										<input
											type="text"
											name="first_name"
											className="form-control"
											placeholder="First Name"
											value={cookies.loggin.first_name}
											readOnly
										/>
									</div>
									<div className="span1" />
									<div className="col-md-6 col-xs-12">
										<strong>Last Name:</strong>
										<input
											type="text"
											name="last_name"
											className="form-control"
											placeholder="Last Name:"
											value={cookies.loggin.last_name}
											readOnly
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>Address:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											name="orderaddress"
											className="form-control"
											placeholder="Please enter your delivery Address"
											value={formData.orderaddress}
											onChange={handleChange}
										/>
										<p style={{ color: 'red' }}>{formError.orderaddress}</p>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>City:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											name="ordercity"
											className="form-control"
											placeholder="Please enter your delivery City"
											value={formData.ordercity}
											onChange={handleChange}
										/>
										<p style={{ color: 'red' }}>{formError.ordercity}</p>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>Order Note:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											name="ordernote"
											className="form-control"
											value={formData.ordernote}
											onChange={handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>Voucher:</strong>
									</div>
									<div className="col-md-12">
										<div className="col-md-8">
											<input
												type="text"
												name="ordervoucher"
												className="form-control"
												placeholder="Enter discount code (if any)"
												value={formData.ordervoucher}
												onChange={handleChange}
											/>
										</div>
										<div className="col-md-4 col-xs-12">
											<button
												type="button"
												className="btn btn-success"
												onClick={() => OnClickApply(formData.ordervoucher)}
											>
												Apply
											</button>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>Phone Number:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											name="phone_number"
											className="form-control"
											value={cookies.loggin.phone_number}
											disabled
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<strong>Email Address:</strong>
									</div>
									<div className="col-md-12">
										<input
											type="text"
											name="email_address"
											className="form-control"
											value={cookies.loggin.user_email}
											disabled
										/>
									</div>
								</div>
							</div>
						</div>
						{/*SHIPPING METHOD END*/}
					</div>
				</form>
			</div>
			<div className="row cart-footer" />
		</div>
	);
}
export default Checkout;
