import React, { Component } from 'react';

class Form extends Component {

	state = {
		text: '',
		error: true,
		nameError: false,
		emailError: false,
		messageError: false
	}

	onSubmit = e => {
		e.preventDefault();
		if (!this.name.value) {
			this.setState({
				nameError: true
			});
			return;
		}
		if (!this.email.value || !/.+@.+/.test(this.email.value)) {
			this.setState({
				emailError: true
			});
			return;
		}
		if (!this.message.value) {
			this.setState({
				messageError: true
			});
			return;
		}
		const formData = new FormData();
		const xhr = new XMLHttpRequest();
		formData.append('name', this.name.value);
		formData.append('email', this.email.value);
		formData.append('message', this.message.value);
		xhr.addEventListener('load', e => {
			const status = e.target.status;
			if (status === 200) {
				this.setState({
					text: 'Zpráva byla úspěšně doručena.' 
				});
				return;
			}
			this.setState({
				text: 'Někde se stala chyba.' 
			});

		})
		xhr.open('POST', '/mail.php', true);
		xhr.send(formData);
	}

	checkName = e => {
		if (!this.name.value) {
			this.setState({
				nameError: true 
			});
			return;
		}
		this.setState({
			nameError: false 
		});
	}

	checkEmail = e => {
		if (!this.email.value) {
			this.setState({
				emailError: true 
			});
			return;
		}
		this.setState({
			emailError: false 
		});
	}

	checkMessage = e => {
		if (!this.message.value) {
			this.setState({
				messageError: true 
			});
			return;
		}
		this.setState({
			messageError: false 
		});
	}

	render() {
		const { nameError, emailError, messageError, error, text } = this.state;
		return (
		<form className="contact-form" encType="multipart/form-data" action="mail.php" method="POST" onSubmit={this.onSubmit}>
			<div className="form-field">
				<label htmlFor="name">Jméno</label>
				<input type="text" id="name" name="name" ref={node => this.name = node} onBlur={this.checkName} />
				{ this.state.nameError && <p className="form-error">Jméno nesmí být prázdné</p> }				
			</div>
			<div className="form-field">
				<label htmlFor="email">Email</label>
				<input type="text" id="email" name="email" ref={node => this.email = node} onBlur={this.checkEmail} />
				{ this.state.emailError && <p className="form-error">Email nesmí být prázdný a musí obsahovat @</p> }	
			</div>
			<div className="form-field">
				<label htmlFor="text">Zpráva</label>
				<textarea type="text" id="text" name="message" ref={node => this.message = node} onBlur={this.checkMessage} ></textarea>
				{ this.state.messageError && <p className="form-error">Zpráva nesmí být prázdná</p> }	
			</div>
			<button type="submit" className="form-submit" >Odeslat</button>
			<p className="form-submit-text">{text}</p>
		</form>

	);
	}
}

export default Form;