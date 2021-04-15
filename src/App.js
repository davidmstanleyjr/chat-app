import { response } from 'express';
import React, { Component } from 'react';
import UserNameForm from './components/UserNameForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUsername: ''
		};
		this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
	}

	onUsernameSubmitted(username) {
		fetch('http://localhost:3001/users', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ username })
		})
			.then((response) => {
				this.setState({
					currentUsername: username
				});
			})
			.catch((error) => console.error('error', error));
	}

	render() {
		return <UsernameForm onSubmit={this.onUsernameSubmitted} />;
	}
}

export default App;
