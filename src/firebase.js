import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()
import firebase from "firebase/app";
import 'firebase/firestore';

const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = publicRuntimeConfig;
const config = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
}

const _firebase = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const firestore = _firebase.firestore();

export default firestore;