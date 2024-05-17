import React from "react";
<div className="cart-item">
  <img className="cart-item__image" src={item.image.url} alt={item.name} />
  <div className="cart-item__details">
    <h4 className="cart-item__details-name">{item.name}</h4>
    <div className="cart-item__details-qty">
        <button type="button" onClick={() = handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
        <p>{item.quantity}</p>
        <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
    </div>
    <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
  </div>
  <button
    type="button"
    className="cart-item__remove"
  >
    Remove
  </button>
</div>