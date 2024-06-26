function App() {
	const alertStyles = {
		fontSize: '16px',
		borderRadius: '10px',
		maxWidth: '400px',
	};
	const color = {
		red: 'alert-danger',
		yellow: 'alert-warning',
		green: 'alert-success',
	};

	const text = {
		red: 'OMG! Something really bad has happened!',
		yellow: 'Well, it is not that bad after all!',
		green: 'I am supposed to be green',
	};
	const Alert = props => {
		if (props.show === true) {
			return (
				<div
					class={`alert ${color[props.color]}`}
					role='alert'
					style={alertStyles}
				>
					{text[props.color]}
				</div>
			);
		} else {
			return null;
		}
	};
	return (
		<div>
			<Alert color='red' show={true} />
			<Alert color='yellow' show={true} />
			<Alert color='green' show={true} />
		</div>
	);
}

export default App;
