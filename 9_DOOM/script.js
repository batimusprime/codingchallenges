//input date

//run algorithm

//return day of week as results


//test date, change to user input
let t = "01-02-2013"

//split string at divider
let n = t.split('-');

//assign data parts as variables

//two digit month
let mon = n[0];

//two digit day
let day = n[1];

//last two digits of year
let lastTwo = n[2].slice(2);

//four digit year
let fullYear = n[2]

//find anchor day aka 2053 problem
function findAnc(l){
    
    if (Math.round(l/4) == (l/4)){
        
        //console.log('anchor day is 2');
        return 2;
        
    }else if(Math.round(l/4) < (l/4)){
        
        //console.log('anchor day is 0');
        return 0;
        
    }else if((l/4).toFixed(1) == (l/4)){
        
        //console.log('anchor day is 5');
        return 5;
    
    }else{
        
        //console.log('anchor day is 3');
        return 3;
    }

}

