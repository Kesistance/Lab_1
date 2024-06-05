function App() {
	const mySuperStyles = {
		backgroundColor: 'yellow',
		borderRadius: '5px',
		padding: '10px',
		display: 'inline-flex',
		alignItems: 'center',
	};
	const alertext = {
		fontWeight: 'bold',
		marginRight: '10px',
	};
	const alertcount = {
		backgroundColor: 'red',
		color: 'white',
		borderRadius: '50%',
		padding: '5px 10px',
	};
	return (
		<div style={mySuperStyles}>
			<span style={alertext}>Alerts</span>
			<span style={alertcount}>2</span>
		</div>
	);
}

export default App;
