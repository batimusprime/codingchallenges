//options.js below
let labels = [];
let sweData = [];

//set border color
let borderColor = 'rgba(0, 0, 0, .5)';

//get canvas as variable
let ctx = document.getElementById('myChart').getContext('2d');
    
//create a gradient, will wrap in function later
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(0,128,255,.1)');   
gradient.addColorStop(.5, 'rgba(0,128,255,.5)');
gradient.addColorStop(1, 'rgba(255,255,255,.6)');

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

//firebase options

//Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkDwyY4u8FyGkqr7B4K3bGnd9hy4Jwjao",
    authDomain: "nrcsgraphs.firebaseapp.com",
    databaseURL: "https://nrcsgraphs.firebaseio.com",
    projectId: "nrcsgraphs",
    storageBucket: "nrcsgraphs.appspot.com",
    messagingSenderId: "946223386871",
    appId: "1:946223386871:web:6f8e0aab92f84b2c"
  };
