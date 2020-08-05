import * as firebase from 'firebase'
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArowPSb2rvzdsh66TBzyKcjxDNvJ9VRik",
  authDomain: "react-basic-1d16b.firebaseapp.com",
  databaseURL: "https://react-basic-1d16b.firebaseio.com",
  projectId: "react-basic-1d16b",
  storageBucket: "react-basic-1d16b.appspot.com",
  messagingSenderId: "278525219618",
  appId: "1:278525219618:web:7543f1fd5dd68cec8d0b7b",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default { storage, firebase };
