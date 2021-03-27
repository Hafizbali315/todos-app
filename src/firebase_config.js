import firebase from 'firebase'

var firebaseConfig = {
	apiKey: 'AIzaSyBEcn43aNt7i2818evcBobNNBfSeXt_fOo',
	authDomain: 'todos-app-a0f12.firebaseapp.com',
	projectId: 'todos-app-a0f12',
	storageBucket: 'todos-app-a0f12.appspot.com',
	messagingSenderId: '1081810646188',
	appId: '1:1081810646188:web:35c2aff119eb715e6bdb09',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
