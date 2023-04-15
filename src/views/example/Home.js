import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import Color from '../HOC/Color'
class Home extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.history.push('/todo')
		}, 6000)
	}
	render() {
		return <div>Home</div>
	}
}

// export default withRouter(Home)
export default Color(Home)
