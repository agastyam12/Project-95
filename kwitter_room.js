var firebaseConfig = {
  apiKey: "AIzaSyDv9ZYH5z8nQHocbIRorxe5DectW2mJ8Ow",
  authDomain: "databases-1e33e.firebaseapp.com",
  databaseURL: "https://databases-1e33e-default-rtdb.firebaseio.com",
  projectId: "databases-1e33e",
  storageBucket: "databases-1e33e.appspot.com",
  messagingSenderId: "7661101917",
  appId: "1:7661101917:web:0d5d6e733e671426d5beb4",
  measurementId: "G-7SCB7353CL"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name_display").innerHTML = " Welcome : " + user_name;



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
         console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
         document.getElementById("output").innerHTML += row;  
      });});}
getData();

function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("room_name" , room_name);

     window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location="kwitter_page.html";
}