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
		}

		if (operation === '-') {
			this.setState(({ counter }) => ({
				counter: --counter,
			}))
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
