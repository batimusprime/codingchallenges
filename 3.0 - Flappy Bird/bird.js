//constructor func
function Bird(){


    //center the bird
    this.y = height/2;
    this.x = 65;

    //establish the gravity (force)effect on the object
    this.gravity = .7;
    
    //velocity is the speed of the force acting on the object
    this.velocity = 0;
    
    //magic lift applied via player input
    this.lift = -12;
    
    
    //NN
    
    this.brain = new NueralNetwork();
    //birds physical properties 
    this.show = function(){
        fill(255);
        noStroke();
        ellipse(this.x,this.y,32,32);
    
    };
    
    //key press lifts the bird
    this.up = function(){
    
        this.velocity += this.lift;
    
    }
    
    //move the bird around
    this.update = function(){
    
        //apply gravity to bird (push down)
        this.velocity += this.gravity;
        this.y += this.velocity;
    
        //stop bird at bottom
        
        if (this.y > height){
            this.y = height;
            this.velocity = 0;
        
        }
        //keep bird from going off the top
        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
        
        }
    }
}