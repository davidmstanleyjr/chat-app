import React from 'react';

class UserNameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.state({
			username: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.username);
	}

	render() {
		return (
			<div>
				<div>
					<h2>What is your username?</h2>
					<form onSubmit={this.onSubmit}>
						<input type="text" placeholder="What is your username?" onChange={this.onChange} />
						<input type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default UserNameForm;
