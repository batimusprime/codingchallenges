let answers = ['answer 1','answer 2','answer 3','answer 4']

let user = new CreateUser('1','Batman','andy');
let question = new CreateQuestion(1,'question text 1',answers,'d');




function display(user,question){
    //populate the question
    let qContain = document.getElementById('question');
    qContain.innerHTML += question.text;

    
    //userName
    let userName = document.getElementById('userName');
    userName.innerHTML = user.userName;
    //score
    let userScore = document.getElementById('score');
    userScore.innerHTML = ('Score: ', user.score);
}

display(user,question);

function submitAnswer(clickedId){

    //compare submitted answer to correct answer
    if (clickedId == question.corr){

user.score += 1;
user.display(user.score);
nextQuestion(user.score);
    }
    else{

        console.log("nope")

    }

};


function CreateQuestion(index,text,answers,corr){

    this.index = index;
    this.text = text;
    this.answers = answers;
    this.corr = corr;



};


function CreateUser(userId,userName,img){


    this.userId = userId;
    this.userName = userName;
    this.img = img;
    this.avatar =  '<img src=\'/img/'+ this.img + '.png\'>';

    //set user score to zero by default
    this.score = 0;

    this.display = function(){}

    this.position = {
        this.x = 0;
    }
    

   
};



function nextQuestion(){};
function reset(){
    if (user.score < 10){
        user.score += 1;
        user.display();

    
    }
    else{


            user.score = 0;
            user.display();
    }
};

user.display();


// move.innerHTML = ('<div class=\"spot\" id=\"' + i + '\">' + user.avatar + '</div>');
// move.innerHTML += ('<div class=\"spot\" id=\"' + i + '\">' + i + '</div>');