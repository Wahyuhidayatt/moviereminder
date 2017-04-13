var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDgYJodbtY9KR4dRIouspsxU1yxXNPt_-0",
  authDomain: "simple-storage-211d0.firebaseapp.com",
  databaseURL: "https://simple-storage-211d0.firebaseio.com",
  projectId: "simple-storage-211d0",
  storageBucket: "simple-storage-211d0.appspot.com",
  messagingSenderId: "857363825383"
};
firebase.initializeApp(config);

var database = firebase.database();

var starCountRef = firebase.database().ref('');
starCountRef.on('value', function(snapshot) {
  console.log("get realtime data : ",snapshot.val());
});
