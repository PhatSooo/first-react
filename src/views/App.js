import logo from './logo.svg'
import './App.scss'
import Nav from './Nav/Nav'
import MyComponent from './example/MyComponent'
import Home from './example/Home'
import ListTodo from './Todos/ListTodo'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ListUser from './Users/ListUsers'
import DetailsUser from './Users/DetailsUser'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/todo'>
							<ListTodo />
						</Route>
						<Route path='/about'>
							<MyComponent />
						</Route>
						<Route exact path='/user'>
							<ListUser />
						</Route>
						<Route path='/user/:id'>
							<DetailsUser />
						</Route>
					</Switch>
				</header>

				<ToastContainer
					position='top-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme='light'
				/>
			</div>
		</Router>
	)
}

export default App
