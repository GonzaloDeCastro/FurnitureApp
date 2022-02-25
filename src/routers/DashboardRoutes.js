import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Products } from '../components/products/Products';
import { Providers } from '../components/providers/Providers';

export const DashboardRoutes = () => {
	return (
		<>
			<Switch>
				<Route exact path="/private/main" component={Home} />
				<Route path="/private/providers" component={Providers} />
				<Route path="/private/products" component={Products} />
				<Redirect to="/private/main" />
			</Switch>
		</>
	);
};
