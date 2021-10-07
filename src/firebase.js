import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDw40abgKMTp3oZ67yt5WwgN33qMlrIugc",
    authDomain: "crud-4bf0e.firebaseapp.com",
    databaseURL: "https://crud-4bf0e-default-rtdb.firebaseio.com",
    projectId: "crud-4bf0e",
    storageBucket: "crud-4bf0e.appspot.com",
    messagingSenderId: "365950953713",
    appId: "1:365950953713:web:44ce89807559629ddfa150"
  };

  var fireBd = firebase.initializeApp(firebaseConfig);

  export default fireBd.database().ref()