import React, { Component } from 'react';
import { Link } from 'react-router';
import history from './history';
import Linker from './linker';
import Header from './header';
import Footer from './footer';
import SkillsBox from './skills-box';
import { Motion, spring, presets } from 'react-motion';
import { preload } from './helpers';

class Skills extends Component {

	componentDidMount = () => {
		window.addEventListener('keyup', this.onKeyUp);
		document.getElementById('app').style.backgroundColor = '#02779E';
		preload([
			require('../images/brandi-thumbnail.jpg'),
			require('../images/flickr-thumbnail.jpg'),
			require('../images/hydra-thumbnail.jpg'),
			require('../images/joam-thumbnail.jpg'),
			require('../images/reddit-thumbnail.jpg'),
			require('../images/resto-thumbnail.jpg'),
		]);
	}

	componentWillUnmount = () => {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = e => {
		if (e.keyCode === 37) {
			history.push({
				pathname: '/vzdelani'
			});
			return;
		}
		if (e.keyCode === 39 ) {
			history.push({
				pathname: '/prace'
			});
			return;
		}
		return;
	}

	render() {
		return (
			<div className="skills-container container">
				<div className="skills-content content content-center">
					<Linker path="vzdelani" className="skills-link-prev link-prev" position="prev" >Vzdělání</Linker>					
					<Header>Znalosti</Header>
					<Motion
							defaultStyle={{x: 50, y: 0}}
							style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}}				
							>
							{ style => {
								return (
									<div className="skills-box-container" style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}` }}>
										<SkillsBox logo="html5">HTML5</SkillsBox>
										<SkillsBox logo="css3">CSS3</SkillsBox>
										<SkillsBox logo="js">JavaScript ES2015</SkillsBox>
										<SkillsBox logo="react">React a Redux</SkillsBox>
										<SkillsBox logo="git">Git</SkillsBox>
										<SkillsBox logo="photoshop" extension="jpg">Photoshop</SkillsBox>					
									</div>
								);
							} }
						</Motion>
					
					<Linker path="prace" className="skills-link-next link-next" position="next" >Práce</Linker>
					<Footer />
				</div>	
			</div>
		);
	}
}

export default Skills;