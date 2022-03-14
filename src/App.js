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
	render() {
		return (
			<div className='App'>
				<CounterButton child={<Button />}>
					<Counter />
				</CounterButton>
				<MyLink />
			</div>
		)
	}
}
