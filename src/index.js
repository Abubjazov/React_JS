import React from 'react'
import ReactDOM from 'react-dom'

import { App, AppClass } from './App'

import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<AppClass />
	</React.StrictMode>,
	document.getElementById('root')
)
