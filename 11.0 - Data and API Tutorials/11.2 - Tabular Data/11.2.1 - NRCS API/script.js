            async function getData(){
            
                //get response stream from loading csv
                const response = await fetch('data/NRCSsites.csv');
                
                //when response received, assign text of the response to data
                const data = await response.text();
                
                //parse data with split, remove first row (header)
                const rows = data.split('\n').slice(1);
                
                //iterate over rows
                rows.forEach(elt =>{
                    
                    //split each row at the comma
                    const row = elt.split(',');
                    
                    //assign each column to a variable in order from 0-6 for table display
                    
                    const name = row[0];
                    
                    const code = row[1];
                    
                    const elev = row[2];
                    
                    const lat = row[3];

                    const long = row[4];
                    
                    const year = row[5];
                    
                    const county = row[6];
                    
                    //display on page with dynamic table elements
                    //get this working then refactor
                    document.getElementById('table').innerHTML += ('<tr><td><button name = \"' + name + '\" id=\"' + code + '\" onClick = \"reply_click(this.id, this.name)\">' + name + '</button></td><td>' + code + '</td><td>' + elev + '</td><td>' + lat + '</td><td>' + long + '</td><td>' + year +'</td><td>' + county +'</td></tr>');
                              
            
                });
                
                      
            
            };
        
            //execute function to parse data and display on page
            getData();
        
     
            //function called by button click, assign code for station as clicked_id and name as clicked_name
            function reply_click(clicked_id, clicked_name){
                console.log(clicked_id + " " + clicked_name + " Was Clicked");
                document.location.href=('/graph.html#' + clicked_id+'#' +clicked_name);
            };
            
                    