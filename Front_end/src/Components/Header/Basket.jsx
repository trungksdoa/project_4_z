import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
import { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: "1rem",
	width: "35px",
	cursor: 'pointer',
	position: "relative",
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function Basket(props) {
	const { open } = props;
	const {
		cartTotal,
		isEmpty,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		clearCartMetadata
	} = useCart();
	return (
		<div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
			{items.length === 0 && (
				<div className="tg-description"><p>No products were added to the cart!</p></div>
			)}
			<div className="tg-minicartbody" style={items.length !== 0 ? {
				paddingTop: 10,
				height: 300,
				overflowY: "scroll"
			} : {}}>
				{items.length !== 0 && items.map((item, index) => {
					return (
						<div className="tg-minicarproduct" key={index}>
							<figure className="image_with_badge_container" style={{
								width: 70,
								height: 70
							}}>
								<img
									src={
										'http://localhost:9999/image/' + item.img + '?v=' + new Date().getTime()
									}
									alt="image description"
								/>
								<span className="badge badge-on-image">{item.quantity}</span>
							</figure>
							<div className="tg-minicarproductdata">
								<h5>
									<a href="#!">{item.name}</a>
								</h5>
								<div>
									${item.price.toFixed(2)}
									<hr />
									<Stack direction="row" spacing={2}>
										<Item onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
											<RemoveIcon style={{
												position: "absolute",
												/* text-align: center; */
												/* top: 50%; */
												top: "8px",
												left: "11px",
											}}></RemoveIcon>
										</Item>
										<Item onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
											<i className="fa fa-plus fa-lg"></i>
										</Item>
										<Item onClick={() => removeItem(item.id)}>
											<i className="fa fa-times fa-lg" aria-hidden="true" ></i>
										</Item>
									</Stack>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{items.length !== 0 && (
				<div className="tg-minicartfoot">
					<span className="tg-subtotal">
						Subtotal: <strong>${cartTotal}</strong>
					</span>
					<div className="tg-btns">
						<a className="tg-btn tg-active">

						</a>
						<a className="tg-btn" href="./Order/Checkout">
							Checkout
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
