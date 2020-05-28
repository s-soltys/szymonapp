import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDhp9uxfh0CV2bqB9rCT-VkZq-xAtTj2Os",
  authDomain: "szymonapp-5bd11.firebaseapp.com",
  databaseURL: "https://szymonapp-5bd11.firebaseio.com",
  projectId: "szymonapp-5bd11",
  storageBucket: "szymonapp-5bd11.appspot.com",
  messagingSenderId: "223769936557",
  appId: "1:223769936557:web:62e485395dd98d77733c24"
});

const db = firebase.firestore();

export { db };