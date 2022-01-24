import React from 'react';
import Button from '../Button/Button';
import './Item.css';
import loveSvg from '../../Assets/love.svg';
import addSvg from '../../Assets/add.svg';


const Item = () => {
  return (
    <div className="item rad-shadow">
      <img className="item__img" src="https://cdn1.ozone.ru/s3/multimedia-5/wc1200/6160835081.jpg" alt="item"/>
      <div className="item__text">
        <a href="#">
          <p>
            L'Oreal Professionnel Serie Expert Vitamino Color Шампунь для окрашенных волос, 300 мл
          </p>
        </a>
        <div className="item__bottom-row">
          <Button icon={loveSvg} />
          <Button filled={true} label={'746 ₽'} icon={addSvg} />
        </div>
      </div>
    </div>
  )
}

export default Item;
