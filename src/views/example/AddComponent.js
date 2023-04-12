import React, { Component } from 'react'

export default class AddComponent extends Component {
	state = {
		id: '',
		langName: '',
		salary: '',
	}

	handleChangeLangName = (event) => {
		this.setState({
			langName: event.target.value,
		})
	}

	handleChangeSalary = (event) => {
		this.setState({
			salary: event.target.value,
		})
	}

	handleClick = (e) => {
		e.preventDefault()
		if (!this.state.langName || !this.state.salary) {
			alert('Mising required params!')
			return
		}
		this.props.addNewJob({
			id: Math.floor(Math.random() * 100),
			langName: this.state.langName,
			salary: this.state.salary,
		})

		this.setState({
			langName: '',
			salary: '',
		})
	}

	render() {
		return (
			<>
				<form>
					<label htmlFor='fname'>Job's Title</label>
					<br />
					<input onChange={(event) => this.handleChangeLangName(event)} type='text' value={this.state.langName} />
					<br />
					<label htmlFor='lname'>Salary</label>
					<br />
					<input onChange={(event) => this.handleChangeSalary(event)} type='password' value={this.state.salary} />
					<br />
					<br />
					<input type='submit' onClick={(e) => this.handleClick(e)} />
				</form>
			</>
		)
	}
}
