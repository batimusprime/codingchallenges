# -*- coding: utf-8 -*-
"""
Created on Sun Jul 22 13:21:22 2018

@author: Batimus
"""
api = "AIzaSyBA3BKgwWGa3-0P1w_PVkdZDBtgzqq06VE"
auth = "fenwayscore.firebaseapp.com"
dbad = "https://fenwayscore.firebaseapp.com"
stor = "fenwayscore.appspot.com"
db = firebase.database()

import pyrebase
config = {  "apiKey": api,
  "authDomain": auth,
  "databaseURL": dbad,
  "storageBucket": stor}
def post(db,table,data, config):
    firebase = pyrebase.initialize_app(config)
    table = db.child("last").get()
