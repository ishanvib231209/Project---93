// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCIFJNQx-9B88lIezJ-4ZKVva_YwnDpjUQ",
      authDomain: "kwitter-580bb.firebaseapp.com",
      databaseURL: "https://kwitter-580bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-580bb",
      storageBucket: "kwitter-580bb.appspot.com",
      messagingSenderId: "416811202084",
      appId: "1:416811202084:web:7bf088d2610ac932408ab1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
