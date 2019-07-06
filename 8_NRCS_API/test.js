let dataArr = []

async function getData(){


    //open csv as stream
    const response = await fetch('data/test.csv');
    //get csv text
    const data = await response.text();
    //split csv into lines at newline
    let line = data.split('\n')
    //TODO FIX THIS
    //remove header
    let trimmed = line.slice(54);
    
    //iterate over lines
    for(i=0;i<trimmed.length;i++){
        //split data at comma
        let x = trimmed[i].split(',');
        
        let snow = x[1];
        
        //split date at space
        let date = x[0].split(' ')
        let mon = date[0];
        let yr = date[1];
        
        //create key / pair value as temp object
        let dataobj = {
        
            month: mon,
            year: yr,
            swe: snow
        
        };
        
        //test for non-zero entries
        if (dataobj.swe == 0 || dataobj.swe == undefined || dataobj.swe == ' '){
        
        }else{
        //push the object to the holding array
        dataArr.push(dataobj)  

        }
    }
    
    //show data
    for (p=0;p<dataArr.length;p++){
    
    
        console.log(dataArr[p].month + " | " + dataArr[p].year + " : " + dataArr[p].swe );
    
    }
    
}
//end getData



getData();