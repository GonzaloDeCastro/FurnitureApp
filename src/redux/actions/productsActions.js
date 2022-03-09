import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	GET_PRODUCTS,
	REMOVE_PRODUCT,
} from '../../types/productsTypes';

export const creatorAddProduct = (product) => {
	product.id = uuidv4();

	return {
		type: ADD_PRODUCT,
		payload: product,
	};
};
export const creatorRemoveProduct = (productId) => {
	return {
		type: REMOVE_PRODUCT,
		payload: productId,
	};
};

export const creatorEditProduct = (product) => {
	return {
		type: EDIT_PRODUCT,
		payload: product,
	};
};

export const getProducts = (products) => {
	return {
		type: GET_PRODUCTS,
		payload: products,
	};
};

export const deleteAsyncCreator = (productId) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${productId}`
			);
			console.log(response);
			if (response.status === 202) {
				const action = creatorRemoveProduct(productId);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const addAsyncCreator = (product) => {
	return async (dispatch) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/products`,
				product
			);
			console.log(response);
			if (response.status === 201) {
				const action = creatorAddProduct(response.data.dato);
				dispatch(action);
			}
		} catch (error) {}
	};
};

export const editAsyncCreator = (product) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/${product._id}`,
				product
			);
			console.log(response);
			if (response.status === 200) {
				const action = creatorEditProduct(response.data.update);
				dispatch(action);
			}
		} catch (error) {}
	};
};
export const getProductsAsyncCreator = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL_PORT}/api/products/all`
			);

			if (response.status === 200) {
				const action = getProducts(response.data.data);
				dispatch(action);
			}
		} catch (error) {}
	};
};
