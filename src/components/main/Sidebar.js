import React from 'react';
import { Link } from 'react-router-dom';

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

			<Link to="/private/home" className="linkLight">
				{' '}
				Home
			</Link>
			<Link to="/private/providers" className="linkLight">
				{' '}
				Providers
			</Link>
			<Link to="/private/products" className="linkLight">
				{' '}
				Products
			</Link>
		</aside>
	);
};
