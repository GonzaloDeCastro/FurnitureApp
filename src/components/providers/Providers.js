import React, { useState, useEffect } from 'react';
//import { providers as initalProviders } from '../../mocks/providers.json';
import { Header } from './Header';
import { ProvidersList } from './ProviderList';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { creatorAsyncGet } from '../../redux/actions/providersActions';

export const Providers = () => {
	const [showForm, setShowForm] = useState({ show: false, mode: 'Add' });
	const [providers, setproviders] = useState({});
	const [providerToEdit, setProviderToEdit] = useState(undefined);
	const { providerSelected, list } = useSelector((state) => state.providers);

	const dispatch = useDispatch();
	useEffect(() => {
		if (providerSelected) {
			setShowForm({ show: true, mode: 'Edit' });
		}
	}, [providerSelected]);

	useEffect(() => {
		dispatch(creatorAsyncGet());
		return () => {};
	}, [dispatch]);

	const handleEditClick = (provider) => {
		setProviderToEdit(provider);
		setShowForm({ show: true, mode: 'Edit' });
	};

	const handleAddProvider = (provider) => {
		provider.id = uuidv4();
		setproviders([...providers, provider]);
	};

	const handleDeleteProvider = (id) => {
		const newProviders = providers.filter((provider) => provider.id !== id);
		setproviders(newProviders);
	};

	const handleEditProvider = (provider) => {
		const newProviders = providers.map((x) => (x.id === provider.id ? provider : x));
		setproviders(newProviders);
	};

	return (
		<div>
			<Header
				showProviderForm={showForm}
				setShowProviderForm={setShowForm}
				onAddProvider={handleAddProvider}
				onEditProvider={handleEditProvider}
				providerToEdit={providerToEdit}
			/>
			<ProvidersList
				providerList={list}
				onDelete={handleDeleteProvider}
				onEdit={handleEditClick}
			/>
		</div>
	);
};
