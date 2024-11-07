import React from 'react';
import Countdown from './Countdown';

const OfferCard = ({ imgSrc, discount, oldPrice, newPrice, productName, countdownTime, id }) => {
  return (
    <div className="offer-card">
      <div className="offer-image">
        <img src={imgSrc} alt={productName} />
        <div className="discount-badge">{discount}% OFF</div>
      </div>
      <div className="offer-details">
        <h2>{productName}</h2>
        <div style={{ marginTop: '5px' }}>
          <h3>
            <del style={{ color: 'red' }}>${oldPrice}</del> -{' '}
            <ins style={{ color: 'green' }}>${newPrice}</ins>
          </h3>
        </div>
        <p>Enjoy a {discount}% discount on {productName}!</p>
        <div className='countdown'><Countdown countdownTime={countdownTime} id={id} /></div> 
        
      </div>
    </div>
  );
};

export default OfferCard;
