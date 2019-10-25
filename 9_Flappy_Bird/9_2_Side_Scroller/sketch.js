let sprite, dista, distb; 

let hit = 0;
function setup(){

    createCanvas(600,450);
    //create new sprite and initial obstacle
    sprite = new Sprite();
    obst = new Obst();
    fly = new Fly();
    
}
//capture key press
function keyPressed(){
    if (key == ' '){
        //jump
        sprite.jump();

    }

}
function draw(){
    background(51);
    //show the sprite
    sprite.show();
    //move the sprite
    sprite.move();
    //display the calculations
    sprite.calcs();
    //show the obstacle
    obst.show();
    //show the flyer
    fly.show();
    //calculate distance and velocities
    sprite.search(obst, fly);
    //check if the obstacle is onscreen
    if(!obst.onScreen){
        //set obstacle to empty array (delete);
        obst = [];
        //create new obstacle
        obst = new Obst()
    }
    //check if the flyer is onscreen
    if(!fly.onScreen){
        fly = [];
        fly = new Fly();

    }

    //check collisions, check hit so that objs can only hit once
    if (collideRectRect(sprite.x,sprite.y,sprite.r,sprite.r, obst.x,obst.y,obst.r,obst.r) || collideRectRect(sprite.x,sprite.y,sprite.r,sprite.r,fly.x,fly.y,fly.r,fly.r/3)){
        if(!obst.hit){

        //increase hit counter;
        hit = hit+1;
        //set property on obstacle, prevent multiple hit messages
        obst.hit = true;
         }
    }
} //end draw loop

/*-----CLASSES--------*/

class Sprite{
    constructor(){
        //sprite props
        this.r = 50;
        this.x = 150;
        this.y = height-this.r;
        //physics
        this.v = 0;
        this.g = .4;
        //jumping check
        this.up = false;
    }
    jump(){
        //prevent double jump
        if(!this.up){this.v = -10};
        
    }
    move(){
        //cap velocity at 50, has no effect because on jump vel resets, but makes stats harder to read
        if(this.v > 49.5){this.v = 49.5};
        //increase the y position by velocity
        this.y += this.v;
        //effects of gravity on velocity
        this.v += this.g;
        //keep object's y coords on screen
        this.y = constrain(this.y,0,height-this.r);
        //check if sprite is on the ground
        if (this.y < 399){this.up = true}else{this.up = false}
    }
    //display the sprite
    show(){
        noStroke();
        fill('white')
        rectMode(CENTER)
        rect(this.x,this.y,this.r,this.r);
        
    }
    calcs(){
        //jump indicator
        strokeWeight(1);
        if(this.up){stroke(255);fill('blue')}else{stroke(255);noFill()};
        rect(this.x-this.r,this.y,this.r/3,this.r/3);
        dista = dist(this.x,this.y, 0,450);
        var purp = color(dista,0,dista);
        stroke(purp);
        fill(purp);
        //bottom center point
        circle(this.x,this.y+this.r/2,this.r/10)
        strokeWeight(2);
        line(this.x,this.y+this.r/2,this.x,450);
        line(this.x,this.y-this.r/2,this.x,0);
        //top center point
        circle(this.x,this.y-this.r/2,this.r/10);
        fill('white')
        noStroke();
        text("Object Coordinates: [" + this.x.toFixed(0) + '.'+ this.y.toFixed(0) + ']',10,60);
        text("Object v: " + this.v.toFixed(2),10,80);
        text("Hits: " + hit,10,100);
        
    }
    search(ob, fl){
        textSize(10)
        fill('white');
        noStroke();
        distb = dist(this.x+this.r/2,this.y+this.r/2,ob.x-ob.r/2,ob.y-ob.r/2);
        text("Δs Obstacle: " + distb.toFixed(2),10,40)
        text("Δs Ground: " + dista.toFixed(2),10,20)
        
        
        //bottom right point
        
        strokeWeight(4); // Thicker   
        fill('green')     
        circle(this.x+this.r/2,this.y+this.r/2,this.r/10)
        fill('red');
        //top right point
        circle(this.x+this.r/2,this.y-this.r/2,this.r/10);
               
        //track flyers
        
        // fill(color(0,distb/3,0));
        stroke(color(distb*.9,0,0));
        circle(fly.x-fly.r/2,fly.y,fly.r/10);
        // stroke(color(0,distb/2,0));
        line(this.x+this.r/2,this.y-this.r/2,fly.x-fly.r/2,fly.y);
        
        
        //track obst
        //line to obst
        stroke(color(0,distb*.9,0));
        circle(ob.x-ob.r/2,ob.y,ob.r/10);
        line(this.x+this.r/2,this.y+this.r/2,ob.x-ob.r/2,ob.y);

        


    }

}

class Obst{
    constructor(){
        this.r = 50;
        //uncomment for random obstacles
        // this.r = random(30,60);
        this.x = width - this.r;
        //initially align bottom with bottom of sprite
        this.y = height-this.r;
        this.onScreen = true;
        this.hit = false;

    }

    show(){
        strokeWeight(2)
        stroke('red');
        noFill();
        rectMode(CENTER)
        rect(this.x,this.y,this.r,this.r)
        this.x -= 5;
        if (this.x + this.r < 0){
            this.onScreen = false;

        }
     
            
        }

    
}

class Fly{

    constructor(){
        this.r = 65;
        this.x = width-this.r/2;
        this.y = height - 100;
        this.onScreen = true;

    }

    show(){
        rectMode(CENTER)
        rect(this.x,this.y,this.r,this.r/3);
        this.x -= 3;
        if(this.x < 0){
            this.onScreen = false;

        }

    }

}