import React from 'react';

export default function ShopItem(props) { 
  const { item } = props;

  return(
  	<div className="item-list">
  	  <h4 className="list-title">{item.name}</h4>
  	  <span className="color">{item.color}</span>
  	  <img src={item.img} alt="кроссовки" className="img-list" />
  	  <div className="price-button">
  	  	<span className="price">{item.price}</span>
  	  	<button className="button--submit" type="submit">add to cart</button>
  	  </div>
  	</div>
  	)
}