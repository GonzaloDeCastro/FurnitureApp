import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../../redux/reducers/authReducer';
import { productsReducer } from '../../redux/reducers/productsReducer';
import { providersReducer } from '../../redux/reducers/providersReducer';
import { uiReducer } from '../../redux/reducers/uiReducer';

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	products: productsReducer,
	providers: providersReducer,
});

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
