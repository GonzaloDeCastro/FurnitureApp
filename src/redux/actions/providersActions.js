//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
	ADD_PROVIDER,
	EDIT_PROVIDER,
	GET_PROVIDERS,
	REMOVE_PROVIDER,
} from '../../types/providersTypes';

export const creatorAddProvider = (provider) => {
	//provider.id = uuidv4();

	return {
		type: ADD_PROVIDER,
		payload: provider,
	};
};
export const creatorRemoveProvider = (providerId) => {
	return {
		type: REMOVE_PROVIDER,
		payload: providerId,
	};
};

export const creatorEditProvider = (provider) => {
	return {
		type: EDIT_PROVIDER,
		payload: provider,
	};
};

export const creatorGetAllProviders = (providers) => {
	return {
		type: GET_PROVIDERS,
		payload: providers,
	};
};

// Anda
export const creatorAsyncAdd = (provider) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/`,
				provider
			);

			if (res.status === 201) {
				const action = creatorAddProvider(res.data.dato);
				dispatch(action);
			}
		} catch (error) {}
	};
};
// Anda
export const creatorAsyncRemove = (providerId) => {
	return async (dispatch) => {
		try {
			const res = await axios.delete(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${providerId}`
			);
			console.log(res.data.data._id);
			if (res.status === 202) {
				const action = creatorRemoveProvider(res.data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
// Anda
// No anda
export const creatorAsyncEdit = (provider) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/${provider.id}`,
				provider,
				console.log(provider)
			);
			console.log(res);
			if (res.status === 202 || res.status === 200 || res.status === 201) {
				return dispatch(creatorEditProvider(res.data));
			}
		} catch (error) {
			console.log('entro en error', error);
		}
	};
};
export const creatorAsyncGet = () => {
	return async (dispatch) => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/providers/all`
			);
			console.log(res.data.data);
			if (res.status === 200) {
				const action = creatorGetAllProviders(res.data.data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
