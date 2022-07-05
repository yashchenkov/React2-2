import React from 'react';
import ShopCard from './ShopCard';


export default function CardsView(props) {
  const { cards } = props;

  return(
	<div className="cards">{cards.map(o => {
		 return <ShopCard item={o} />
	})}
	</div>
	)
}