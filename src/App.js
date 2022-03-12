import { Component } from 'react'
import './App.css'

export const App = () => {
	return <div className='App'>Func App</div>
}

export class AppClass extends Component {
	render() {
		return <div className='App'>Class App</div>
	}
}
