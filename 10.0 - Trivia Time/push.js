//Number of questions (qcount) must be updated manually

var qcount = 5;

//empty array
var a = [];


//dictionary for each question

var q0 ={
  q: "The First Question",
  a: 1
};

var q1 = {
  
  q: "The Second Question",
  a: 2
};

var q2 = {
  
  q: "The Third Question",
  a: 3
};

var q3 = {
  
  q: "The Fourth Question",
  a: 4
};

var q4 = {
  
  q: "The End",
  a: 1
};

//display
for (i=0;i<qcount;i++){

    //eval allows for dynamic creation of variable names
    a.push(eval("q"+i))
    
}


for (i=0;i<a.length;i++){


    console.log(a[i].q + a.indexOf(i));
}

//for(i=0;i<a.length;i++){
//console.log("this is the question: "  + a[i].q)
//console.log("this is the answer: " + a[i].a)
//
//}