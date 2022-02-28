import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

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
				console.log(e);
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
