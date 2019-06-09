import React from 'react';
import Layout from './hoc/Layout';
import Tickets from './containers/Tickets/Tickets';
import Filters from './containers/Filters/Filters';

function App() {
	return (
		<div className="App">
			<Layout>
				<div className="container">
					<div className="row">
						<Tickets />
						<Filters />
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default App;
