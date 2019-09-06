//population number
const TOTAL = 250;

//empty arrays
let pipes = [];
let birds = [];
let saved = [];


function setup(){

    createCanvas(800,600);
    
    //create bird and pipe objects
    for (let i=0;i<TOTAL;i++){

        birds[i] = new Bird();
    }


    pipes.push(new Pipe());
   

}
function draw(){
  
    //set background color to black
    background(0);
    
    //if we run out of birds
    if (birds.length === 0){

        nextGeneration();

    }
    if (frameCount % 100 == 0){
        
        //every 100 frames add a new pipe to the array
        pipes.push(new Pipe());
        
    }
    //display all of the pipes in the array, iterate backwards and slide removed pipes out the "front"
    for(i=pipes.length-1;i>=0;i--){
   
        pipes[i].show();
        pipes[i].update();

        for (let j=birds.length -1; j>=0;j--){

            //delete bird from array if it hits the pipe
            if(pipes[i].hits(birds[j])){

                //this essentially transfers the birds between arrays
                saved.push(birds.splice(j,1)[0]);
                
                }
            }
        
        if(pipes[i].offscreen()){
            
            pipes.splice(i,1);
            
        }
        
    }
    //loop through population 
    for (let bird of birds){

        //start the nn
        bird.calc(pipes);
        
        //display the sprite
        bird.show();
        
        //move the sprite
        bird.update();
    }

}

class Bird{

    constructor(nn){

        //positioning
        this.y = height/2;
        this.x = 50;
        
        //gravity pulls the bird down
        this.gravity = .2;

        //initial velocity set to 0
        this.velocity = 0;

        //uplift from user input
        this.lift = -5;

        //resistance adds the "springy" feel to the sprite
        this.resistance = .9;

        //new nn for the bird to make its own decisions (4 inputs, 4 hidden, 1 output)
        
        this.score = 0;
        this.fitness = 0;
        //if calling function with intelligence 
        if (nn instanceof NeuralNetwork){
            
            //copy the nn
            this.nn = nn.copy();
            //mutate the nn;
            this.nn.mutate(mutate);
            
        }else {
            
            this.nn = new NeuralNetwork(4,4,2);
        }
    }

    //display bird on canvas
    show(){

        fill(255);
        ellipse(this.x,this.y,16,16)

    }

    //used to move the bird
    update(){
      
        //gravity "pulls" down on velocity
        //resistance makes it "springy"
        this.velocity += this.gravity*this.resistance;
        
        //if bird doesn't "fly" to keep velocity up, this.y is reduced by 1
        this.y += this.velocity

        //limit to top
        if (this.y > height){

            this.y = height;
            this.velocity = 0;

    }

        //limit to bottom
        if (this.y < 0){

            this.y = 0;
            this.velocity = 0;

        }

        //update score every time update is called
        this.score++;

    }
    fly(){

        this.velocity += this.lift;

    }
    calc(pipes){

        
        // finds distance of closest pipe
        //start with closest distances 'blank'
        let closest = null;
        let closestDist = Infinity;


        //check all the pipes
        for (let i=1;i<pipes.length;i++){
            //check the distance
            let d = pipes[i].x - this.x;
            
            //check which is closer
            if (d<closestDist && d > 0){

                //assign this one as the closest
                closest = pipes[i];
                closestDist = d;

            }

        }
        
        //empty array for inputs
        let inputs = [];

        //first input is bird's position normalized
        inputs[0] = this.y/height;
        //pipe boundaries
        inputs[1] = pipes[0].top / height;
        inputs[2] = pipes[0].bottom / height;
        inputs[3] = pipes[0].x / width;

        //output comes back as array, even with 1
        let output = this.nn.predict(inputs);

        //if probability is higher thatn 50%, jump
        if (output[0] > .5){

            this.fly();

        }

    }

}

class Pipe{

    constructor(){

        this.col = color(random(0,255),random(0,255),random(0,255));

        //empty space between pipes
        let spacing = 175;

        //give empty space a center point and dimensions (random)
        let cent = random(spacing, height -spacing)

        //define top and bot of pipe
        this.top = cent - spacing / 2
        this.bottom = height - (cent + spacing /2)

        //start at edge of page
        this.x = width;

        //width of pipe
        this.w = 80;

        //movement speed
        this.speed = 4;

    }

    //display the pipe
    show(){
        
        //colors            
        fill(this.col);
        strokeWeight(1);
        stroke(255);
        
        //top
        rect(this.x, 0, this.w, this.top)
        
        //bottom
        rect(this.x, height-this.bottom, this.w, this.bottom)
       
    }

    //moves the pipe
    update(){

        this.x -= this.speed;

    }

    offscreen(){

        //this evaluates to t/f depending on if the pipe is past the width of the screen
        return this.x < -this.w

    }
    hits(b){

        //check if sprite (b) is in between the zone from top of gap to top of screeen and bottom of gap to bot of screen (Y axis)
        if (b.y < this.top || b.y > height-this.bottom){
            
            //check if sprite (b) is in between the width of the pipe (X axis)
            if(b.x > this.x && b.x < this.x + this.w){

                return true;

            }
        }

    }

}
function mutate(x) {
    if (random(1) < 0.1) {
      let offset = randomGaussian() * 0.5;
      let newx = x + offset;
      return newx;
    } else {
      return x;
    }
  }