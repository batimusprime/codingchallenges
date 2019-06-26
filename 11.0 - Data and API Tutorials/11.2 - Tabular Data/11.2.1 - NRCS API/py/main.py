# -*- coding: utf-8 -*-
"""
Date: 6/26/2019
Author: https://github.com/batimusprime
Project: NRCS API
Overview: Web scrapper to download snow reports from NRCS site
Note: Site_list has been commented out to 2 entries to support development
"""

from bs4 import BeautifulSoup
import datetime
from urllib.request import urlopen
import time
from site_list import site_list

#create datetime object for later use
now = datetime.datetime.now()
#empty list of uri
uri_list = []
log = open('../logs/log_' + now.strftime('%Y_%m_%d') + '.txt','a')
log.write('######\n# Retrieve operation started: ' + now.strftime('%Y-%m-%d %H:%M:%S') + '\n')
for site in site_list:
    
    #create useable uri with 3-digit site code
    uri_list.append('https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/customGroupByMonthReport/monthly/'+ site + ':CA:SNOW%7Cid=%22%22%7Cname/POR_BEGIN,POR_END:1,2,3,4,5,6/WTEQ::collectionDate,SNWD::value,WTEQ::value')
    
    #this will run 289 server requests so be careful!!
    for uri in uri_list:


        #page request
        page = urlopen(uri)
        #change sleep=60 so as not to ddos / get kicked off server
        time.sleep(1)
        
        #create BS object
        soup = BeautifulSoup(page, 'html.parser')
        #write data to file
        p = ('../data/' + site + '_' + now.strftime('%Y-%m-%d') + '.csv')
        f = open(p,'w+');
        f.write(soup.text)
        f.close();

log.write('# Retrieve operation ended: ' + now.strftime('%Y-%m-%d %H:%M:%S') + '\n')
log.write("# Number of operations: " + str(len(uri_list)) + '\n')
log.write('######\n')
log.close()