# -*- coding: utf-8 -*-
"""
Created on Wed Jun 26 13:35:37 2019

@author: https://github.com/batimusprime

Project: NRCS API
File: getURI.py
Purpose: generates URI list from list of sites, input: site_list.py, output: uri_list.py
This has been integrated into main.py
"""
#gets site list as list element
from site_list import site_list

#list of uri's to output
uri_list = []

#iterate through sites
for site in site_list:
    
    #create useable uri with code
    uri_list.append('https://wcc.sc.egov.usda.gov/reportGenerator/view_csv/customGroupByMonthReport/monthly/'+ site + ':CA:SNOW%7Cid=%22%22%7Cname/POR_BEGIN,POR_END:1,2,3,4,5,6/WTEQ::collectionDate,SNWD::value,WTEQ::value')

#write uri's to file    
f = open('uri_list.py','w+')
f.write('uri_list = [\'')
#everything except last item in list
for uri in uri_list[:-1]:
   f.write(uri + '\',\'')
    
#manually write last item need to omit last comma and close bracket    
f.write(uri_list[-1] + '\']')
f.close()
print('Sites Imported: ', len(site_list))
print('URIs generated: ', len(uri_list))
    
    
    
    
    
