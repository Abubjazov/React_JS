import PropTypes from 'prop-types'

export const Counter = ({ value }) => <h1>{`Counter value is: ${value}`}</h1>

Counter.propTypes = {
	value: PropTypes.number,
}

// Counter.defaultProps = {
// 	string: 'STR',
// }
