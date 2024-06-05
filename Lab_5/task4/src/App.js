function App() {
	const navlinkItems = [
		<li>
			Link to <a href='https://www.google.com'>google.com</a>
		</li>,
		<li>
			Link to <a href='https://www.facebook.com'>facebook.com</a>
		</li>,
		<li>
			Link to <a href=' https://www.amazon.com'>amazon.com</a>
		</li>,
	];
	return <ul className='nav'>{navlinkItems}</ul>;
}

export default App;
