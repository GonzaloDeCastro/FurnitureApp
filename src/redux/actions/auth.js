//import { types } from '../types/types';
import { firebase } from '../../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2';
import { types } from '../../types/types';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(finishLoading());
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				dispatch(finishLoading());
				Swal.fire('Fail Login', e.message, 'error');
			});
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		dispatch(startLoading());
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(finishLoading());
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				console.log(e);
				dispatch(finishLoading());
				Swal.fire('Fail Register', e.message, 'error');
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();
		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout,
});
