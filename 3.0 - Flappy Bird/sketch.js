var bird;
var pipes = [];
function setup(){

    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new Pipe());

}
function draw(){
    background(0);
    bird.show();
    bird.update();
    
    //push a pipe to the array  every 100 frames
    if (frameCount % 100 == 0){
        
        pipes.push(new Pipe());
    
    }
    
    
    //iterate through array backwards
    for (var i = pipes.length-1; i>=0; i--){
    
        pipes[i].show();
        pipes[i].update();
    
        //figure out if pipe hits bird
        if (pipes[i].hits(bird)){
        
            console.log("HIT");
        }
        
        
        //remove pipe from array when it goes offscreen
        if (pipes[i].offscreen()){
            pipes.splice(i,1);
        
        }
    }
    
}
//detect user input
function keyPressed(){
    
    if (key == ' '){
    
        bird.up();
    
    }


}