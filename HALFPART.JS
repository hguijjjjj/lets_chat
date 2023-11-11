
var firebaseConfig = {
  apiKey: "AIzaSyBvAxOHHlu3qfcRTJBQP0VtG-waJKXLq4c",
  authDomain: "koushal-chat-website.firebaseapp.com",
  projectId: "koushal-chat-website",
  storageBucket: "koushal-chat-website.appspot.com",
  messagingSenderId: "712319094727",
  appId: "1:712319094727:web:ddb3f4d4899141286a13e2"
};

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -" + Room_names);
   row = "<div class = 'room_name' id=" + Room_names+"onclick= 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>" ;
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database(). ref("/"). child(room_name).update({
    purpose : "adding room name"     
    });
    localStorage.setItem("room_name", room_name);
    window.location ="HALFPART.HTML";
}