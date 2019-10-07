//empty array to hold cities
var cities = [];

//global variables
var totalCities;
var recordDistance;

//p5 setup func
function setup(){

  createCanvas(800,600);

}
//end setup

//p5 draw loop
function draw(){
  
  //do not need fast drawing for this project
  frameRate(10);
  //setup canvas
  background(0);
  fill(255);
  //click listener for start button
  $('#submit').on('click',function(){
    
    //do not refresh page
    event.preventDefault();

    //get value from cities input
    totalCities = $('#cities').val();

    //start the calculations
    go(totalCities);

  })

/*
VISUAL
*/

//draw cities in array
for (var i =0; i<totalCities;  i++){

  ellipse(cities[i].x, cities[i].y, 8,8); 
};

//finder line properties
stroke(255);
strokeWeight(2);
noFill();

//connect points with lines P5 shape funcs (finder lines)
beginShape();

for (var i =0; i<totalCities;  i++){
  vertex(cities[i].x, cities[i].y); 
};

endShape();

//best line properties
stroke(0,155,155);
strokeWeight(4);
noFill();

//connect points with lines P5 shape funcs (best lines)
beginShape();

for (var i =0; i<totalCities;  i++){

  vertex(bestEver[i].x, bestEver[i].y); 

};

endShape();

//loop through cities and find distances
var i = floor(random(cities.length));

var j = floor(random(cities.length));
//swap creates holder, finds next variable and loops through array
swap(cities,i,j);

//get best distance from calcs
var d = calcDistance(cities);

if (d<recordDistance){
  
  recordDistance = d;
  
  let textBox = document.getElementById('textBox');
  
  textBox.innerHTML = recordDistance.toFixed(2);
  
}

}

/* 
PROGRAM FLOW
*/

function go(totalCities){

  // Create array with random vectors connecting cities
  for (var i =0; i<totalCities;  i++){
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
  //run the calc function
  var d = calcDistance(cities);
  //store best distance so it may be updated
  recordDistance = d;
  bestEver = cities.slice();
  
  }

//swap creates holder, finds next variable and loops through array
function swap(a,i,j){

  var temp = a[i];

  a[i] = a[j];

  a[j] = temp;

}

//calculate distance between points
function calcDistance(points){

  var sum = 0;
  //loop through lengths
  for (var i=0; i<points.length-1; i++){

    var d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y)

    sum += d;

  }

  return sum;

}


