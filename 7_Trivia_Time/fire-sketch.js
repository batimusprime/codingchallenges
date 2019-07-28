//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA4ozSR4A-Ne_br-DV7LODjuSEwYfWUImY",
    authDomain: "fitorbullshit.firebaseapp.com",
    databaseURL: "https://fitorbullshit.firebaseio.com",
    projectId: "fitorbullshit",
    storageBucket: "fitorbullshit.appspot.com",
    messagingSenderId: "384742724151",
    appId: "1:384742724151:web:53a172de7875eede"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

var docRef = db.collection("question").doc("0");

docRef.get().then(function(doc) {
    if (doc.exists) {
        
        const data = doc.data();
        
        // console.log("Document data:", doc.data());
        // console.log("Question text:", data.text);
        // for (i=0;i<4;i++){
        // console.log("Answer " + i + ": " + data.answer[i]);
        // }
        // console.log("Correct answer:", data.correct);
        dbQText = data.text;
        dbA = data.answer;
        dbCorr = data.correct;
    
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
console.log(dbQText,dbA, dbCorr)