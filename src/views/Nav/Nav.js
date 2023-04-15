import React, { Component } from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
	render() {
		return (
			<div className='topnav'>
				<NavLink to='/' exact activeClassName='active'>
					Home
				</NavLink>
				<NavLink to='/todo' activeClassName='active'>
					Todo
				</NavLink>
				<NavLink to='/about' activeClassName='active'>
					About
				</NavLink>
				<NavLink to='/user' activeClassName='active'>
					Users
				</NavLink>
			</div>
		)
	}
}
