import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const ItemImage = ({ image }) => (
  <SwitchTransition>
    <CSSTransition
      key={image}
      addEndListener={(node, done) => {
        node.addEventListener('transitionend', done, false);
      }}
      classNames="fade"
    >
      <div className="itemImgContainer">
        <div
          className="itemImgContainer__itemImg w-100 h-100"
          style={{ backgroundImage: `url(${image}` }}
        ></div>
      </div>
    </CSSTransition>
  </SwitchTransition>
);

export default ItemImage;
