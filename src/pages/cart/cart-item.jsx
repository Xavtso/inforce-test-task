import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage,} = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
 
  const [showModal, setShowModal] = useState(false);

  const handleRemoveClick = () => {
    setShowModal(true);
  };

  const handleConfirmRemove = () => {
    removeFromCart(id);
    setShowModal(false);
  };

  const handleCancelRemove = () => {
    setShowModal(false);
  };

  const handleRemoveItem = () => {
    handleRemoveClick();
  };

  return (
    <div className="cartItem">
      <img src={productImage} alt="item"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="color-desc">Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
      {!showModal && (
        <button className="removeButton" onClick={handleRemoveItem}>
          X
        </button>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to remove this item?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmRemove}>Yes</button>
              <button id="btn-no" onClick={handleCancelRemove}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
