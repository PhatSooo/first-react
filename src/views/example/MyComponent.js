import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class MyComponent extends Component {
	state = {
		firstName: '',
		lastName: '',
		arrJob: [
			{ id: 'lang1', langName: 'China', salary: '1500$' },
			{ id: 'lang2', langName: 'English', salary: '800$' },
			{ id: 'lang3', langName: 'Japanese', salary: '2000$' },
		],
	}

	handleChangeFirstName = (event) => {
		this.setState({
			firstName: event.target.value,
		})
	}

	handleChangeLastName = (event) => {
		this.setState({
			lastName: event.target.value,
		})
	}

	handleClick = (e) => {
		e.preventDefault()
		console.log(this.state)
		alert('Button Clicked!')
	}

	render() {
		return (
			<>
				<form>
					<label htmlFor='fname'>First Name</label>
					<br />
					<input onChange={(event) => this.handleChangeFirstName(event)} type='text' value={this.state.firstName} />
					<br />
					<label htmlFor='lname'>Last Name</label>
					<br />
					<input onChange={(event) => this.handleChangeLastName(event)} type='text' value={this.state.lastName} />
					<br />
					<br />
					<input type='submit' onClick={(e) => this.handleClick(e)} />
				</form>

				<ChildComponent name={'child one'} age={'12'} address={'VN'} arrJob={this.state.arrJob} />
			</>
		)
	}
}
