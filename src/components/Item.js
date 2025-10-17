import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create state to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Toggle function for button
  function handleAddToCartClick() {
    setIsInCart(!isInCart);
  }

  // Step 3: Use state to set class and button text
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCartClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
