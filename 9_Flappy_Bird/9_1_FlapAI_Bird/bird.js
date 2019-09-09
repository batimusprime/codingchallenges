  //bird / main sprite class
  class Bird{

    constructor(nn){
        
    //location information
    //center of the page vertically
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

    //determine the best bird for evolution
    this.score = 0;
    this.fitness = 0;
    if(nn){
        //if we are making an alpha bird, copy the old bird
        this.nn = nn.copy();        
    
    }else{

        //otherwise create new NN
        this.nn = new NeuralNetwork(4,4,2);
    }
}

//displays bird on canvas
show(){

    fill(255,10);
    stroke(155);
    ellipse(this.x,this.y,16,16)
    
}
//move the bird / update its pos
update(){
    //everytime update is called the score goes up
    this.score++;
    
    //gravity "pulls" down on velocity
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

fly(){this.velocity += this.lift}

calc(pipes){
    
    let closest = null;
    let closestD = Infinity;
    for (let i=1;i<pipes.length;i++){
        
        let d = pipes[i].x - this.x;

        if (d < closestD && d > 0){

            closest = pipes[i]
            closestD = d;

        }
    }
    //define inputs
    let inputs = [];
    inputs[0] = this.y;
    inputs[1] = pipes[0].top
    inputs[2] = pipes[0].bottom / height
    inputs[3] = pipes[0].x / height
    
    //predict function from NN
    let output = this.nn.predict(inputs)
    
    //if probability that another obstacle is coming is over 50%, jump
    if (output[0] > output[1]){
        
        this.fly();
        
    }
}

    mutate(){

        this.nn.mutate(0.1);

    }
    

}//end bird class