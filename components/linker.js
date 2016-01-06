import React, { Component } from 'react';
import { Link } from 'react-router';
import { Motion, spring, presets } from 'react-motion';

const Linker = ({children, className, path, position}) => {
	
	return (
		<Motion 
			defaultStyle={{x: 50, y: 0}}
			style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}} >
			{style => {
				return (
					<Link to={path} className={className} style={{transform: `translateX(${position === "prev" ? style.x : -style.x}px)`, opacity: `${style.y}` }}>
						<img src={require('../images/arrow.svg')} className="arrow-img" />
						<p className="arrow-text">
							{children}
						</p>						
					</Link>
				);
			}}
		</Motion>		
	);
}

export default Linker;