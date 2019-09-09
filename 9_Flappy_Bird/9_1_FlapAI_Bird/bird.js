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
        this.nn = new NeuralNetwork(5,8,2);
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
}

fly(){this.velocity += this.lift}

calc(pipes) {
    // First find the closest pipe
    let closest = null;
    let record = Infinity;
    for (let i = 0; i < pipes.length; i++) {
      let diff = (pipes[i].x + pipes[i].w- this.x);
      if (diff > 0 && diff < record) {
        record = diff;
        closest = pipes[i];
      }
    }

    if (closest != null) {
      // Now create the inputs to the neural network
      let inputs = [];
      // x position of closest pipe
      inputs[0] = map(closest.x, this.x, width, 0, 1);
      // top of closest pipe opening
      inputs[1] = map(closest.top, 0, height, 0, 1);
      // bottom of closest pipe opening
      inputs[2] = map(closest.bottom, 0, height, 0, 1);
      // bird's y position
      inputs[3] = map(this.y, 0, height, 0, 1);
      // bird's y velocity
      inputs[4] = map(this.velocity, -5, 5, 0, 1);

      // Get the outputs from the network
      let action = this.nn.predict(inputs);
      // Decide to jump or not!
      if (action[1] > action[0]) {
        this.fly();
         }
        }
    }

         
    mutate(){
        

        this.nn.mutate(0.1);

    }
    //returns true if bird is offscreen
    offScreen(){

        return this.y > height || this.y < 0;

    }
    

}//end bird class