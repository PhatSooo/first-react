import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import Color from '../HOC/Color'
import logo from '../../assets/images/meoami.jpg'
import { connect } from 'react-redux'

class Home extends Component {
	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.props.history.push('/todo')
	// 	}, 6000)
	// }
	handleDeleteUser = (languages) => {
		console.log(languages)
		this.props.deleteUserRedux(languages)
	}

	handleCreateUser = () => {
		this.props.addUserRedux()
	}

	render() {
		console.log(this.props.dataRedux)
		let { dataRedux } = this.props
		return (
			<>
				<div style={{ paddingBottom: 20 }}>Home</div>
				<div>
					<img src={logo} alt=''></img>
				</div>
				<div>
					{dataRedux &&
						dataRedux.length > 0 &&
						dataRedux.map((item, index) => {
							return (
								<div key={item.id}>
									{index + 1} - {item.lang}
									&nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>
								</div>
							)
						})}
					<button onClick={() => this.handleCreateUser()}>Add new</button>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return { dataRedux: state.languages }
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_LANGUAGE', payload: userDelete }),
		addUserRedux: () => dispatch({ type: 'CREATE_LANGUAGE' }),
	}
}

// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
