import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../../actions/auth';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<aside className="main__sidebar">
			<div className="main_sidebar-navbar">
				<h3>
					<h3 className="mt-5">
						<i className="far fa-moon" />
						<span> Gonzalo</span>
					</h3>
				</h3>
				<button className="btn" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className="main_menu_sidebar-navbar">
				<NavLink to="/private/home" className="linkLight">
					<h3>Home</h3>
				</NavLink>
				<NavLink to="/private/providers" className="linkLight">
					<h3>Providers</h3>
				</NavLink>
				<NavLink to="/private/products" className="linkLight">
					<h3>Products</h3>
				</NavLink>
			</div>
		</aside>
	);
};
