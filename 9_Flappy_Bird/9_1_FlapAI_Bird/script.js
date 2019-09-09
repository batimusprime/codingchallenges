        const TOTAL = 250;
        //empty pipe array and global bird variable
        let pipes = [];
        let birds = [];
        let alpha = [];
        let counter = 0;

        function setup(){

            frameRate(120);
            createCanvas(600,500);

            for (i=0;i<TOTAL;i++){
                
                //create bird and pipe objects
                birds[i] = new Bird();

            }
            pipe = new Pipe();
        }

        function draw(){
            
            //set background color to black
            background(0);
            
            if (counter % 75 == 0){
            
                //every 100 frames add a new pipe to the array
                pipe = new Pipe();
                pipes.push(pipe);
            
            }
            counter++;
            //activate the population
            for(let bird of birds){

                //activate the bird's AI
                bird.calc(pipes);
                
                //move the sprite
                bird.update();
                
                //display the sprite
                bird.show();
                
            }
            //if all the birds die, spawn a new generation
            if(birds.length === 0){
                nextGen();
                counter = 0;
                pipes = [];

            }


            //display all of the pipes in the array, iterate backwards and slide removed pipes out the "front"
            for(i=pipes.length-1;i>=0;i--){

                //show the pipe, move the pipe
                pipes[i].show();
                pipes[i].update();
                
                for (let j=birds.length-1;j>=0;j--){

                    if (pipes[i].hits(birds[j])){

                        alpha.push(birds.splice(j,1)[0]);

                    }

                }
          
                //once the pipe leaves our view, remove it
                if(pipes[i].offscreen()){

                    pipes.splice(i,1);
                
                }
            }
        }//end draw