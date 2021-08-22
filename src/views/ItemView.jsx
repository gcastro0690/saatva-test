import React, { useState } from 'react';
import { ItemImage, ItemInfo, Nav } from '../components';

const items = [
  {
    id: 1,
    name: 'Saatva classic',
    price: '$999',
    image: 'images/classic-carousel.jpg',
    reviewScore: 4.5
  },
  {
    id: 2,
    name: 'Loom & Leaf',
    price: '$1.299',
    image: 'images/loom-carousel.jpg',
    reviewScore: 1
  },
  {
    id: 3,
    name: 'Zenhaven',
    price: '$1.599',
    image: 'images/zen-carousel.jpg',
    reviewScore: 1.5
  },
];

const ItemView = () => {
  const [selectedItem, setItem] = useState(items[1]);
  const [cartCount, incrementCartCount] = useState(0);
  return (
    <>
      <Nav cartCount={cartCount} />
      <div className="main container-lg d-flex flex-column flex-lg-row">
        <ItemImage {...selectedItem} />
        <ItemInfo
          cartCount={cartCount}
          incrementCartCount={incrementCartCount}
          items={items}
          selectedItem={selectedItem}
          selectItem={setItem}
        />
      </div>
    </>
  );
};

export default ItemView;
