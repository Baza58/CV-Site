import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';

const Footer = () => {
	return (
		<Motion
			defaultStyle={{x: 100, y: 0}} 
			style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}} >
			{style => {
				return (
					<footer className="footer" style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}`}} >
						<a href="zivotopis-cj.pdf" download className="footer-link">
							<p>PDF</p>
							<img  src={require('../images/arrow-pdf.svg')} />
							<svg  x="0px" y="0px" viewBox="6.6 -0.7 37.5 51.4" className="footer-img" enable-background="new 6.6 -0.7 37.5 51.4">				
								<path fill="#FFFFFF" d="M17.7,26.2c2.7,1.2,7,1.4,7,1.4c0.1,0,0.2,0,0.3,0l0,0l0,0l0,0l0,0c0.1,0,0.2,0,0.3,0c0,0,4.3-0.2,7-1.4c0,0,0.4-0.1,0.4-1c0,0-0.1-3.9-1.3-5.7c0,0-0.3-0.5-1.1-0.8c0,0-2.8-0.8-2.9-1.6c0,0-0.9,2.4-2.3,2.3c-1.4,0-2.3-2.3-2.3-2.3c-0.2,0.7-2.9,1.6-2.9,1.6c-0.8,0.3-1.1,0.8-1.1,0.8c-1.2,1.8-1.3,5.7-1.3,5.7C17.3,26.1,17.7,26.2,17.7,26.2z"/>
								<path fill="#FFFFFF" d="M22,14.4c0.2,1.7,1.7,3.5,3,3.5c1.5,0,3-1.9,3.2-3.5c0.1-0.1,0.2-0.2,0.3-0.5c0,0,0.3-1.2-0.1-1
								c0.2-0.4,0.7-2.2-0.3-3.3c0,0-0.4-0.6-1.6-0.9l-0.1-0.1c0,0,0,0,0.1,0.1c-0.1,0-0.1,0-0.2,0c-0.1-0.1-0.1-0.1-0.2-0.2
								c0,0,0.1,0.1,0.1,0.2h-0.1c0-0.1-0.1-0.2-0.2-0.2c0,0,0,0.1,0.1,0.2c-0.2-0.1-0.6-0.5-0.6-0.9c0,0-0.3,0.1-0.4,0.3
								c-0.1-0.1,0-0.2,0-0.2c-0.1,0.1-0.4,0.3-0.5,0.6l-0.1-0.1c-0.2-0.2-0.5,0-0.5,0s-1.6,0.7-2.1,2.1c0,0-0.3,0.6,0.1,2.6
								c-0.5-0.2-0.2,1-0.2,1C21.7,14.1,21.9,14.3,22,14.4z"/>
								<path fill="#FFFFFF" stroke="#FFFFFF" stroke-miterlimit="10" d="M36.1,2V0h-3.2v2H17.2V0H14v2H7.2v48h35.7V2H36.1z M9,48.1V3.9h4.9v2.6h3.2V3.9h15.7v2.6H36V3.9h5v44.3H9V48.1z"/>
								<rect x="13.3" y="41.9" fill="#FFFFFF" width="18.9" height="1.9"/>
								<rect x="13.3" y="30.9" fill="#FFFFFF" width="24.5" height="1.9"/>
								<rect x="13.3" y="34.6" fill="#FFFFFF" width="22.6" height="1.9"/>
								<rect x="13.3" y="38.3" fill="#FFFFFF" width="20.7" height="1.9"/>
							</svg>
						</a>
					</footer>
				);
			}}
		</Motion>
	);
}

export default Footer;