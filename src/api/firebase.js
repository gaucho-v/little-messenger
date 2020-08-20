import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

try {
    const firebaseConfig = {
        apiKey: "AIzaSyDNke9iMr3CT9fPZtT3CialnX97P5VbPvs",
        authDomain: "little-messanger.firebaseapp.com",
        databaseURL: "https://little-messanger.firebaseio.com",
        projectId: "little-messanger",
        storageBucket: "little-messanger.appspot.com",
        messagingSenderId: "536362779937",
        appId: "1:536362779937:web:f717d221b46459e317ea60"
    };
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e);
}



export const providerGit = new firebase.auth.GithubAuthProvider();




export default firebase;