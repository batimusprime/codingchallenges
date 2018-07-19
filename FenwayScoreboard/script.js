$(document).ready(function(){

// Away total
// Home total
var a_total = 0;
var h_total = 0;


    //listeners for clicks on individual inning cells a= away h=home
    $('.a_inc').click(function(){

       increment($(this));

    });

    $('.h_inc').click(function(){

       increment($(this));

    });


    $("#a_pitch").click(function(){

        var value = document.getElementById('a_pitch_num').value;
        
        $(".a_pitch_num").text(value);

    });  
    
    $("#h_pitch").click(function(){

        var value = document.getElementById('h_pitch_num').value;
        
        $(".h_pitch_num").text(value);

    });
    
//    // Sets away team name when user clicks submit button
//    $("#a_team").click(function(){
//
//        var value = document.getElementById('teams').value;
//        $(".a_name").text(value);

 //   });
    
    // Increments an individual score cell
    function increment($team){
    
         if ($team.hasClass("a_inc")){

             var n_team = "away";

         }

         else if ($team.hasClass("h_inc")){

            var n_team = "home";

         }

         var ttext = $team.text();
         var tnum = parseInt(ttext)

         if (tnum < 9){

             tnum++;
             $team.text(tnum);
             r_total(n_team);

        }

        else if (tnum >= 9){
            
            // resets cell to 0 instead of double digits
            var tnum = 0;
            $team.text(tnum);
            r_total(n_team);

        }
    
    }
    
    
    $("#reset").click(function(){

        $(".inc").html(0);
    
    });

    
});//end document ready


function r_total(n_team){

var r_sub = [];    

//clears array
r_sub.length = 0;    
   
    

    
    if(n_team == "away"){
    
    //get total of all cells
    for (var i = 0; i<=9; i++){

        //create ID tag of div using for loop
        var idt = ("#a" + i);


        //get the String of that cell using the created ID tag
        //turn that string into an int
        s_int = parseInt($(idt).text());
        //push that int to the array
        r_sub.push(s_int);
    
    }

    //returns sum of array
    var htop = r_sub.reduce((a, b) => a + b)

    //write that sum to the away runs cell
    $(".a_total").text(htop);

   

    }
    
    else if(n_team == "home"){
    
    
    for (var i = 0; i<=9; i++){

        //create ID tag of div using for loop
        var h_id = ("#h" + i);


        //get the String of that cell using the created ID tag
        var h_text = $(h_id).text();

        //turn that string into an int
        var s_runs = parseInt(h_text);

        //push that int to the array
        r_sub.push(s_runs);
    
    }
    
    //returns sum of array
    var t_run = r_sub.reduce((a, b) => a + b)

    //write that sum to the home runs cell
    $(".h_total").text(t_run);
 

    }


};



//import firebase data
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBA3BKgwWGa3-0P1w_PVkdZDBtgzqq06VE",
    authDomain: "fenwayscore.firebaseapp.com",
    databaseURL: "https://fenwayscore.firebaseio.com",
    projectId: "fenwayscore",
    storageBucket: "fenwayscore.appspot.com",
    messagingSenderId: "39305187988"
  };
firebase.initializeApp(config);
//initialize database

var database = firebase.database();
//create ref
var ref = database.ref('last')

//.on with two callbacks
ref.on('value', gotData, errData);

function gotData(data){
  
    //upon data change write to the dom element
  $(".a_name").text(data.val());
}

function errData(err){
    console.log('Error' + err)
  
}






