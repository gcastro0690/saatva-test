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
      <div className="main__mattressImgContainer">
        <div
          className="main__mattressImgContainer__mattressImg"
          style={{ backgroundImage: `url(${image}` }}
        ></div>
        <div
          className="main__mattressImgContainer__mattressImgReflection"
          style={{ backgroundImage: `url(${image}` }}
        ></div>
      </div>
    </CSSTransition>
  </SwitchTransition>
);

export default ItemImage;
