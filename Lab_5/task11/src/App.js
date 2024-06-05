function App() {
	const alertStyles = {
		fontSize: '16px',
		borderRadius: '10px',
		maxWidth: '400px',
	};
	const color = {
		red: 'alert-danger',
	};

	const text = {
		red: 'OMG! Something really bad has happened!',
	};
	const Alert = props => {
		const handleClick = () => {
			console.log('I was clicked!');
		};
		if (props.show === true) {
			return (
				<div
					className={`alert ${color[props.color]}`}
					role='alert'
					style={alertStyles}
					onClick={handleClick}
				>
					<span>{text[props.color]}</span>
				</div>
			);
		} else {
			return null;
		}
	};
	return <Alert color='red' show={true} />;
}

export default App;
