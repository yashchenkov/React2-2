import React from 'react';

export default function IconSwitch(props) {
	const { icon, onSwitch } = props;
	return(<button className='material-icons switch' onClick={onSwitch}>{icon}</button>)
}