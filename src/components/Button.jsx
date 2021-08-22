import React from 'react';

const Button = ({ label = 'Add to Cart', addToCart }) => (
  <button onClick={addToCart} className="buyButton w-100">
    {label}
  </button>
);

export default Button;
