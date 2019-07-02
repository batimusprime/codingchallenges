# NRCS Snow Data Graphing
## Overview of Operations:

### Python: 
-----
#### /py/main.py:
    -   get site code from site_list
        -   site_list restricted to 2 entries for development
    -   construct URI with site code
    -   add URI to uri_list
    -   for each uri send web request
    -   save request as CSV
    -   log operations, close files
### /data/:
    - [site_code]_[Y-M-D].csv
        - main csv file to be scraped for charting data
### /logs/:
    - log_[Y-M-D].txt
        - as of now, only records retrieve operations
### HTML Pages:
-----
#### index.html:
    -   Display list of station information with clickable names
    - Click creates url with station code in appropriate location
    - variables passed via URL to graph.html
#### graph.html:
    - get site variables from URL passed (getSite())
    - get data from local folder (getData())
    - parse data* 
        *Data is only parsed via static line removal
    - chart data (chartIt())
    - After viewing, return to station list / admin page (back button)

### Data
-----
___All data provided by NRCS___
* List of stations:
    * https://wcc.sc.egov.usda.gov/nwcc/rgrpt?report=snowmonth_hist&state=CA&operation=View
* Link for reports:
    * https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/customGroupByMonthReport/monthly/ABY:CA:SNOW%7Cid=%22%22%7Cname/POR_BEGIN,POR_END:1,2,3,4,5,6/WTEQ::collectionDate,SNWD::value,WTEQ::value
    
    
## Requirements
* Network connection
* Chart.js 2.8.0+ (Delivered via CDN)
* [ES6 supported browser](https://caniuse.com/#feat=es6)
* Python 3.6.4
* BeautifulSoup 4
* Urllib

## TODO
- [x] Get title from index.html and transfer to graph.html
- [ ] Last updated date
- [x] Fetch data with Python
- [ ] Parse and clean data with regex
- [ ] Set Fetch to CRON job 1x /  month
- [ ] Hosting
- [ ] Expand to other states
- [ ] Check for zero data years
- [ ] Display information about site with link to data in NRCSsites.csv

