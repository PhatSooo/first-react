import axios from 'axios'
import React, { Component } from 'react'
import './ListUsers.scss'
import { withRouter } from 'react-router-dom'

class ListUser extends Component {
	state = {
		listUsers: [],
	}

	async componentDidMount() {
		// axios.get('https://reqres.in/api/users').then((res) => {
		// 	console.log('>>> Check Response: ', res)
		// })

		let res = await axios.get('https://reqres.in/api/users')
		this.setState({
			listUsers: res && res.data && res.data.data ? res.data.data : [],
		})
		console.log('>>> Check Response: ', this.state.listUsers)
	}

	handleUserDetail(user) {
		this.props.history.push(`/user/${user.id}`)
	}
	render() {
		let { listUsers } = this.state
		return (
			<div className='list-user-container'>
				<div className='title'>Fetch list user</div>
				<div className='list-user-content'>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<div onClick={() => this.handleUserDetail(item)} key={item.id} className='child'>
									{index + 1} - {item.first_name} {item.last_name}
								</div>
							)
						})}
				</div>
			</div>
		)
	}
}

export default withRouter(ListUser)
