import { Component } from 'react'

import { CounterButton } from './components/CounterButton'
import { Counter } from './components/Counter'
import { Button } from './components/Button'

import './App.css'
import { MyLink } from './components/MyLink'
import { ValidationMsg } from './components/ValidationMsg'

export const App = () => {
	return <div className='App'>Func App</div>
}

export class AppClass extends Component {
	handleClick = e => {
		e.preventDefault()
		e.stopPropagation()
		console.log('Clicked on link')
	}

	handleClick2 = e => {
		console.log('Clicked on div')
	}

	render() {
		const val = null

		return (
			<div className='App' onClick={this.handleClick2}>
				<CounterButton child={<Button />}>
					<Counter />
				</CounterButton>
				<MyLink onClick={this.handleClick} />
				<ValidationMsg val={11} />
				{val != null ? <h2>Heder One</h2> : <h2>Heder Two</h2>}
				{val && <h2>Heder Three</h2>}
			</div>
		)
	}
}
