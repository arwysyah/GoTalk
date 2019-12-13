import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyCr0o8aXeSJLD8g04tOhv3m14vjTfHpya0",
    authDomain: "chatting-c282c.firebaseapp.com",
    databaseURL: "https://chatting-c282c.firebaseio.com",
    projectId: "chatting-c282c",
    storageBucket: "chatting-c282c.appspot.com",
    messagingSenderId: "560388687416",
    appId: "1:560388687416:web:4fcf9aec080cd20352c8cd",
    measurementId: "G-1V0HGEVWDD"
};

let app = firebase.initializeApp(firebaseConfig);

export const Database = app.database();
export const Auth = app.auth();
