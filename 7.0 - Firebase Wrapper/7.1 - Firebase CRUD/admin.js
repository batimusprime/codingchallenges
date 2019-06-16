/* 
TODO:
C - POST / Create: Done
R - GET / Read: Done
U - PUT / Update:
D - DELETE / Delete:
*/

//global variables
//get status object as variable
var display = document.getElementById("status");

//Firebase configuration
var firebaseConfig = {

    apiKey: "AIzaSyDMvU9zG7wDNToCe_S9C0AlRz3Ueln-_88",
//    authDomain: "trivia-time-d6aa3.firebaseapp.com",
    databaseURL: "https://trivia-time-d6aa3.firebaseio.com",
    projectId: "trivia-time-d6aa3",
    storageBucket: "trivia-time-d6aa3.appspot.com",
//    messagingSenderId: "556461021563",
    appId: "1:556461021563:web:62bb8d475f922f05"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Set database as variable
var db = firebase.firestore();

//get inputs from form
function getInput(section){

    var cText = document.getElementById("inputTextCollect").value
    var dText = document.getElementById("inputTextDoc").value
    var kText = document.getElementById("inputTextKey").value
    var vText = document.getElementById("inputTextVal").value
    
    // create    
    if(section == "c"){
    
        //c argument means create was clicked, call create func, r = read, etc.
        create(cText,dText,kText,vText);

    }
    //read
    else if (section == "r"){
    
        read(cText,dText,kText,vText);
        

    
    }
    else if (section == "u"){
    
        update(cText,dText,kText,vText);
    
    }
    else if (section == "d"){
    
        delete(cText,dText,kText,vText);
    
    }
    else{
    
        console.log("error")
    }
};


//create a record, HTML input fields as args
function create(collect, doc, key, val){

// Add a new document in collection with set
db.collection(collect).doc(doc).set({
    key: key,
    value: val,
})
.then(function() {

    //update status with parameters written
    statusUpdate("Written: ", collect,doc,key,val);

})
.catch(function(error) {
    console.error("Error writing document: " +  error);
});



};
//read from the db, HTML input fields as args
function read(collect, doc){

//identify collection and doc to query
var docRef = db.collection(collect).doc(doc);


//get documentsnapshot
docRef.get().then(function(documentSnapshot){

//assign data from doc snapshot to data var for ease of use
var data = documentSnapshot.data();
//write Key text to Key field
document.getElementById("inputTextKey").value = data.key
//write value text to value field
document.getElementById("inputTextVal").value = data.value

;
//update status with parameters written
statusUpdate("Read:  ",collect,doc,data.key,data.value);

});

}

function statusUpdate(stat, collect,doc, key, val){
    //get current HTML from element
    var current = document.getElementById("status").innerHTML
   
   //rewrite most current status on top, re-setting previous info on bottom for top down scroll
    display.innerHTML = "<li><i> " + stat + "</i></br> " + "Collection: " + collect + "</br> Document: " + doc + "</br> Key: " + key + "</br> Value: " + val + "</li>" + current;

};