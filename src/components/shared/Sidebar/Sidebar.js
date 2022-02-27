import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
	return (
		<aside className="main__sidebar">
			<div className="main_sidebar-navbar">
				<h3>
					<h3 className="mt-5">
						<i className="far fa-moon" />
						<span> Gonzalo</span>
					</h3>
				</h3>
				<button className="btn">Logout</button>
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
