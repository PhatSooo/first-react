import axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DetailsUser extends Component {
	state = {
		user: {},
	}
	async componentDidMount() {
		if (this.props.match && this.props.match.params) {
			let id = this.props.match.params.id

			let res = await axios.get(`https://reqres.in/api/users/${id}`)
			this.setState({
				user: res && res.data && res.data.data ? res.data.data : {},
			})
		}
	}

	handleBackButton() {
		this.props.history.push('/user')
	}
	render() {
		let { user } = this.state
		let isEmptyObj = Object.keys(user).length === 0
		return (
			<>
				<div>DetailsUser: {this.props.match.params.id}</div>
				{isEmptyObj === false && (
					<>
						<div>
							User's name: {user.first_name} - {user.last_name}
						</div>
						<div>User's email: {user.email}</div>
						<div>
							<img alt={user.avatar} src={user.avatar}></img>
						</div>
					</>
				)}
				<div>
					<button type='button' onClick={() => this.handleBackButton()}>
						Go Back
					</button>
				</div>
			</>
		)
	}
}

export default withRouter(DetailsUser)
