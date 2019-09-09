var f = 1
function nextGen(){
    console.log('Generation: ', f);
    
    calcFit();

    for (let i=0;i<TOTAL;i++){

        birds[i] = alphaBird();

    }

    alpha = [];
    f++;
}


function calcFit(){

    let sum = 0;
    for (let bird of alpha){

        sum += bird.score;

    }
     
    for (let bird of alpha){
        //fitness is a measure of how this bird did versus the average, fitness is probability this will be selected
        bird.fitness += bird.score / sum;

    }

}


function alphaBird(){
    var index = 0;
    var r = random(1);

    while (r > 0){

        r = r - alpha[index].fitness;
        index++;

    }
    index--;
    let bird = alpha[index];
    let child = new Bird(bird.nn);
    child.mutate();
    return child;

}