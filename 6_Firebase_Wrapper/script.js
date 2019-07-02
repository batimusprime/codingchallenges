var firebase = require("firebase");
var config;




function set_config(apiKey, authDomain, databaseURL, projectId,storageBucket,messagingSenderId){



    // Initialize Firebase
    var config = {
    
        apiKey: apiKey,
        authDomain: authDomain,
        databaseURL: databaseURL,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId 
    
    };


    return config;


}


firebase.initializeApp(config);
