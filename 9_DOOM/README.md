# Doomsday Algorithm
## Input date and receive the day of the week
### Doomsday Rules:
- Sunday = 0
- Monday = 1
- Tuesday = 2
- Wednesday = 3
- Thursday = 4
- Friday = 5
- Saturday = 6

#### Anchor Day (A):
- Repeat
- 1400 - 1499: Friday (5)
- 1500 - 1599: Wednesday (3)
- 1600 - 1699: Tuesday (2)
- 1700 - 1799: Sunday (0)
- Repeat
- 1800 - 1899: Friday (5)
- 1900 - 1999: Wednesday (3)
- 2000 - 2999: Tuesday (2)
- 2100 - 2199: Sunday (0)


#### Cheat algorithm

> n = Last 2 digits of year

> x = n + (n/4)

> x = 1.25n

> y = x%7 

> z = y + A

or

> 1.25n % 7 + A


#### Todo:
- [X] Learn how to derive anchor day manually
- [ ] Develop verbose steps to "teach" algorithm.    
- [ ] Gregorian shift for early years
- [ ] Leap year
#### References
- Finding a remainder: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript/
- JSBin test of algorithm: https://jsbin.com/numajeqefe/1/edit?js,console
- JSBin test of 'range' function: https://jsbin.com/qasekiruqa/edit?js,console

IF(ROUND(B3/4,0)=B3/4,2,
IF(ROUND(B3/4,0)<B3/4,0, IF(ROUND(B3/4,1)=B3/4,5,3)))