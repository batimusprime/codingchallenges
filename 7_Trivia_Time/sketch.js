//get HTML DOM elements
let message = document.getElementById('message');
let scoreDisp = document.getElementById('score');
let questText = document.getElementById('questText');
let index = 0;

function setup(){


    //centers the canvas using p5 variables
    let cnv = createCanvas(600, 100);
    let x = (windowWidth - width) / 2;
    cnv.position(x, windowHeight-(height+100));
  

//create new user object, arg will come from create element
user  = new User('Default');

//create new game object, used for game status events
quest = new Question(1,'Question text goes here',['answer1','answer2','answer3','answer4'],'d')
game = new Game();

};
//end setup


/////////////////////////////////
function draw(){

//background color
background (220);

//show the game piece
user.show();

};


//Question object properties
class Question{

    constructor(index,text,answers,corr){

        //question index, will be added to 'used list' after displayed so it cannot be re-used
        this.index = index;
        //text of question from database
        this.text = text;
        //array of answers from database
        this.answers = answers;
        //correct answer [a-d]
        this.corr = corr;

    }
    //answer function
    answer(ansId){
        if(game.status == true){
            message.innerHTML = 'Game is go! </br>' + user.userName;

        }else{
        //wrong answer
        
        message.innerHTML = 'Game is not go! </br>' + user.userName;
    }


}

    show(){
        this.status = true;
        //display the question text with an index # bullet
        questText.innerHTML = ('Question #' + this.index + ': ' + this.text);
        
        //for loop to get and display all 4 answer containers
        for (let i=0;i<4;i++){
            let ansContainer = document.getElementById('ans' + i);
            ansContainer.innerHTML = this.answers[i];
        }

    }
    next(){
/*
new question object, keeps questions under 10 otherwise question number keeps scrolling
eventually this will be a random index pulled from DB and the test will be uneeded

*/
        if(quest.index < 10){
        quest = new Question(this.index + 1,'Question text goes here',['answer1','answer2','answer3','answer4'],'d');
        
        //display question and answer text
        this.show();
    }else{}


}


};
  //User object properties
  class User{

    constructor(userName){
        //7 provides a margin around the border, initial position
        this.x = 7;
        this.y = 7;
        this.game = true;

        //set score to 0;
        this.score = 0;

        //user name
        this.userName = userName;
    }

    //display the user's game piece
    show(){
        
        //display the user's piece
        rect(this.x, this.y, 50,80);

  
     
 

    }
    
    //move the piece after a score, this is a correct answer
    move(){
    
    //display status message
    message.innerHTML = 'Correct </br> ' + this.userName;


    //keep score under 10
    if(this.score < 10){
    //increment score
    this.score++;
        //move the piece on the x axis
        this.x += 53;
        scoreDisp.innerHTML = this.score;

        //check if avatar is off canvas
    }else if (this.score == 10 && this.x < 350){

            message.innerHTML = user.userName + ' </br> WINS!!';
            this.x += 53;
        }else{


        }
        //next question
        quest.next();
        
    }
    
    //set the piece back to 0
    reset(){

        //reset status message
        message.innerHTML = 'Message: UserName';
        //original coordinate
        this.x = 7;
        //zero score
        this.score = 0;
        //display zero score
        scoreDisp.innerHTML = 0;
        //reset answers
        for (let j=0;j<4;j++){

            let ansClear = document.getElementById('ans' + j);
            ansClear.innerHTML = ''

        }
        questText.innerHTML = ''

        //turn game status to off
        quest.status = false;
    }

    wrong(){
        
        message.innerHTML = 'Wrong </br>' + user.userName;
    }
 
  }//end of user

class Game{

    constructor(){

        this.status = true;

    }
    go(){

     //create new question object
    let quest = new Question(1,'Question text goes here',['answer1','answer2','answer3','answer4'],'d');
    //display user name and initial message
    message.innerHTML = 'Let\'s Go! </br>' + user.userName;    
    //display score
    scoreDisp.innerHTML = user.score;
    //display question text
    quest.show();

    }
}