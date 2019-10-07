//setting up the grid for the algorithm to search
let cols = 5;
let rows = 5; 

//arrays to hold visited / remaining cells
let openSet = [];
let closedSet = [];

//initialize globals
let start, end, current;

//array of columns
var grid = new Array(cols);

//P5 Setup
function setup(){
    
    createCanvas(600,600);
    
    //create 5x5 array
    for (let i=0;i<cols;i++){
        
        grid[i] = new Array(rows)
        
    }
    for (let j=0;j<cols;j++){
        
        for (let k=0;k<cols;k++){
            
            //create every cell as an object
            grid[j][k] = new Cell(j,k)
            
        }
    }
    //find each nearest neighbor and add it to obj properties as array
    for (let j=0;j<cols;j++){
        
        for (let k=0;k<cols;k++){
            
            //create every cell as an object
            grid[j][k].findNear(grid);
            
        }
    }
    //set starting point as top right
    start = grid[0][0]

    //set target / end
    end = grid[cols-1][rows-1];

    //begin the search at the start point
    openSet.push(start)

}//end setup

//p5 Main Draw Loop
function draw(){

    background(0);
    //instead of while loop, using if loop during draw
    if (openSet.length > 0){
        //start the lowest f value at 0
        let lowest = 0;

        for(let l=0;l<openSet.length;l++){
            //if next step f is lower than current f
            if (openSet[l].f < openSet[lowest].f){
                //new lowest f is current step
                lowest = l;
                
            }
            
        }
        var current = openSet[lowest]
        
        if (current == end){
            
            console.log("COMPLETE");
    
        }
        // removeSet(openSet, current)
        closedSet.push(current);
    }
    //



        //show all of the cells
        for (let m=0;m<cols;m++){
            
            for (let n=0;n<cols;n++){
                
                grid[m][n].show(color(255));
                
            }
        }
        //display the closed sets as red and open sets as green
        for (let o=0;o<closedSet.length;o++){

            closedSet[o].show(color(255,0,0));         
        }
        for (let p=0;p<openSet.length;p++){
            
            openSet[p].show(color(0,255,0));

        }

    

}//end draw

class Cell{
    constructor(x, y){

        //location of cell
        this.x = x;
        this.y = y;
        
        //weights for algorithm
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.near = [];
        
    }

    show(fillC){
        
        //dynamically determine dimensions of cells based on rows/cols and canvas dimensions
        let w = width / cols;
        let h = height / rows;

        //take color as an argument so it can change based on open / closed status
        fill(fillC);
        // noStroke();
        //draw rectangles for grid
        rect(this.x * w, this.y * h,w,h )

    }

    findNear(grid){
        console.log('findNear' + grid);

        let i = this.x;
        let j = this.y
        //check for edges
        if (i < cols-1){
            this.near.push(grid[i + 1][j])

        }
        if (i > 0){

            this.near.push(grid[i - 1][j])
        }
        if (j < rows-1){

            this.near.push(grid[i][j + 1])

        }
        if (j > 0){

            this.near.push(grid[i][j-1])

        }

    }
}

function removeSet(arr, elt){
    console.log('removing')
    for(let q=arr.length-1;q>=0;q--){

        if (arr[q] == elt){

            arr.splice(q,1);

        }

    }

}