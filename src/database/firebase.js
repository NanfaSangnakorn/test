import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD15ifNbyeWtxy-tnNIVyI4nYJs3_rhHUA',
  authDomain: 'projectone-ce602.firebaseapp.com',
  databaseURL: 'https://projectone-ce602.firebaseio.com',
  projectId: 'projectone-ce602',
  storageBucket: 'projectone-ce602.appspot.com',
  messagingSenderId: '474368809432',
  appId: '1:474368809432:web:e2b626d569682d4ce67aad',
  measurementId: 'G-KR6XNKD9Z9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
