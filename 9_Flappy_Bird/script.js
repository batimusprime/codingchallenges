let pipes = [];
let bird;
function setup(){

    createCanvas(400,600);
    
    //create bird and pipe objects
    bird = new Bird();
    pipe = new Pipe();
    pipes.push(pipe)
   

}
function draw(){

    //set background color to black
    background(0);

    //display the sprite
    bird.show();

    //move the sprite
    bird.update();

    if (frameCount % 100 == 0){

        //every 100 frames add a new pipe to the array
        pipe = new Pipe();
        pipes.push(pipe);

    }
    //display all of the pipes in the array, iterate backwards and slide removed pipes out the "front"
    for(i=pipes.length-1;i>=0;i--){

        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){

            console.log('boom!');
            //this ends the draw loop
            //noLoop();

        }

        if(pipes[i].offscreen()){

            pipes.splice(i,1);

        }

    }

}

function keyPressed(){

    if(keyCode == UP_ARROW){

        bird.fly();

    }

}


class Bird{


    constructor(){

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
    }

    show(){

        fill(255);
        ellipse(this.x,this.y,16,16)

    }
    update(){
      
        //gravity "pulls" down on velocity
        //
        this.velocity += this.gravity*this.resistance;
        
        //if bird doesn't "fly" to keep velocity up, this.y is reduced by 1
        this.y += this.velocity


        if (this.y > height){

            this.y = height;
            this.velocity = 0;

        }
        if (this.y < 0){

            this.y = 0;
            this.velocity = 0;

        }

    }
    fly(){

        this.velocity += this.lift;

    }


}

class Pipe{


    constructor(){

        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.w = 20;
        this.speed = 2;

        this.gap = 100;

    }

    show(){

        fill(155)
        //top
        rect(this.x, 0, this.w, this.top)
        
        //bottom
        fill(55)
        rect(this.x, height-this.bottom, this.w, this.bottom)

    }

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
            if(b.x > this.x && bird.x < this.x + this.w){

                return true;

            }
        }


    }

}