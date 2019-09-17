//this allows skip prefixing for Matter.js objects
const {Engine,World,Bodies,Mouse, MouseConstraint,Constraint} = Matter;

//declare global variables
let ground;
let bird;
let box;
//matter.js physics objects
let world,engine;
//mouse constraint object
let mCon;

//array of boxes to be knocked down
let boxes = []

function setup() {
  //store canvas as var, in order to provide as arg to mouse object for mouse constraint
  const canvas = createCanvas(900, 400);

  //create Matter.JS objects
  engine = Engine.create();
  world = engine.world;

  //create custom game objects
  ground = new Ground(width/2,height - 10, width, 20);
  bird = new Bird(250,300,15);
  sling = new Sling(250,300,bird.body);

  //add boxes to array
  for (let i=0;i<3;i++){

    boxes[i] = new Box(450,300-i*75,50,75);

  }

  //create mouse object, with canvas 
  const mouse = Mouse.create(canvas.elt);

  //options object for mouseconstraint
  const options = {

    mouse:mouse
    
  }

  //mouseconstraint aka on click pick up object
  mCon = MouseConstraint.create(engine, options);
  World.add(world,mCon);

}

//main draw func
function draw() {

  //bg color
  background(51);

  //run the MatterJS engine
  Engine.update(engine);
  
  //show the P5 objects
  ground.show();
  bird.show();
  sling.show();

  //show all boxes in array
  for (let box of boxes){

    box.show();

  }

}

//class for box objects
class Box{

  constructor(x,y,w,h){
    //dimensions
    this.w = w;
    this.h = h;

    //create MatterJS body
    this.body = Bodies.rectangle(x,y,w,h);
    
    //add body to the world
    World.add(world,this.body);

  }
  show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
  }

}


class Bird{

  constructor(x,y,r){
    this.body = Bodies.circle(x,y,r)
    World.add(world, this.body);
    this.r = r;

  }

  show(){
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(255);
    imageMode(CENTER);
    circle(0,0,this.r);
    pop();
  }

}

//separate class for the ground so that it could be made static
//change this to option in box class?
class Ground extends Box{

  constructor(x,y,w,h){

    super(x,y,w,h);
    this.body.isStatic = true;

  }

}

class Sling{

  constructor(x,y,body){
    //options for new MJS constraint
    const options = {

      pointA: {
        x: x,
        y: y

      },
      bodyB: body,
      stiffness: 0.2,
      length: 40


    }
    //create the MatterJS Constraint
    this.sling = Constraint.create(options);
    World.add(world,this.sling);

  }

  show(){
    
    stroke(255)
    const posA = this.sling.pointA;
    const posB = this.sling.bodyB.position;
    line(posA.x, posA.y, posB.x, posB.y);

  }

}