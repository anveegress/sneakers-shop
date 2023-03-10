import React from 'react';
import '../../index.scss';

export default function Card() {
  return (
    <div>
        <div className="card">
        <div className="favorite">
        <img width={11} height={11} src="/img/heart-unliked.png" alt="unliked" />
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
        <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.png" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  )
}
