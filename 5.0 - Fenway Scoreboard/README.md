# Fenway Scoreboard Simulator
## Hosted at: https://fenwayscore.firebaseapp.com/
### Dependencies
* Python 3.6.4
* Jupyter Notebook 5.4.1
* Firebase-Database 5.2.0
* Firebase-App (main) 5.2.0
* jQuery 3.3.1

#### Python:
* Scrape.ipynb fetches game information from website
 * pushes information to Firebase database
 
#### HTML
* Javascript data add listener retrieves information on update

## How To
#### Click individual cells to increase score
#### Score is totalled automatically in R (runs) column of each team
#### Click E (error) and H (hit) cells to increase
---
### TODO:
- [] Fix right-hand lines border
- [X] Fix 10th inning
- [] Allow for double-digit run innings
- [X] Firebase Database Integration
- [x] Implement proper UI 
- [] Convert all jQuery event listeners to functions
- [] Scrape data from web to Firebase DB(Seperate project)
- [] Bind data to functions from #1
- [] Move UI to flyout menu
- [] Add bottom features (batter,bso,h,e lights)

## Future Plans:
* Stylize
    - Shadows
    - Door
    - Braille in right line
    - Realistic background
* Expand to add division standings board
* Expand to add league standings board
* Implement p5audio
    - If Sox win, play Dirty Water
    - Play Sweet Caroline during seventhing inning stretch
    - Baseball ricochet sounds with P5.js animation for home team runs 
    - Boos for away team runs