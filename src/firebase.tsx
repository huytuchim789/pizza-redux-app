// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAtktU-oJhFQ1Ihvcx7P8Qo9oqtbPo57pE',
  authDomain: 'pizza-ef239.firebaseapp.com',
  projectId: 'pizza-ef239',
  storageBucket: 'pizza-ef239.appspot.com',
  messagingSenderId: '793134836730',
  appId: '1:793134836730:web:726d47ecbe4c4747b71243',
  measurementId: 'G-G8HCNVRNX4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
