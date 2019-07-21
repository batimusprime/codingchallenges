
//get the data from the csv and return two arrays
async function getData(){

    //get csv text
    const response = await fetch('../data/test.csv');
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
            labels.push(date);
            sweData.push(swe);
       
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
    
//call main function
drawChart();