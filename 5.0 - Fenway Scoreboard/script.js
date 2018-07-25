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
    
    
    //set the away pitcher number

    $("#a_pitch").click(function(){

        var a_value = document.getElementById('a_pitch_num').value;
        $(".a_pitch_disp").text(a_value);

    });    
    
    //set the home pitcher number
    $("#h_pitch").click(function(){

        var h_value = document.getElementById('h_pitch_num').value;
        
        $(".h_pitch_disp").text(h_value);

    });
    
        //set the batter number
    
    $("#at_bat").click(function(){

        var ab_value = document.getElementById('at_bat_num').value;

        //batter number cannot be greater than 99
        if (ab_value > 99){
            console.log("Invalid number")
        
        }
        //batter number of 0 = 00 = 0 
        else if (ab_value == 0 || ab_value == 00){
                $(".at_bat_disp").text("00");
            
        
        }
        
        //single digit add a leading zero (style)
        else if (ab_value <= 9){
        $(".at_bat_disp").text("0"+ab_value);
        }
        
        //leaves only double digit numbers, which are displayed directly
        else if (ab_value > 0 && ab_value < 99) {
                $(".at_bat_disp").text(ab_value);
        
        }
    });  
    
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
        $(".at_bat_disp").text("00");
    });
    
    //turn lights on and off
    $(".r_light").click(function(){
    
        ($(this)).toggleClass("r_on");
    
    })
    $(".g_light").click(function(){
    
        ($(this)).toggleClass("g_on");
    
    })
    


//minimize controls

$("#x_button").click(function(){

    $("#controls").toggleClass("hidden")

})

 
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

