import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_65QNABA-zyfcXPSo6woNFBiQHAbW-JU",
    authDomain: "react-firebase-auth-d1cff.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-d1cff.firebaseio.com",
    projectId: "react-firebase-auth-d1cff",
    storageBucket: "react-firebase-auth-d1cff.appspot.com",
    messagingSenderId: "865795047739",
    appId: "1:865795047739:web:417c92de07909f2f9cf71e"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;