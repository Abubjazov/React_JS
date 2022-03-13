import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class CounterButton extends Component {
	static propTypes = {
		children: PropTypes.element,
	}

	static defaultTypes = {
		children: null,
	}

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
		const { children, child } = this.props

		return (
			<>
				{child}
				{React.cloneElement(children, { value: counter })}
				<button onClick={() => this.handleClick('+')}> + </button>
				<button onClick={() => this.handleClick('-')}> - </button>
			</>
		)
	}
}
