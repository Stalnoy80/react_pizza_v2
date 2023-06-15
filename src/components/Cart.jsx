import React from 'react';
import Header from './Header';

const Cart = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top"></div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
