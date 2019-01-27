import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {};

const config = {
    apiKey: "AIzaSyCpu_BEXY9R-MnYTOSHn8tFcVb7XoMzZn8",
    authDomain: "ibrahimmanga-39497.firebaseapp.com",
    databaseURL: "https://ibrahimmanga-39497.firebaseio.com",
    projectId: "ibrahimmanga-39497",
    storageBucket: "ibrahimmanga-39497.appspot.com",
    messagingSenderId: "1015457858700"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;