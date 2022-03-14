import { Component } from 'react'

import { CounterButton } from './components/CounterButton'
import { Counter } from './components/Counter'
import { Button } from './components/Button'

import './App.css'
import { MyLink } from './components/MyLink'

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
		return (
			<div className='App' onClick={this.handleClick2}>
				<CounterButton child={<Button />}>
					<Counter />
				</CounterButton>
				<MyLink onClick={e => this.handleClick(e, 'data')} />
			</div>
		)
	}
}
