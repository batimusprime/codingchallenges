
        //empty pipe array and global bird variable
        let pipes = [];
        let bird;

        function setup(){
            createCanvas(400,600);
            //create bird and pipe objects
            bird = new Bird();
            pipe = new Pipe();
            pipes.push(pipe);
        }

        function draw(){

            //set background color to black
            background(0);
            
            //activate the bird's AI
            bird.calc(pipes);
            
            //move the sprite
            bird.update();

            //display the sprite
            bird.show();



            if (frameCount % 100 == 0){
            
                //every 100 frames add a new pipe to the array
                pipe = new Pipe();
                pipes.push(pipe);
            
            }

            //display all of the pipes in the array, iterate backwards and slide removed pipes out the "front"
            for(i=pipes.length-1;i>=0;i--){

                //show the pipe, move the pipe
                pipes[i].show();
                pipes[i].update();
                
                //collision detection
                if(pipes[i].hits(bird)){

                    //insert negative score or death here
                    console.log('boom!');

                }
                //once the pipe leaves our view, remove it
                if(pipes[i].offscreen()){

                    pipes.splice(i,1);
                
                }
            }
        }//end draw

        
        //bird / main sprite class
        class Bird{

            constructor(){
                
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

            //create new NN
            this.nn = new NeuralNetwork(4,4,1);
        }
        
        //displays bird on canvas
        show(){
            fill(255);
            ellipse(this.x,this.y,16,16)
        }
        //move the bird / update its pos
        update(){
            
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
            console.log(inputs);
            
            //predict function from NN
            let output = this.nn.predict(inputs)
            
            //if probability that another obstacle is coming is over 50%, jump
            if (output > 0.5){
                
                this.fly();
                console.log('fly');
                
            }
            
        }
        
    }//end bird class
    
    //pipe / obstruction class
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
            
            update(){this.x -= this.speed}
            
            //this evaluates to T/F depending on if the pipe is past the width of the screen
            offscreen(){return this.x < -this.w}

            //determines collision, this returns true while the bird is in the box
            hits(b){
                
                //check if sprite (b) is in between the zone from top of gap to top of screeen and bottom of gap to bot of screen (Y axis)
                if (b.y < this.top || b.y > height-this.bottom){
                    
                    //check if sprite (b) is ALSO in between the width of the pipe (X axis)
                    if(b.x > this.x && bird.x < this.x + this.w){
                        return true;
                    }
                }
            }
        }
            //user input detection
            // function keyPressed(){
        
            //     //up arrow will call the fly function
            //     if(keyCode == UP_ARROW){bird.fly()}
            
            // }