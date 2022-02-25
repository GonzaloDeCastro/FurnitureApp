import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import Footer from '../components/shared/Footer/Footer';
export const AuthRouter = () => {
	return (
		<div className="body">
			<div className="auth__main">
				<div className="auth__box-container">
					<Switch>
						<Route exact path="/auth/login" component={LoginScreen} />
						<Route path="/auth/register" component={RegisterScreen} />

						<Redirect to="/auth/login" />
					</Switch>
				</div>
			</div>
			<Footer />
		</div>
	);
};
