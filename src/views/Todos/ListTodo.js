import React, { Component } from 'react'
import './ListTodo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify'
import Color from '../HOC/Color'

class ListTodo extends Component {
	state = {
		listTodos: [
			{ id: 'todo1', title: 'Doing Homwork' },
			{ id: 'todo2', title: 'Fixing Bug' },
			{ id: 'todo3', title: 'Making Video' },
		],
		editTodo: {},
	}

	addNewTodo = (todo) => {
		this.setState({
			listTodos: [...this.state.listTodos, todo],
		})

		toast('🦄 Wow so easy!', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	handleDeleteTodo = (todo) => {
		let currentTodo = this.state.listTodos
		currentTodo = currentTodo.filter((item) => item.id !== todo.id)
		this.setState({
			listTodos: currentTodo,
		})
		toast.success('🦄 Remove todo successfully', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark',
		})
	}

	handleEditTodo = (todo) => {
		let { editTodo, listTodos } = this.state
		let isEmptyObj = Object.keys(editTodo).length === 0
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodosCopy = [...listTodos]
			let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id)
			listTodosCopy[objIndex].title = editTodo.title
			this.setState({
				listTodos: listTodosCopy,
				editTodo: {},
			})
			toast.success('🦄 Updating todo successfully', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			})
			return
		}
		this.setState({
			editTodo: todo,
		})
	}

	handleOnchangeEditTodo = (e) => {
		let editTodoCopy = { ...this.state.editTodo }
		editTodoCopy.title = e.target.value
		this.setState({
			editTodo: editTodoCopy,
		})
	}

	render() {
		let { listTodos, editTodo } = this.state
		let isEmptyObj = Object.keys(editTodo).length === 0

		return (
			<>
				<p>Simple Todo App with React</p>

				{/* <MyComponent /> */}
				<div className='list-todo-container'>
					<AddTodo addNewTodo={this.addNewTodo} />

					<div className='list-todo-content'>
						{listTodos &&
							listTodos.length > 0 &&
							listTodos.map((item, index) => {
								return (
									<div className='todo-child' key={item.id}>
										{isEmptyObj ? (
											<span>
												{index + 1}- {item.title}
											</span>
										) : (
											<>
												{editTodo.id === item.id ? (
													<span>
														{index + 1}-
														<input onChange={(e) => this.handleOnchangeEditTodo(e)} value={editTodo.title} />
													</span>
												) : (
													<span>
														{index + 1}- {item.title}
													</span>
												)}
											</>
										)}

										<button onClick={() => this.handleEditTodo(item)} className='edit'>
											{isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
										</button>
										<button onClick={() => this.handleDeleteTodo(item)} className='delete'>
											Delete
										</button>
									</div>
								)
							})}
					</div>
				</div>
			</>
		)
	}
}

export default Color(ListTodo)
