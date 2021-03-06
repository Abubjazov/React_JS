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

const Tab1 = () => <h1>Text of Tab1</h1>
const Tab2 = () => <h1>Text of Tab2</h1>
const Tab3 = () => <h1>Text of Tab3</h1>

export class AppClass extends Component {
	state = {
		activeTab: 1,
	}

	handleTab = e => {
		e.stopPropagation()

		this.setState({
			activeTab: +e.target.getAttribute('data-name'),
		})
	}

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
		const { activeTab } = this.state

		console.log(this.state.activeTab)

		return (
			<div className='App' onClick={this.handleClick2}>
				<CounterButton child={<Button />}>
					<Counter />
				</CounterButton>
				<MyLink onClick={this.handleClick} />
				<ValidationMsg val={11} />
				{val != null ? <h2>Heder One</h2> : <h2>Heder Two</h2>}
				{val && <h2>Heder Three</h2>}
				<div>
					<Button name={1} text={'Tab 1'} onClick={this.handleTab} />
					<Button name={2} text={'Tab 2'} onClick={this.handleTab} />
					<Button name={3} text={'Tab 3'} onClick={this.handleTab} />
					{activeTab === 1 && <Tab1 />}
					{activeTab === 2 && <Tab2 />}
					{activeTab === 3 && <Tab3 />}
				</div>
			</div>
		)
	}
}
