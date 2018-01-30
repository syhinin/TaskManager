import {initializeApp} from 'firebase';
const app = initializeApp({
  apiKey: "AIzaSyBApROijGIXIF4x35QIPDH7Db_-Q-Oq08s",
  authDomain: "today-app-syhinin.firebaseapp.com",
  databaseURL: "https://today-app-syhinin.firebaseio.com",
  projectId: "today-app-syhinin",
  storageBucket: "today-app-syhinin.appspot.com",
  messagingSenderId: "644355862948"
});

export const db = app.database();




