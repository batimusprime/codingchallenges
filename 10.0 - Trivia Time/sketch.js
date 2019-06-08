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
var qnum = 0;
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
    question.show(qnum);

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
    
    //get question from array, increase by one so no question 0 is displayed
    q = ("Question " + (qnum+1) + ": " + quest[i]);
    
    //text options
    textSize(18);
    text(q,10,200,400,300);
   

    }
    
    //next question function
    this.next = function(){
    
        qnum++;
        i++
    
    };
    
    //process answer
    this.answer = function(ans){
    
    var ans = ans;
    
    //compare to correct answer
    if (ans == corAns){
    
    console.log("correct!");
    
    //display next question
    question.next();
    
    }
    else{
    
        console.log("incorrect");
    }

}
}