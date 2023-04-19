import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import Options from "./options";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedColor, setSelectedColor] = useState(""); 

  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    setShowOptions(true);
  };

  const handleColorSelect = (color) => {
    addToCart(id, color);
    setSelectedColor("");
    setShowOptions(false);
  };

  const handleCancel = () => {
    setSelectedColor("");
    setShowOptions(false);
  };

  const handleColorChange = (e) => {

    setSelectedColor(e.target.value);
  };

  return (
    <div className="product">
      <img src={productImage} alt="shop-item" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={handleAddToCart}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      {showOptions && (
        <Options
          onColorSelect={handleColorSelect}
          onCancel={handleCancel}
          selectedColor={selectedColor} // Pass the selected color to Options
          handleColorChange={handleColorChange} // Pass the handleColorChange function to Options
        />
      )}
    </div>
  );
};
