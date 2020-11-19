import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "mario-plan-react-app-919c9.firebaseapp.com",
    databaseURL: "https://mario-plan-react-app-919c9.firebaseio.com",
    projectId: "mario-plan-react-app-919c9",
    storageBucket: "mario-plan-react-app-919c9.appspot.com",
    messagingSenderId: "219783691386",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-VW0FGCC45T"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase
