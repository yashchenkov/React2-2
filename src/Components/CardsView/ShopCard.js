import React from 'react';

export default function ShopCard(props) { 
  const { item } = props;

  return(
  	<div className="item-card">
  	  <h4 className="card-title">{item.name}</h4>
  	  <span className="color">{item.color}</span>
  	  <img src={item.img} alt="кроссовки" className="img-card" />
  	  <div className="price-button">
  	  	<span className="price">{item.price}</span>
  	  	<button className="button--submit" type="submit">add to cart</button>
  	  </div>
  	</div>
  	)
}