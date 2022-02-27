import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
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
			console.log('Formulario correcto');
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('Name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('Email is not invalid');
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log('Password should be at least 6 characters and match each other');
			return false;
		}

		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleRegister}>
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

				<button type="submit" className="btn btn-primary btn-block mb-5">
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
