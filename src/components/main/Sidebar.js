import React from 'react';

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
		</aside>
	);
};
