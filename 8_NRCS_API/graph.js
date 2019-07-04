            //array of years / xlabels
            const xlabels = [];
            
            //arrays of month data
            const jan = [];
            const feb = [];
            const mar = [];
            const apr = [];
            const may = [];
            const jun = [];
            const jul = [];
            const aug = [];
            const sep = [];
            const oct = [];
            const nov = [];
            const dec = [];
            
     

            
            async function getData(code){
            
            //ON DEPLOY: ENTER CORRECT FILE PATH HERE 
            //get the csv, return as response, read text of response
            const response = await fetch('/data/' + code + '.csv');
            const data = await response.text();
      
            
            //splits the data at newlines
            //slice 57 cannot be the best way to do this, but it works for now, removes the first 57 lines
            const table = data.split('\n').slice(57);
      
            table.forEach(row =>{
            
                //split columns at comma
                const columns = row.split(',');
                
                //get labels
                const label = columns[0]
                
                //push labels to array so they can be iterated over for chart
                xlabels.push(label);
                
                //main data array - jan
                const janRow = columns[1];
                jan.push(janRow); 
                
                //main data array - feb
                const febRow = columns[2];
                feb.push(febRow);
                
                //main data array - mar
                const marRow = columns[3];
                mar.push(marRow);
                
                //main data array - apr
                const aprRow = columns[4];
                apr.push(aprRow);

                //main data array - may
                const mayRow = columns[5];
                may.push(mayRow);
                
                //main data array - jun
                const junRow = columns[6];
                jun.push(junRow);
                
                //main data array - jul
                const julRow = columns[7];
                jul.push(julRow);
 
                //main data array - aug
                const augRow = columns[8];
                aug.push(augRow);
 
                //main data array - sep
                const sepRow = columns[9];
                sep.push(sepRow);
 
                //main data array - oct
                const octRow = columns[11];
                oct.push(julRow);
 
                //main data array - nov
                const novRow = columns[13];
                nov.push(novRow);
 
                //main data array - dec
                const decRow = columns[15];
                dec.push(decRow);

              //end foreach
              });
              
              
              //end async func
              }
        
        
        
        //async needed to wait for getData to complete
        async function chartIt(loc, code){
        
        //get the data and wait for stream to complete
        await getData(code);
        //get the DOM element to display the chart
        const ctx = document.getElementById('myChart').getContext('2d');
        //set title as H1 location
        //replace removes URL space character
        document.getElementById('location').innerHTML = (loc.replace(/%20/g, " ") + " , CA");

        var myChart = new Chart(ctx, {
        
    
    //params for chart
    type: 'line',
    
    data: {
        
        labels: xlabels,
        
        
        datasets: [{
            label: 'January',
            data: jan,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },{
            label: 'February',
            data: feb,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'March',
            data: mar,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)', 
            ],
            borderWidth: 1
        },{
            label: 'April',
            data: apr,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'May',
            data: may,
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'June',
            data: jun,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)'
            
            ],
            borderWidth: 1
        },{
            label: 'July',
            data: jul,
            backgroundColor: [
                'rgba(241, 66, 244, 0.2)',
            ],
            borderColor: [
                'rgba(241, 66, 244, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'August',
            data: aug,
            backgroundColor: [
                'rgba(270, 63, 191, 0.2)',
            ],
            borderColor: [
                'rgba(270, 63, 191, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'September',
            data: sep,
            backgroundColor: [
                'rgba(63, 191, 191, 0.2)',
            ],
            borderColor: [
                'rgba(63, 191, 191, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'October',
            data: oct,
            backgroundColor: [
                'rgba(63, 63, 191, 0.2)',
            ],
            borderColor: [
                'rgba(63, 63, 191, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'November',
            data: nov,
            backgroundColor: [
                'rgba(241, 104, 104, 0.2)',
            ],
            borderColor: [
                'rgba(241, 104, 104, 1)',
            
            ],
            borderWidth: 1
        },{
            label: 'December',
            data: dec,
            backgroundColor: [
                'rgba(241, 241, 104, 0.2)',
            ],
            borderColor: [
                'rgba(241, 241, 104, 1)',
            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

};
     //passes the selected site from index.html => graph.html via URL substrings     
     function getSite(){  
     
        //get variables from URL substring
        const text = window.location.hash.substring(1)
        
        //assign as variables
        const loc = (text.split('#')[1]);
        const code = (text.split('#')[0]);
        
        //call chart function with selected site params
        chartIt(loc, code); 

     }
        //call main func  
        getSite();
