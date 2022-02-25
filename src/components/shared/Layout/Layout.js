import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Section from '../Section/Section';

import { Sidebar } from '../../main/Sidebar';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="containerContent">
				<Sidebar />
				<Section container={children} />
			</div>
			<Footer />
		</>
	);
};
