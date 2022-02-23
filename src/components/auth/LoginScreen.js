import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					autoComplete="off"
				/>

				<button type="submit" className="btn btn-primary btn-block mb-5">
					Login
				</button>

				<Link to="/auth/register" className="link">
					Create new account
				</Link>
			</form>
		</>
	);
};
