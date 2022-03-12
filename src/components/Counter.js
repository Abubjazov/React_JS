import PropTypes from 'prop-types'

export const Counter = ({ value, string }) => (
	<h1>{`Counter value is: ${value} ${string}`}</h1>
)

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	string: PropTypes.string,
}

Counter.defaultProps = {
	string: 'STR',
}
