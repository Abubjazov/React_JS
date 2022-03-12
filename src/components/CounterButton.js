import { Component } from 'react'

export class CounterButtonOld extends Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: 0,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {}
}

export class CounterButtonNew extends Component {
	state = {
		counter: 0,
	}

	handleClick = () => {}
}
