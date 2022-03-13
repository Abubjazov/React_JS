import { Component } from 'react'
import PropTypes from 'prop-types'

Component.propTypes = {
	node: PropTypes.node,
}

Component.propTypes = {
	element: PropTypes.element,
}

Component.propTypes = {
	instance: PropTypes.instanceOf(ConstructorName),
}

Component.propTypes = {
	element: PropTypes.oneOf(['val1', 'val2']),
}

Component.propTypes = {
	element: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Component.propTypes = {
	array: PropTypes.arrayOf(PropTypes.string),
	object: PropTypes.objectOf(PropTypes.number),
}

Component.propTypes = {
	obj: PropTypes.shape({
		color: PropTypes.string,
		fontSize: PropTypes.number,
		lineHeight: PropTypes.number,
	}),
}
