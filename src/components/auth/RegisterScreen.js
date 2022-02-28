import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const dispatch = useDispatch();

	const { msgError } = useSelector((state) => state.ui);
	const { loading } = useSelector((state) => state.ui);

	const [formValue, handleInputChange, reset] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValue;

	const handleRegister = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startRegisterWithEmailPasswordName(email, password, name));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));

			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not invalid'));

			return false;
		} else if (password !== password2 || password.length < 5) {
			dispatch(setError('Password should be at least 6 characters and match each other'));
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleRegister}>
				{loading && <div className="auth__alert-loading">Loading...</div>}
				{msgError && <div className="auth__alert-error">{msgError}</div>}

				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={name}
				/>
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
				<input
					type="password"
					placeholder="Confirm Password"
					name="password2"
					className="auth__input"
					autoComplete="off"
					onChange={handleInputChange}
					value={password2}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block mb-5"
					disabled={loading}
				>
					Register
				</button>
				<button onClick={reset} type="submit" className="btn btn-primary btn-block mb-5">
					Cancel
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
