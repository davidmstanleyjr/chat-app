import React, { Component } from 'react';
import UserNameForm from './components/UserNameForm';

class App extends Component {
	render() {
		return <UserNameForm onSubmit={(username) => alert(username)} />;
	}
}

export default App;
