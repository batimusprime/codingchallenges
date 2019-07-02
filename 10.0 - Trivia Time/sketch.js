/*

Need to check for end of array and display new question text 

i.e. if next step in array is empty display "no more fun"


BIG PROBLEM ARRAY STARTS AT -1 WHY WHY WHY

*/



//var chars = [andy,angela,creed,darryl,dwight,jim,kelly,kevin,meredith,michael,oscar,pam,ryan,stanley]
//initialize character options
var andy;
var angela;
var creed;

//initialize score
var score = 1;

//generic vars - refactor later
var a,b,c,d,q;

//question iterator
var i = 0;

//question display number
var j = 1;

//question and answer ident
var corAns = 1;

//loads images
function preload(){
    
    andy = loadImage('img/andy.png') ;
    angela = loadImage('img/angela.png');
    creed = loadImage('img/creed.png');
//    darryl = loadImage('')
//    dwight = loadImage('')
//    jim = loadImage('')
//    kelly = loadImage('')
//    kevin = loadImage('')
//    meredith = loadImage('')
//    michael = loadImage('')
//    oscar = loadImage('')
//    pam = loadImage('')
//    ryan = loadImage('')        
//    stanley = loadImage('')
//    
}


function setup(){
    //create canvas
    var canvas = createCanvas(400,400);
    
    //in the main div
    canvas.parent('main');
    
    //create new player, set icon and name
    player = new Player(creed,"Stephen",0);
    
    //display new question
    question = new Question();
    
    
}

function draw(){
    
    //fill canvas
    background(51);
    
    //display player icon and name
    player.show();
    
    //display question
    question.show(i);
    
    //display score
    player.update(0);

}

//player constructor
function Player(icon, name, score){

    //player's name
    this.name = name;
    
    //duisplay icon and name
    this.show = function(){
           
        //image and text options
        image(icon,25,50);
        
        textSize(32);
        text(name, 10, 30);
        fill(255, 255, 255); 
        

    };
    

    
    this.update = function(score){

        //score
        textSize(32);
        text(score, 300, 30);
        fill(255, 255, 255); 
    
    };

}

//question constructor
function Question(){

    //display question
    this.show = function(i){
    
    //get question from array (a) in push.js 
    //j is question number, i is index position in array. (j = i+1) should be true
    q = ("Question " + j + ": " + a[i].q);
    
    //text options
    textSize(18);
    text(q,10,200,400,300);
   

    }
    
    //next question function
    this.next = function(ans){

        index = a.indexOf(ans);
        console.log(index);
        

//        if(i<a.length-1 && ans == a[i].a){
//            j++;
//            i++;
//            player.update(score++);
//        }else{
//            console.log("end of array");
//        
//        }
    };
    
    //process answer
    this.answer = function(ans){
        
        console.log("Question: " + (j) + "/" + a.length + " Answer Submitted: " + ans + " Correct Answer: " + a[i].a + " Array Index: " + i + " Score: " + (score));
        
                        
        question.next(ans);
                    
            
        
    
    }
}
  