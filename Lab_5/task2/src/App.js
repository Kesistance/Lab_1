function App() {
	const customer = {
		first_name: 'Bob',
		last_name: 'Dylan',
	};
	return (
		<div>
			<h1>My name is {customer.first_name}</h1>
			<h2>My last name is {customer.last_name}</h2>
		</div>
	);
}

export default App;
