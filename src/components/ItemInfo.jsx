import React from 'react';
import { Toggle } from '.';
import Button from './Button';
import Rating from '@material-ui/lab/Rating';

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
    <div className="itemInfo__reviewScore d-flex justify-content-between align-items-center w-100">
      <span className="fw-bold text-start">Review Rating</span>
      <div className="d-flex no-wrap align-items-center">
        <span className="me-1">{`(${selectedItem.reviewScore})`}</span>
        <Rating value={selectedItem.reviewScore} readOnly={true} precision={0.5}/>
      </div>
    </div>

    <Button addToCart={() => incrementCartCount(cartCount + 1)} />
  </div>
);

export default ItemInfo;
