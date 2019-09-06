//thius creates a new generation of birds 
function nextGeneration() {

    //need to determine how well a bird did by score, normalize the fitness levesl
    calcFitness();
    //go through all the birds and get the best one
    for (let i = 0; i < TOTAL; i++) {

        birds[i] = best();
        console.log("Generation")
    }

    saved = [];
}

//determine how well this bird did (fitness)
function calcFitness() {

    let sum = 0;
    //check all the birds
    for (let bird of birds) {

        //add up all the scores
        sum += bird.score;
    }
    //loop through birds and get fitness level based on score vs average
    for (let bird of birds) {

        bird.fitness = bird.score / sum;
    }

}

//select the best bird
function best(){

    //random bird until we can determine best bird
    let bird = random(saved);
    
    //make new bird with previous birds intelligence
    let child = new Bird(bird.nn);

    return child;

}