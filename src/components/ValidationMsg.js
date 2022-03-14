export const ValidationMsg = ({ val }) =>
	val >= 10 ? (
		<div>Grate than 10</div>
	) : (
		<div>
			Less than <em>10</em>
		</div>
	)
