import React, { Component } from 'react';
import { Link } from 'react-router';
import history from './history';
import WorkBox from './work-box';
import Linker from './linker';
import Header from './header';
import Footer from './footer';
import Modal from './modal';
import { Motion, spring, presets } from 'react-motion';

class Work extends Component {

	state = {
		showModal: false,
		source: ''
	}

	componentDidMount = () => {
		window.addEventListener('keyup', this.onKeyUp);
		document.getElementById('app').style.backgroundColor = '#e55f76';

	}

	componentWillUnmount = () => {
		window.removeEventListener('keyup', this.onKeyUp);
	}
	
	onKeyUp = e => {
		if (e.keyCode === 37) {
			history.push({
				pathname: '/znalosti'
			});
			return;
		}
		if (e.keyCode === 39 ) {
			history.push({
				pathname: '/kontakt'
			});
			return;
		}
		return;
	}

	onClick = (e, title) => {
		this.setState({
			showModal: true,
			source: title 
		});
	}

	hideModal = e => {
		this.setState({
			showModal: false 
		});
	}

	render() {
		const {showModal, source} = this.state;
		return (
			
			<div className="work-container container">
				<div className="work-content content content-center">
					<Linker path="znalosti" className="work-link-prev link-prev" position="prev" >Znalosti</Linker>
					{ showModal && <Modal show={showModal} source={source} hideModal={this.hideModal} /> }
					<Header>Práce</Header>
					<Motion
							defaultStyle={{x: 50, y: 0}}
							style={{x: spring(0, presets.gentle), y: spring(1, [50, 15])}}				
							>
							{ style => {
								return (						
									<div className="work-box-container"  style={{transform: `translateY(${style.x}px)`, opacity: `${style.y}` }}>					
										<WorkBox title="joam" onClick={this.onClick} >Joam HTML template</WorkBox>
										<WorkBox title="resto" onClick={this.onClick}>Resto HTML template</WorkBox>
										<WorkBox title="brandi" onClick={this.onClick}>Brandi HTML template</WorkBox>
										<WorkBox title="hydra" onClick={this.onClick}>Hydra HTML template</WorkBox>
										<WorkBox title="reddit" github="reddit-app"  onClick={this.onClick}>Reddit App</WorkBox>
										<WorkBox title="flickr" github="flickr-app" onClick={this.onClick}>Flickr App</WorkBox>
										<p className="work-box-text">Další stránky včetně této lze nalézt na <a href="http://github.com/baza58" className="work-box-link">github.com/baza58</a></p>
									</div>
								);
							} }
						</Motion>	
					<Linker path="kontakt" className="work-link-next link-next" position="next" >Kontakt</Linker> 
					<Footer />
				</div>	
			</div>
		);
	}
}

export default Work;