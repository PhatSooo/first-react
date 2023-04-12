import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

export default class MyComponent extends Component {
	state = {
		arrJob: [
			{ id: 'lang1', langName: 'China', salary: '1500' },
			{ id: 'lang2', langName: 'English', salary: '800' },
			{ id: 'lang3', langName: 'Japanese', salary: '2000' },
		],
	}

	addNewJob = (job) => {
		this.setState({
			arrJob: [...this.state.arrJob, job],
		})
	}

	deleteJob = (job) => {
		let currentJobs = this.state.arrJob
		currentJobs = currentJobs.filter((item) => item.id !== job.id)
		this.setState({
			arrJob: currentJobs,
		})
	}

	render() {
		return (
			<>
				<AddComponent addNewJob={this.addNewJob} />
				<ChildComponent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
			</>
		)
	}
}
