import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import { Layout } from '../components/shared/Layout/Layout';
import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
			}
		});
	}, [dispatch]);

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
