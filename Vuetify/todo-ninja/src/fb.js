import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqHRl30C8c0AxuO9zIPOYlo3RRnNzxvew",
    authDomain: "todo-ninja-2eca9.firebaseapp.com",
    databaseURL: "https://todo-ninja-2eca9.firebaseio.com",
    projectId: "todo-ninja-2eca9",
    storageBucket: "todo-ninja-2eca9.appspot.com",
    messagingSenderId: "387981847213",
    appId: "1:387981847213:web:5dfce6e5dfa7710631b424",
    measurementId: "G-8S57CZ10N3"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;