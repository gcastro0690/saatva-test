import React from 'react';

const ItemImage = ({ image, name }) => (
  <div className="main__mattressImg">
    <picture>
      <img className="w-100" src={image} alt={name}></img>
    </picture>
  </div>
);

export default ItemImage;
