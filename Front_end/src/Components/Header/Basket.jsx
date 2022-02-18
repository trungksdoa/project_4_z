import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import { useState } from 'react';

export default function Basket(props) {
    const {
        cartTotal,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        clearCartMetadata,
      } = useCart();
//   const { cartItems, onAdd, onRemove } = props;
//   const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
//   const totalPrice = itemsPrice;
const [data, setData] = useState('');
  return (
    <div className="dropdown tg-themedropdown tg-minicartdropdown">
    <a href="#!" id="tg-minicart" className="tg-btnthemedropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="tg-themebadge">
        ({totalUniqueItems})
        </span>
        <i className="icon-cart" />
        <span></span>
    </a>
    
    <div className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-minicart">
        <div className="tg-minicartbody">
        {/* {cartItems.length === 0 && <div>Cart is empty</div>} */}
        {items.map((item) => (
            <div className="tg-minicarproduct" key={item.id}>
            
            
            <div className="tg-minicarproductdata">
                <h5><a>{item.name}</a></h5>
                <h6><a>$ {item.quantity} x ${item.price.toFixed(2)}</a></h6>
                <h3><button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
            </h3>
            </div>
        </div>
        ))}
        </div>
        <div className="tg-minicartfoot">
            
            <span className="tg-subtotal">Subtotal: <strong>${cartTotal}</strong></span>
            <div className="tg-btns">
                <a className="tg-btn tg-active" href="#!">View Cart</a>
                <a className="tg-btn" href="./Order/Checkout">Checkout</a>
            </div>
        </div>
    </div>
</div>
  );
}