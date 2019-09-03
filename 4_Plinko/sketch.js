//module aliases from Matter.js wiki
let Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

//empty array for pucks
let pucks = [];
let pegs = [];
let cols = 7;
let rows = 10;

function setup(){
    //p5 create canvas func
    createCanvas(600,800);

    //built in Matter.js engine / world ref
    engine = Engine.create();
    world = engine.world

    //create a puck to start
    newPuck();

    let spacing = width / cols;

    //for loop of pegs
    for(i=0;i<rows;i++){

        for(j=0;j<cols;j++){
            
            //set x pos, shift to left 20 
            let x = (spacing /2) + j * spacing-20;
            
            //offset every other row
            if(i % 2 == 0){

                x += spacing/2;

            }

            let y = spacing + i * spacing

            //create a new peg
            let peg = new Peg(x,y,10)
            pegs.push(peg)

        }


    }
  




}

function newPuck(){


        //create a new puck at coords (300,0) with radius (20)
        p = new Puck(300,0,25);
        //add puck to array of pucks
        pucks.push(p)


}

function draw(){

    //appx every 1 second
    if (frameCount % 60 == 0){
        newPuck();
        
    }

    //P5 background color
    background(255);

    //update the engine
    Engine.update(engine);

    for (i=0;i<pucks.length;i++){

        //show the puck
        pucks[i].show();
    
    }
    for (j=0;j<pegs.length;j++){

        //show the puck
        pegs[j].show();
    
    }
}