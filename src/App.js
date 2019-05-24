import React from 'react';
import Tickets from './containers/Tickets/Tickets';
import Logo from './component/Logo/Logo';
import Filters from './containers/Filters/Filters';

function App() {
	return (
		<div className="App">
			<Logo />
			<Tickets />
			<Filters />
		</div>
	);
}

export default App;
