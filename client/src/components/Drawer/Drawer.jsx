import React from 'react';
import '../../index.scss';

export default function Drawer() {
  return (
<div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина<img className="cu-p" width={24} height={24} src="/img/btn-remove.png" alt="" />
          </h2>
        <div className="items">
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
            <span>Налог 5%: </span>
              <div></div>
              <b>1 074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ <img width={15} height={15} src="/img/arrow.png" alt="arrow" /></button>
        </div>
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" width={24} height={24} src="/img/btn-remove.png" alt="" />
        </div>

        <div className="cartItem d-flex align-center mb-20">
          <div style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" width={24} height={24} src="/img/btn-remove.png" alt="" />
        </div>

      </div>
      
    </div>
  )
}
