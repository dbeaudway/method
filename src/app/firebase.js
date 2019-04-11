import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDMi6rczcaYWXwKz1n4Bsv1fJLbW0byXwA",
    authDomain: "method-236922.firebaseapp.com",
    databaseURL: "https://method-236922.firebaseio.com",
    projectId: "method-236922",
    storageBucket: "method-236922.appspot.com",
    messagingSenderId: "899488850720"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
    }
}

export default Firebase;

// const firebaseApp = firebase.initializeApp(config);
// const db = firebaseApp.firestore();
// export default db;