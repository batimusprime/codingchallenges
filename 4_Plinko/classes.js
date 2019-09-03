class Puck {

    constructor(x,y,r){

        let options = {

            restitution: .5,
            friction: 0

        }
       

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        
        //add this body to the world
        World.add(world, this.body);
    }

    show(){

        //fill in puck
        fill(55);
        stroke(255);
        
        //position of P5 rendering is the same as Matter.JS body
        let pos = this.body.position;

        //P5 built in start routine 
        push();
        
        //move puck to Matter.JS position
        translate(pos.x, pos.y);
        
        //draw puck
        ellipse(0,0,this.r);
        
        //P5 built in end routine 
        pop();
    }

}


class Peg{

    constructor(x,y,r){

        let options = {

            isStatic: true,
            restitution: .5,
            friction: 0

        }
     

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        
        //add this body to the world
        World.add(world, this.body);
    }

    show(){

        //fill in peg
        fill(10,0,155);
        stroke(10);
        
        //position of P5 rendering is the same as Matter.JS body
        let pos = this.body.position;

        //P5 built in start routine 
        push();
        
        //move puck to Matter.JS position
        translate(pos.x, pos.y);
        
        //draw puck
        ellipse(0,0,this.r);
        
        //P5 built in end routine 
        pop();
    }

}