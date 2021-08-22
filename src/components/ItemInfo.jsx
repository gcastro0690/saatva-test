import React from 'react';
import { Toggle } from '.';
import Button from './Button';

const ItemInfo = ({
  items,
  selectItem,
  selectedItem,
  incrementCartCount,
  cartCount,
}) => (
  <div className="itemInfo">
    <h2>Choose Your Mattress</h2>
    <Toggle items={items} selectItem={selectItem} selectedItem={selectedItem} />
    <div className="itemInfo__price d-flex justify-content-between w-100">
      <span className="fw-bold">{selectedItem.name}</span>
      <span>{selectedItem.price}</span>
    </div>
    <Button addToCart={() => incrementCartCount(cartCount + 1)} />
  </div>
);

export default ItemInfo;
