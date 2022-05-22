var firebaseConfig = {
    apiKey: "AIzaSyDW76iPJ35PXO5TYD3PpAPMmtu-FFXs93w",
    authDomain: "tweetbox-0009.firebaseapp.com",
    databaseURL: "https://tweetbox-0009-default-rtdb.firebaseio.com",
    projectId: "tweetbox-0009",
    storageBucket: "tweetbox-0009.appspot.com",
    messagingSenderId: "346602057683",
    appId: "1:346602057683:web:f987bc40cbb5f64ca98926"
  };
  
  // Initialize Firebase
  user_name = initializeApp(firebaseConfig);



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   

   //End code
   });});}
getData();
