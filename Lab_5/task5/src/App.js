function App() {
	const animals = ['Horse', 'Turtle', 'Elephant', 'Monkey'];
	return (
		<ul className='nav'>
			{animals.map((animal, index) => (
				<li key={index}>{animal}</li>
			))}
		</ul>
	);
}

export default App;
