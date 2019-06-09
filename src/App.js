import React, { Component } from 'react';
import Layout from './hoc/Layout';
import Tickets from './containers/Tickets/Tickets';
import Filters from './containers/Filters/Filters';

import { connect } from 'react-redux';
import * as actions from './store/actions/index';


class App extends Component {
	componentDidMount() {
		this.props.onFetchExchangeRate();
	}

	render() {
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
		)
	};
}

const mapStateToProps = state => {
	return {
		currency: state.currency
	}
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchExchangeRate: () => dispatch(actions.fetchExchageRate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
