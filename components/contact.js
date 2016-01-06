import React, { Component } from 'react';
import { Link } from 'react-router';
import history from './history';
import Linker from './linker';
import Header from './header';
import Footer from './footer';
import Form from './form';
import { Motion, spring, presets } from 'react-motion';

class Contact extends Component {

	componentDidMount = () => {
		window.addEventListener('keyup', this.onKeyUp);
		document.getElementById('app').style.backgroundColor = '#C44D58';
	}

	componentWillUnmount = () => {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = e => {
		if (e.keyCode !== 37 || e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
			return;
		}
		history.push({
				pathname: '/prace'
		});
		return;
	}

	render() {
		return (
			<div className="contact-container container">
				<div className="contact-content content content-center">
					<Linker path="prace" className="contact-link-prev link-prev" position="prev" >Práce</Linker>
					<Header>Kontakt</Header>
					<Motion
							defaultStyle={{x: 50, y: 0}}
							style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}}				
							>
							{ style => {
								return (						
									<div className="contact-text-container"  style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}` }}>
										<div className="contact-text">
											<h2>Petr Bažout</h2>
											<h2>Frontend web developer</h2>
											<h2>+420 723 775 841</h2>
											<a href="mailto:bazout.p@gmail.com" className="contact-link">bazout.p@gmail.com</a>
											<a href="http://petrbazout.cz" className="contact-link">petrbazout.cz</a>
										</div>
										<Form />
									</div>
								);
							} }
						</Motion>	
					<Footer />
				</div>	
			</div>
		);
	}
}

export default Contact;