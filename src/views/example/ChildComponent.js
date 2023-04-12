import React, { Component } from 'react'

export default class ChildComponent extends Component {
	state = {
		showJobs: false,
	}

	handleShowHide = () => {
		this.setState({
			showJobs: !this.state.showJobs,
		})
	}

	handleDelete = (job) => {
		this.props.deleteJob(job)
	}

	render() {
		let { arrJob } = this.props
		let { showJobs } = this.state
		return (
			<>
				{showJobs === false ? (
					<div>
						<button onClick={() => this.handleShowHide()}>Show</button>
					</div>
				) : (
					<>
						<div className='job-lists'>
							{arrJob.map((item) => {
								return (
									<div key={item.id}>
										{item.langName} - {item.salary}$ <span onClick={() => this.handleDelete(item)}>X</span>
									</div>
								)
							})}
						</div>
						<div>
							<button onClick={() => this.handleShowHide()}>Hide</button>
						</div>
					</>
				)}
			</>
		)
	}
}

// const ChildComponent = (props) => {
// 	let { arrJob } = props
// 	return (
// 		<>
// 			<div className='job-lists'>
// 				{arrJob.map((item) => {
// 					return (
// 						<div key={item.id}>
// 							{item.langName} - {item.salary}
// 						</div>
// 					)
// 				})}
// 			</div>
// 		</>
// 	)
// }

// export default ChildComponent
