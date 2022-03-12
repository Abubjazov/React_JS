import { Component } from 'react'

export class CounterButton extends Component {
	state = {
		counter: 0,
	}

	handleClick = () => {}

	render() {
		const { counter } = this.state
		return <div>{counter}</div>
	}
}
