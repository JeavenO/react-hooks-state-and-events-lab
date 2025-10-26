import React, { useState } from "react";

function Item({ name, category }) {
  // 1. Create a state variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // 2. Handler to toggle the 'inCart' state when the button is clicked
  const handleAddToCart = () => {
    setInCart(!inCart);
  };

  // 3. Conditionally set the <li> className based on the state
  const listItemClass = inCart ? "in-cart" : "";

  // 4. Conditionally set the button's text based on the state
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    // Use the dynamic class name
    <li className={listItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* 5. Attach the handler to the button's onClick event */}
      <button className="add" onClick={handleAddToCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
