import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValue, handleInputChange] = useForm({
		email: 'gonzalodecastro1@gmail.com',
		password: '123456',
	});

	const { email, password } = formValue;

	const handleLogin = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
			console.log('Formulario correcto');
		}
	};

	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError('Email is not invalid'));
			return false;
		} else if (password.length < 5) {
			dispatch(setError('Password should be at least 6 characters'));

			return false;
		}
		dispatch(removeError());
		return true;
	};
	return (
		<>
			<h3 className="auth__title">Login</h3>

			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={email}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={password}
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
