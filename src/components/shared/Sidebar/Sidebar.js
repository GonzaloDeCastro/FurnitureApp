import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../../redux/actions/auth';

export const Sidebar = () => {
	const { name } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<aside className="main__sidebar">
			<div className="main_sidebar-navbar">
				<h3 className="mt-5">
					<i className="far fa-sun" />
					<span> {name}</span>
				</h3>

				<button className="btn mt-5" onClick={handleLogout}>
					<h6>Logout</h6>
				</button>
			</div>
			<div className="main_menu_sidebar-navbar">
				<NavLink to="/private/home" className="linkLight">
					Home
				</NavLink>
				<NavLink to="/private/providers" className="linkLight">
					Providers
				</NavLink>
				<NavLink to="/private/products" className="linkLight">
					Products
				</NavLink>
			</div>
		</aside>
	);
};
