/* 
TODO:
C - POST / Create: Done
R - GET / Read: Done
U - PUT / Update:
D - DELETE / Delete:
*/

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

//Set database as variable
var db = firebase.firestore();

//get inputs from form
function getInput(section){

    var cText = document.getElementById("inputTextCollect").value
    var dText = document.getElementById("inputTextDoc").value
    var eText = document.getElementById("inputTextKey").value
    var vText = document.getElementById("inputTextVal").value
    
    // create    
    if(section == "c"){
    
        //c argument means create was clicked, call create func, r = read, etc.
        create(cText,dText,eText,vText);

    }
    //read
    else if (section == "r"){
    
        read(cText,dText,eText,vText);
        

    
    }
    else if (section == "u"){
    
        update(cText,dText,eText,vText);
    
    }
    else if (section == "d"){
    
        delete(cText,dText,eText,vText);
    
    }
    else{
    
        console.log("error")
    }
};


//create a record, HTML input fields as args
function create(collect, doc, entry, val){

// Add a new document in collection with set
db.collection(collect).doc(doc).set({
    key: entry,
    value: val,
})
.then(function() {

    //display status on HTML doc
    document.getElementById("status").innerHTML += "<li>Written: </br> Collection: " + collect + "</br> Document: " + doc +"</br>  Key: " + entry + "</br> Value: " + val + "</li>";


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

//write status to status element
document.getElementById("status").innerHTML += "<li>Read: </br> Key: " + data.key + "</br> Value: " + data.value + "</li>";

});

}
