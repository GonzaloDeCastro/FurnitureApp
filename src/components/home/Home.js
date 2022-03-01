import React from 'react';

export const Home = () => {
	return (
		<div className="homeContainer">
			<h2>Welcome</h2>
			<h4>This is a system of add delete and modifications of suppliers and products.</h4>
			<h4>
				Once you are registered you can register products, modify them and also delete
				them.
			</h4>
			<h4>You can also add suppliers, modify or delete them.</h4>
			<h4>
				The system is programmed with front-end code in React, El mismo se conecta a un
				backend programado con Express en Nodejs
			</h4>
			<h4>And the database to which the backend connects is MongoDB.</h4>
		</div>
	);
};
