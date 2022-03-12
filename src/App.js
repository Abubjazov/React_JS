import { Component } from 'react'

import { CounterButton } from './components/CounterButton'

import './App.css'

export const App = () => {
	return <div className='App'>Func App</div>
}

export class AppClass extends Component {
	render() {
		return (
			<div className='App'>
				<CounterButton />
			</div>
		)
	}
}
