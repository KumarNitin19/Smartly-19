import firebase from 'firebase/compat/app';
import "firebase/compat/auth";


// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
    apiKey: "AIzaSyArxSdw-2DUh8Eydg4xR88CrffSpYvDr00",
    authDomain: "smartly-home-ca885.firebaseapp.com",
    projectId: "smartly-home-ca885",
    storageBucket: "smartly-home-ca885.appspot.com",
    messagingSenderId: "176730604263",
    appId: "1:176730604263:web:c58384fa451fbc13195842"
})


export const auth = app.auth();
export default app;