let sketchRNN;
let currentStroke;
let x;
let y;
let nextPen = 'down';
let seed = [];
let pDrawing = false;
let modelType = 'hedgehog'
function preload(){
    //initi
    sketchRNN = ml5.sketchRNN(modelType);

}
function startDrawing(){

    pDrawing = true;
    x = mouseX;
    y = mouseY;
    
    
}

function sketchRNNStart(){
    
    
    pDrawing = false;
    sketchRNN.generate(seed, gotPath);
    
}
function setup(){
    
    //select model
    let canvas = createCanvas(600,600);

    console.log('model loaded')
    canvas.mousePressed(startDrawing)
    canvas.mouseReleased(sketchRNNStart)
    
}
function gotPath(error, strokePath){
    if (error){
        error.log(error)
        
    }
    // console.log(strokePath)
    currentStroke = strokePath;
}
function draw(){
    textAlign(CENTER);
    sel = createSelect();
    sel.position(500, 700);
    modelOpts.forEach(function(element, key) {
        sel.option(element);
    });
    
    sel.changed(mySelectEvent);
    stroke(0);
    strokeWeight(4);
    // background(220);
    
    if (pDrawing){

        let strokePath = {
            dx: mouseX - pmouseX,
            dy: mouseY - pmouseY,
            pen: 'down'


        };
        line(x , y , x + strokePath.dx, y + strokePath.dy);
        x += strokePath.dx;
        y += strokePath.dy;

        seed.push(strokePath)

    }
    if(currentStroke){
      

        if (nextPen == 'end'){
            
            // noLoop();
            // return;
            setTimeout(function(){
                
                console.log('again');
    // nextPen = 'down';
                sketchRNNStart();
}
    
,10000)
            

        }
        if(nextPen == 'down'){

            line(x , y , x + currentStroke.dx, y + currentStroke.dy);
        }
        x += currentStroke.dx;
        y += currentStroke.dy;
        nextPen = currentStroke.pen;
        currentStroke = null;
        sketchRNN.generate(gotPath)

    }

}
 
function mySelectEvent() {
    let item = sel.value();
    console.log(item)
  }