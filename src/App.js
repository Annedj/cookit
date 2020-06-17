import React from "react";
import KitLibrary from './KitLibrary';
import "./scss/main.scss";
import "./App.scss";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Cookit</h1>
				<h2>Our kits</h2>
				<KitLibrary/>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
