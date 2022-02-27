import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD4iSpSAqReaG1GvUauWgFlbJe4TslB77w',
	authDomain: 'react-app-2bbb5.firebaseapp.com',
	projectId: 'react-app-2bbb5',
	storageBucket: 'react-app-2bbb5.appspot.com',
	messagingSenderId: '472138161878',
	appId: '1:472138161878:web:6d9fae1043adbe9b99b377',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.googleAuthProvider();

export { db, googleAuthProvider, firebase };
