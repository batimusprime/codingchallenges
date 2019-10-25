//https://www.youtube.com/watch?v=OMoVcohRgZA
let snake, item;
let items = []
let res = 10;
let wide;
let high;
function setup(){
    
    
    createCanvas(400,400)
    frameRate(5);
    wide = Math.floor(width/res);
    high = Math.floor(height/res);
    snake = new Snake(wide, high);
    item = new Item(wide,high);
}


function keyPressed(){

    if (keyCode === UP_ARROW){
        snake.setDir(0,-1);
        
        
    }else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1);
        
    }else if(keyCode === RIGHT_ARROW){
        snake.setDir(1,0);
        
    }else if(keyCode === LEFT_ARROW){
        snake.setDir(-1,0)

    }
}
function draw(){
    scale(res);
    background(51);
    snake.show();
    snake.update();
    item.show();

    if(snake.eat(item)){
        item = new Item(wide,high);
        item.show();
        snake.grow();
        
    }
}

class Snake{

    constructor(){
        //length of the snake
        this.len = 1;
        
        this.body = [];
        this.body[0] = createVector(0,0);

        //properties of snake
        this.xdir = 0;
        this.ydir = 0;
        this.w = 1;

    }
    //interact with item
    eat(p){

        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
        if(x == p.x && y == p.y){

            console.log('eat')
            return true;

        }
        return false;
    }
    grow(){
        let head = this.body[this.body.length-1].copy();

        this.len++;
        this.body.push(head);

    }

    setDir(x,y){

        this.xdir = x;
        this.ydir = y;

    }
    show(){
        for (let i=0;i<this.body.length;i++){

            fill('white');
            noStroke();
            rectMode(CENTER);
            rect(this.body[i].x,this.body[i].y,this.w,this.w);
            this.x += this.dir;
        }
    }
    update(){

        // this.body[0].x += this.xdir
        // this.body[0].y += this.ydir
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

}


class Item{

    constructor(w,h){

        this.w = 1;
        this.active = true;
        this.x = Math.floor(random(w));
        this.y = Math.floor(random(h));
        console.log(this.x,this.y)
        this.vect = createVector();

    }

    show(){

        rectMode(CENTER)
        fill('red');
        noStroke();
        rect(this.x,this.y,this.w,this.w);

    }

}