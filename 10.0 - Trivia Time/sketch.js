/*

issues finding end of array, currently question disappears and error is thrown when end is reached and correct answer is entered again 

*/



//var chars = [andy,angela,creed,darryl,dwight,jim,kelly,kevin,meredith,michael,oscar,pam,ryan,stanley]
//initialize character options
var andy;
var angela;
var creed;

//generic vars - refactor later
var a,b,c,d,q;

//create question/answer dictionary
quest = {}

//question iterator
var i = 0;

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
    player = new Player(creed,"Stephen");
    
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

}

//player constructor
function Player(icon, name){

    //player's name
    this.name = name;
    
    //duisplay icon and name
    this.show = function(){
        
        //image and text options
        image(icon,25,50);
        
        textSize(32);
        text(name, 10, 30);
        fill(255, 255, 255);
    }
    
}

//question constructor
function Question(){

    //display question
    this.show = function(){
    
    //get question from array in push.js 
    //increase question number display by one so no 0 is displayed
    q = ("Question " + (i+1) + ": " + a[i].q);
    
    //text options
    textSize(18);
    text(q,10,200,400,300);
   

    }
    
    //next question function
    this.next = function(){
    
        i++
    
    };
    
    //process answer
    this.answer = function(ans){
    
        console.log(ans)
        
        //test answer given by HTML button with answer in push.js
        //idk why it doesnt work is comparing 0 to 1 on the first one
        if(i<a.length-1){
        
            if(a[i].a == ans){
        
                console.log("correct")
        
                //increment the count, can probably remove the next() function and just increment here
                question.next();
        
        }
        
        else{
        
            console.log(a.length + " " + i);
        }        
        }
        //TODO: turn this into test question function
        else {
        
            "bigest oof"
        }
    }

}
