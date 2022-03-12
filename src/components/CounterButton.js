import { Component } from 'react'

export class CounterButton extends Component {
	state = {
		counter: 0,
	}

	handleClick = operation => {
		if (operation === '+') {
			this.setState({
				counter: this.state.counter + 1,
			})
		} else {
			this.setState({
				counter: this.state.counter - 1,
			})
		}
	}

	render() {
		const { counter } = this.state
		return (
			<>
				<div>{counter}</div>
				<button onClick={() => this.handleClick('+')}> + </button>
				<button onClick={() => this.handleClick('-')}> - </button>
			</>
		)
	}
}
