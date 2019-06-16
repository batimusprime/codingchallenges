# Simple JavaScript Firebase Wrapper

### Allows for CRUD functions with Firebase Cloud Firestore


* Developed with Firebase 6.1.1

__Firebase Cloud Firestore Data Organization Structure:__

```HTML
Collection
    │
    └─Document
      │  │
      │  └Collection
      └Field  │ 
      │       └Document      
      └F...    │      │
      │        └Field └Collection   
      └F...       
```

## TODO

- [x] Create

- [x] Read

- [x] Update*

- [] Delete

- [] Dynamic Config

- [] Server confirmations not clientside

- [] UI / UX improvements

- [] Authentication

- [] Input validation

- [] Exception handling -> Status display

- [] Security best practices review

- [] Hosting

**update is sort of inherent since Firestore actually uses GPPD, PUT is a native function, unlike SQL db's.*


## Functions

**getInput(arg)**

- Declares block level variables and gathers the value of the HTML input section. These are assigned as cText (collection), dText (document), eText (key), vText  (value).


- Individual buttons will pass arguments based on their assigned role. "c" = create, "r" = read, "u" = update, "d" = delete. These are tested and then trigger individual functions, passing the values assigned as *n*Text in order to process them via the server.

**create(collect,doc,key,val)**