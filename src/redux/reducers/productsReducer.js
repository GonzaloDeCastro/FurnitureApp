import {
	ADD_PRODUCT,
	EDIT_PRODUCT,
	GET_PRODUCTS,
	REMOVE_PRODUCT,
} from '../../types/productsTypes';

const initialState = {
	list: [],
	isLoading: false,
	error: '',
};

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case REMOVE_PRODUCT:
			return {
				...state,
				list: state.list.filter((product) => product._id !== action.payload),
			};
		case EDIT_PRODUCT:
			return {
				...state,
				list: state.list.map((product) =>
					product._id === action.payload._id ? action.payload : product
				),
			};
		case GET_PRODUCTS:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};
