let sortedData = []

            
async function getData(){
//await response from csv fetch, set text as variable data
const response = await fetch('test.csv');
const data = await response.text()

//split the data into lines, and remove the first 54 lines which are the header
let lines = data.split('\n').slice(54);

//iterate through lines
for (i=0;i<lines.length;i++){

    //split lines into date and data
    let date = lines[i].toString().split(',');
//    console.log(date[0]);
//    console.log(date[1]);

    //idk how this will affect performance
    // can do this with less tests
   if (date[1] == 0 || date[1] == undefined || date[1] == NaN || date[1] == ' '){}else{
   
   let dataobj = {
    
        date: date[0],
        data: date[1]
    
    }
    
    sortedData.push(dataobj);
//    console.log("line #: " + i + ": " + lines[i]);
//}

}
};

};


getData();

//need to iterate over object properties here

let le = Object.keys(sortedData).length
console.log(le);