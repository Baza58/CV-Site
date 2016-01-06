import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

const Header = ({children}) => {

	return (
		<Motion 
			defaultStyle={{x: -100, y: 0}} 
			style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}} >
			{ style => {
				return (
					<header className="header" style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}`}} >
						<h1>{ children }</h1>
						<h3>Petr Bažout</h3>
					</header>
				);
			} }
		</Motion>
	);
}

export default Header;