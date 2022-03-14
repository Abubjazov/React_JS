export const Button = ({ name, text, onClick }) => (
	<button data-name={name} onClick={onClick}>
		{text}
	</button>
)
