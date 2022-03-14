import React from 'react'
import PropTypes from 'prop-types'

export const MyLink = ({ text, onClick }) => (
	<a href='/test' onClick={onClick}>
		{text}
	</a>
)

MyLink.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
}

MyLink.defaultProps = {
	text: 'the link',
	onClick: () => {},
}
