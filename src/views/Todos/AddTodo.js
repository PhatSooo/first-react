import React, { Component } from 'react'
import { toast } from 'react-toastify'
export default class AddTodo extends Component {
	state = {
		title: '',
	}

	handleOnchange = (e) => {
		this.setState({
			title: e.target.value,
		})
	}

	handleAdd = () => {
		if (!this.state.title) {
			toast.error('🦄Mising Required Params')
			return
		}
		let todo = {
			id: Math.floor(Math.random() * 1001),
			title: this.state.title,
		}
		this.props.addNewTodo(todo)
		this.setState({
			title: '',
		})
	}
	render() {
		let { title } = this.state
		return (
			<div className='add-todo'>
				<input value={title} onChange={(e) => this.handleOnchange(e)} type='text' />
				<button onClick={() => this.handleAdd()} type='button' className='add'>
					Add
				</button>
			</div>
		)
	}
}
