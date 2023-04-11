import React, { Component } from 'react'

export default class ChildComponent extends Component {
	render() {
		console.log('>>> Check Props: ', this.props)
		let { name, address, age, arrJob } = this.props
		return (
			<>
				<div>child component: {name}</div>
				<div>child age: {age}</div>
				<div>child nation: {address}</div>
				<br />
				<div className='job-lists'>
					{arrJob.map((item) => {
						return (
							<div key={item.id}>
								{item.langName} - {item.salary}
							</div>
						)
					})}
				</div>
			</>
		)
	}
}
