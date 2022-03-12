import React from 'react';

export const Home = () => {
	return (
		<div className="homeContainer">
			<h2>Welcome</h2>
			<p>This is a system of add delete and modifications of suppliers and products.</p>
			<p>
				Once you are registered you can register products, modify them and also delete
				them.
			</p>
			<p>You can also add suppliers, modify or delete them.</p>
			<p>
				The system is programmed with front-end code in React, it connects to a backend
				programmed with Express in Nodejs
			</p>
			{/* <p>And the database to which the backend connects is MongoDB.</p> */}
		</div>
	);
};
