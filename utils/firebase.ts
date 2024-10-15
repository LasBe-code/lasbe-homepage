// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT}.firebaseapp.com`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT}.appspot.com`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

const app = firebase.initializeApp(firebaseConfig);

export const db = getFirestore(app); // const analytics = getAnalytics(app);
