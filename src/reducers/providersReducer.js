import {
	ADD_PROVIDER,
	EDIT_PROVIDER,
	GET_PROVIDERS,
	REMOVE_PROVIDER,
} from '../types/providersTypes';

const initialState = {
	list: [],
	selectedProvider: null,
	error: '',
};

export const providersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROVIDER:
			return {
				...state,
				list: [action.payload, ...state.list],
			};
		case REMOVE_PROVIDER:
			return {
				...state,
				list: state.list.filter((provider) => provider._id !== action.payload),
			};
		case EDIT_PROVIDER:
			return {
				...state,
				list: state.list.map((provider) =>
					provider._id === action.payload._id ? action.payload : provider
				),
			};
		case GET_PROVIDERS:
			return {
				...state,
				list: action.payload,
			};
		default:
			return state;
	}
};
