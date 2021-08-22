import React from 'react';

const Toggle = ({ selectItem, items, selectedItem }) => (
  <div className="toggle">
    <div className="toggle__label">Select matress type</div>
    <div className="d-flex flex-column flex-sm-row">
      {items.map((i) => (
        <div
          key={`toggle-${i.id}`}
          onClick={() => selectItem(i)}
          className={`toggle__button${
            i.id === selectedItem.id ? '--active' : ''
          } w-100`}
        >
          {i.name}
        </div>
      ))}
    </div>
  </div>
);

export default Toggle;
