import React, { Component } from 'react';
import history from './history';
import Transition from 'react-motion-ui-pack';
import Header from './header';
import Footer from './footer';
import Linker from './linker';
import { Link } from 'react-router';
import { Motion, spring, presets } from 'react-motion';
import { preload } from './helpers';

class Education extends Component {

	componentDidMount = () => {
		window.addEventListener('keyup', this.onKeyUp);
		document.getElementById('app').style.backgroundColor = '#3abbb2';
		preload([
			require('../images/html5-logo.svg'),
			require('../images/css3-logo.svg'),
			require('../images/js-logo.svg'),
			require('../images/react-logo.svg'),
			require('../images/git-logo.svg'),
			require('../images/photoshop-logo.jpg'),
		]);
	}

	componentWillUnmount = () => {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = e => {
		if (e.keyCode === 37) {
			history.push({
				pathname: '/'
			});
			return;
		}
		if (e.keyCode === 39 ) {
			history.push({
				pathname: '/znalosti'
			});
			return;
		}
		return;
	}

	render() {
		return (
			<div className="education-container container">			
				<div className="education-content content content-center">
					<Linker path="/" className="education-link-prev link-prev" position="prev" >Úvod</Linker>
					<Header>Vzdělání</Header>
					<Motion
						defaultStyle={{x: 50, y: 0}}
						style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}} >
						{ style => {
							return (
								<div className="education-text" style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}` }}>
									<h2>Obchodní akademie Žatec</h2>
									<h3>Ekonomické lyceum</h3>
									<h4>2010 - 2014</h4>
									<img src={require('../images/skola.jpeg')} />
								</div>
							);
						}}
					</Motion>
					<Footer />
					<Linker path="znalosti" className="education-link-next link-next" position="next">Znalosti</Linker>
				</div>	
			</div>
		);
	}
}

export default Education;