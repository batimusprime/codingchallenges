
//get the data from the csv and return two arrays
async function getData(){

    //get csv text
    const response = await fetch('../data/' + code + '.csv');;
    const data = await response.text();

    //split by newline
    let lines = data.split('\n').slice(54);

    //main for loop
    for (let i=0;i<lines.length;i++){


        //split into date and data
        let elem = lines[i].toString().split(',');
        let date = elem[0];
        let swe = elem[1];
        
        //check that data exists
        if(swe == 0 || swe == ' ' || swe == undefined || swe == NaN ){

            //no data

        }else{

            //push data to arrays
            //push data to firebase here
            labels.push(date);
            sweData.push(swe);
            // console.log(date, swe);
       
        }
    }

};

async function drawChart(){
    //execute function and get data in 2 arrays (labels, sweData)
    await getData();


    
    //arguments defined in options.js
    let myBarChart = new Chart(ctx, {

        type: type,
        data: data,
        options: options
    
    });

};
    

//get variables from URL substring
const selector = window.location.hash.substring(1)

//assign as variables
const loc = (selector.split('#')[1]);
const code = (selector.split('#')[0]);
document.getElementById('location').innerHTML = (loc.replace(/%20/g, " ") + " , CA");

//call main function
drawChart();

