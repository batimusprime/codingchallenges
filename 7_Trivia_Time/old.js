//get HTML DOM elements
let message = document.getElementById('message');
let scoreDisp = document.getElementById('score');
let questText = document.getElementById('questText');

//global game status
let status = 'off';

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

//p5 setup function, runs once
function setup(){

    //centers the canvas using p5 variables
    let cnv = createCanvas(600, 100);
    let x = (windowWidth - width) / 2;
    cnv.position(x, windowHeight-(height+100));

    //background color
    background (220);
    
    //create new user object, arg = user name
    user  = new User('Default');

    //create new game object, used for game startup events
    quest = new Question(1,'Question text goes here',['answer1','answer2','answer3','answer4'],'d')

};

//p5 draw function, runs continuous
function draw(){

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
    //quest.show displays the question
    show(){

        //display the question text with an index # bullet
        questText.innerHTML = ('Question #' + this.index + ': ' + this.text);
        
        //for loop to get and display all 4 answer containers
        for (let i=0;i<4;i++){
            let ansContainer = document.getElementById('ans' + i);
            ansContainer.innerHTML = this.answers[i];
        }

    }

    //quest.next display next question
    next(){
        /*
        new question object, keeps questions under 10 otherwise question number keeps scrolling
        eventually this will be a random index pulled from DB and the test will be uneeded
        */
        if(this.index < 11){

            //iterate index
            this.index++;

            //display question and answers
            this.show();

        }else{}

    }

}; //end question

//User object properties
class User{

    constructor(userName){
    
        //7 provides a margin around the border, initial position
        this.x = 7;
        this.y = 7;
    
        //set score to 0;
        this.score = 0;
        
        //user name
        this.userName = userName;
    
    }

    //user.show display the user's game piece
    show(){
    
        //display the user's piece
        rect(this.x, this.y, 50,80);
    
    }

    //user.corr this is for a correct answer
    corr(){

        //display status message
        message.innerHTML = 'Correct </br> ' + this.userName;
        //keep score under 10
        if(this.score < 9){

            //increment score
            this.score++;
            
            //move the piece on the x axis
            this.x += 53;
            this.show();
            scoreDisp.innerHTML = this.score;
            
            //next question
            quest.next();

        //check for winner
        }else if (this.score == 10){
            
            //call win function
            game.win();
        
        }else{

            console.log('game is not go: user.corr func')
        
        }

    }
    //set the piece back to 0
    wrong(){
    
        message.innerHTML = 'Wrong </br>' + user.userName;
    
    }
} //end user

//game object properties
class Game{

    constructor(){
    
    }
    //game.go starts the game, can only be done once
    go(){

        //create new question object
        let quest = new Question(1,'Question text goes here',['answer1','answer2','answer3','answer4'],'d');
        
        //display user name and initial message
        message.innerHTML = 'Let\'s Go! </br>' + user.userName;    
        
        //display score
        scoreDisp.innerHTML = user.score;
        
        //display question text
        quest.show();

        //set game status to on
        status = 'on';

    }

    //game.reset starts the game over, zeroizes all variables
    reset(){

        //reset status message
        message.innerHTML = 'Message: UserName';
        
        //reset to original coordinates
        user.x = 7;

        //reset score to zero
        user.score = 0;
        
        //display zeroized score
        scoreDisp.innerHTML = 0;
        
        //reset answers
        for (let j=0;j<4;j++){
            
            let ansClear = document.getElementById('ans' + j);
            ansClear.innerHTML = ''
        
        }

        //delete question text
        questText.innerHTML = ''
        
        //turn game status to off
        status = 'off';
        
        //reset question index
        quest.index = 1;

    }
    //answer function
    answer(ansId){

        //check game status
        if (status == 'on'){

            //check score
            if (user.score < 9){
            
                //check answer correctness
                if(quest.corr == ansId){
                    user.corr();

                }else{
                
                    user.wrong();
                
                }

            }else{

                game.win();
            
            }

        }else{
        
            console.log('game is not go: game.answer func');
        
        }

    }

    //game.win is called when user wins
    win(){
    //move piece to final mark
    user.x = 540;
    //set score to 10
    user.score = 10;
    //display score
    scoreDisp.innerHTML = user.score;
    //display status message
    message.innerHTML = user.userName + ' </br> WINS!!';
    }
    };
    function newGame(){
    //check game status
    if (status == 'off'){
    //if it does not exist, create new game
    game = new Game(true);
    game.go();
    }else{
    console.log('game is already go: newGame func');
    }

}; //end game