import './App.css';

function App() {
	const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
	return (
		<ul className='list-group m-5'>
			{planets.map((planet, index) => (
				<li key={index} className='list-group-item'>
					{planet}
				</li>
			))}
		</ul>
	);
}

export default App;
