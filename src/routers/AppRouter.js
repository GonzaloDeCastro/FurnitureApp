import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { Layout } from '../components/shared/Layout/Layout';

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />

					<Route path="/private">
						<Layout>
							<DashboardRoutes />
						</Layout>
					</Route>

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
