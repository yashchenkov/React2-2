import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView/ListView';
import CardsView from './CardsView/CardsView';


export default function Store() {
  const [ icon, setIcon ] = useState('view_module');
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];


  if(icon === 'view_list') {
    return(
      <div className="container list">
  	    <IconSwitch icon={icon} onSwitch={() => icon === 'view_module' ? setIcon('view_list') : setIcon('view_module')} />
  	    <ListView items={products} />
  	  </div>
  	  )
  } else if(icon === 'view_module'){
  	return(
      <div className="container module">
  	    <IconSwitch icon={icon} onSwitch={() => icon === 'view_module' ? setIcon('view_list') : setIcon('view_module')} />
  	    <CardsView cards={products} />
  	  </div>  		
  	  )
  }
}