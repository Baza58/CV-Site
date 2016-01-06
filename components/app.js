import React, { Component } from 'react';
import { Link } from 'react-router';
import history from './history';
import Footer from './footer';
import Linker from './linker';
import { Motion, spring, presets } from 'react-motion';
import { preload } from './helpers';

class App extends Component {

	componentDidMount = () => {
		window.addEventListener('keyup', this.onKeyUp);
		document.getElementById('app').style.backgroundColor = '#00a0b0';
		preload([
			require('../images/skola.jpeg')
		]);
	}

	componentWillUnmount = () => {
		window.removeEventListener('keyup', this.onKeyUp);
	}

	onKeyUp = e => {
		if (e.keyCode !== 39) {
			return;
		}
		history.push({
			pathname: '/vzdelani'
		})
	}
	render() {
		return (
			<div className="home-container container">
				<div className="home-content content">
					<Motion 
						defaultStyle={{x: 50, y: 0}}
						style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}} >
						{style => {
							return (
								<div className="home-text" style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}` }} >
									<h1>Petr Bažout</h1>
									<h2>Frontend web developer</h2>
									<h2>9. 8. 1994</h2>
									<h2>Praha 6</h2>
									<a href="http://petrbazout.cz" className="home-link">petrbazout.cz</a>
								</div>
							);
						}}
					</Motion>					
					<Footer />
					<Linker path="vzdelani" className="home-link-next link-next" position="next" >Vzdělání</Linker>
				</div>
			</div>
		);
	}
}

export default App;