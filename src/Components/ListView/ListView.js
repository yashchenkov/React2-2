import React from 'react';
import ShopItem from './ShopItem';


export default function ListView(props) {
  const { items } = props;

  return(
	<div className="lists">{items.map(o => {
		return <ShopItem item={o} />
	})}
	</div>
	)
}