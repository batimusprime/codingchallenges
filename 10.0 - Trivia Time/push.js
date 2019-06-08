//empty array
var a = [];


//dictionary for each question
var q1 = {
  
  q: "The Question",
  a: 1
};

var q2 = {
  
  q: "The Second Question",
  a: 2
};

//display
a.push(q1,q2)

for(i=0;i<a.length;i++){
console.log("this is the question: "  + a[i].q)
console.log("this is the answer: " + a[i].a)

}