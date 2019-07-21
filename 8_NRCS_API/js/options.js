//declare empty arrays
let labels = []
let sweData = []

//set border color
let borderColor = 'rgba(0, 0, 0, .5)';

//get canvas as variable
let ctx = document.getElementById('myChart').getContext('2d');
    
//create a gradient, will wrap in function later
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255,255,255,.1)');   
gradient.addColorStop(.6, 'rgba(65,183,101,.5)');
gradient.addColorStop(1, 'rgba(69,175,101,1)');

let data = {
    labels: labels,
    datasets: [{
        data: sweData,
        backgroundColor: gradient,
        borderColor: borderColor,
        borderWidth: 1.1,
        borderJoinStyle : 'square',
        borderCapStyle: 'square',
        pointStyle: 'star',
        pointRadius: 5,
        lineTension: .1
    }]
};


let options = {
    legend: {

        display: false

    },
    scales: {
        xAxes: [{

            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{

            gridLines: {
            drawOnChartArea: true,
            drawBorder: false

            },
            scaleLabel: {

                display: true,
                labelString: 'Inches'

            },
            ticks: {

                display: true

            }
        }]
    }
}


//type of chart
//bar || line
let type = 'line';

