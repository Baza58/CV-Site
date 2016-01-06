import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

class Modal extends Component {

	componentDidMount = () => {
		this.modal.style.alignItems = 'flex-start';
		setTimeout(() => {
		const height = this.img.clientHeight;
		if (height === 0) return;
		if (height < window.innerHeight) {
			this.modal.style.alignItems = 'center';
			this.modal.style.WebkitAlignItems = 'center';
		}
		}, 20)
		
	}

	componentDidUpdate = () => {
		this.modal.scrollTop = 0;
		
	}

	render() {
		const {show, source, hideModal} = this.props;
		return (
			<Motion
				defaultStyle={{y: 0}}
				style={{y: spring(1, [50, 15])}}				
				>
				{ style => {
					return (						
						<div className="modal-container" style={{opacity: `${style.y}`}} onClick={hideModal} >
							<div className="modal-content">
								<div className="modal-img-container" ref={node => this.modal = node} >
									<img src={require(`../images/${source ? source : 'resto'}.jpg`)} 
										 ref={node => this.img = node}
									 	 className="modal-img" />					
								</div>
							</div>
						</div>
					);
				} }
			</Motion>	
		);
	}
}

export default Modal;