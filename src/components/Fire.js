import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOo53gsikeUbqx60Mh1DRaI_nD5_3zyD8",
    authDomain: "virginforestproject.firebaseapp.com",
    databaseURL: "https://virginforestproject.firebaseio.com",
    projectId: "virginforestproject",
    storageBucket: "virginforestproject.appspot.com",
    messagingSenderId: "232668074364",
    appId: "1:232668074364:web:f5828f39bfe5b5b44014f9",
    measurementId: "G-K9YS97LJYX"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;