function App() {
	const BootstrapCard = props => {
		return (
			<div class='card m-5 w-25'>
				<img class='card-img-top' src={props.image} alt='Sorry)' />
				<div class='card-body'>
					<h5 class='card-title'>{props.title}</h5>
					<p class='card-text'>{props.description}</p>
					<a href={props.buttonLink} class='btn btn-primary'>
						{props.buttonLabel}
					</a>
				</div>
			</div>
		);
	};
	BootstrapCard.defaultProps = {
		title: 'Bob Dylan',
		description:
			'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.',
		buttonLink: 'https://en.wikipedia.org/wiki/Bob_Dylan',
		buttonLabel: 'Go to wikipedia',
		image: 'Dylan.png',
	};
	const Hero = props => {
		return (
			<div class='card m-5 w-25'>
				<div class='card-body'>
					<h5 class='card-title'>{props.title}</h5>
					<p class='card-text'>{props.description}</p>
					<a href={props.buttonLink} class='btn btn-primary'>
						{props.buttonLabel}
					</a>
				</div>
			</div>
		);
	};

	const Alert = props => {
		return (
			<div class='alert alert-primary' role='alert'>
				{props.text}
			</div>
		);
	};

	return (
		<div>
			<Alert text='OMG! Something really bad has happened!' />
			<BootstrapCard
				title='Bob Dylan'
				description='Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter.'
				buttonLink='https://en.wikipedia.org/wiki/Bob_Dylan'
				buttonLabel='Go to wikipedia'
				image='Dylan.png'
			/>
			<Hero
				title='Welcome to react'
				description='React is the most popular rendering library in the world'
				buttonLabel='Go to the official website'
				buttonLink='https://reactjs.org/'
			/>
		</div>
	);
}

export default App;
