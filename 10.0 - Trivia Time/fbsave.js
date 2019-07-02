var user = 0000;
var displayName;
var userScore;
var imageId;

//Firebase configuration
var firebaseConfig = {

    apiKey: "AIzaSyDMvU9zG7wDNToCe_S9C0AlRz3Ueln-_88",
    authDomain: "trivia-time-d6aa3.firebaseapp.com",
    databaseURL: "https://trivia-time-d6aa3.firebaseio.com",
    projectId: "trivia-time-d6aa3",
    storageBucket: "trivia-time-d6aa3.appspot.com",
    messagingSenderId: "556461021563",
    appId: "1:556461021563:web:62bb8d475f922f05"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get reference to FB object
var database = firebase.database();

function fbPush(user, displayName, userScore, imageId){

firebase.database().ref('users/' + user).set({
userId: user,
username: displayName,
score: userScore,
pictureId : imageId
});
};

function fbPull(){

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   
   val = snapshot.val().users[user];
   
   console.log("User Id: " + val.userId);
   console.log("User Display Name: " + val.username);
   console.log("Score: " + val.score);
   console.log("Profile Picture: " + val.pictureId);
   
   
      
}, function (error) {
   console.log("Error: " + error.code);
});

}
//
//fbPush(user,"Stephen",0,"andy");
//fbPull();