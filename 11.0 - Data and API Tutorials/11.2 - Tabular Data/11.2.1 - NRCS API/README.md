# NRCS Snow Data Graphing
## Overview
- Display list of stations with clickable names
- Button click:
    - create url with station code in appropriate location (*)
    - fetch data from created url (*)
    - parse data ( )
    - chart data ( )
- After viewing, return to station list / admin page

## Data
### All data provided by NRCS
* List of stations:
    * https://wcc.sc.egov.usda.gov/nwcc/rgrpt?report=snowmonth_hist&state=CA&operation=View
* Link for reports:
    * https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/customGroupByMonthReport/monthly/ABY:CA:SNOW%7Cid=%22%22%7Cname/POR_BEGIN,POR_END:1,2,3,4,5,6/WTEQ::collectionDate,SNWD::value,WTEQ::value
    
    
## Requirements
* Network connection
* Chart.js 2.8.0+ (Delivered via CDN)
* ECMA6 supported browser

## TODO
- [] Get title from NRCSsites.csv / index.html and transfer to graph.html
- [] Last updated date
- [x] Fetch data with Python
- [] Parse and clean data with Python
- [] Set Fetch to CRON job 1x /  month
- [] Hosting
- [] Integrate auto-fetch of data with CRON jobs
- [] Create API / documentation
- [] Expand to other states
- [] Check for zero data years

## Python Operations

### /py/:
#### main.py:
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