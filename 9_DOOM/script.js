//these are unknown variables
let A;
let n;

//the first algorithm to test
function testA(A,n){
  
const w = n + (n/4)
const x = w%7
const answerA = x + A

return answerA;

};

//the second algorithm to test
function testB(A,n){
  
  const answerB = ((1.25*n)%7)+A
  return answerB;
  
  
}

//test runner, returns answers as array [first,second]
function runTest(A,n){
    
    //empty array
    let answerArr = [];

    //run test A
    let resultA = testA(A,n);
    
    //run test B
    let resultB = testB(A,n);
    
    //add answers to array
    answerArr.push(resultA,resultB)
    
    //compare answers array;
    compareResults(answerArr)
}

//compare the 2 answers
function compareResults(ans){
  
  if (ans[1] == ans[0]){
  
    console.log("Match: TRUE : " + ans[0] + " - " + ans[1]);
  
  }else{
    
    console.log("Error")
    
  }
}


//run the test testN # of times

function autoRun(testN){
    
    //randomization of answers in array
    let  firstRanArr = Array.from(Array(testN).keys()).map(i=>100+i*2);
    
    //straight 1-10 'range' function in array
    let  secondRanArr = Array.from(Array(testN).keys()).map(i=>1+i);
    
    //empty array
    let testParams = []
    
    //fill array
    testParams.push(firstRanArr,secondRanArr);
    
    //run tests with arrays, iterate over each array with same for loop increment
    //don't need to test against both lengths, find best practice
    for (i=0;i<firstRanArr.length && i<secondRanArr.length; i++){
    
        console.log('testRun: ' + testParams[0][i] + ' ' + testParams[1][i]);
        runTest(testParams[0][i],testParams[1][i]);
        
    
    }
}

//call function to start process, arg = # of times to test
autoRun(12);




