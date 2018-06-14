##################################
# Name: github.com/batimusprime/
# Date: 4/16/18
# Program: ASCII showcase
# Purpose: 
# Write a program that prints the numbers from 1 to 100. 
# For multiples of three print 'Fizz' instead of the number
# For the multiples of five print 'Buzz'. 
# For numbers which are multiples of both three and five print 'FizzBuzz'.
##################################

#create list with numbers 1 - 100
numbers= list(range(1, 101))

#create variables for divisors to easily change later
fizznum = 3
buzznum = 5

for num in numbers:
    
    #Test two conditions for fizzbuzz first
    #Using modulo with remainder 0 allows for determination of given parameters (divisible)
    if((num%fizznum)== 0 and (num%buzznum)==0):
        print('FizzBuzz')
    elif((num%buzznum) == 0):
        print('Buzz')
    elif((num%fizznum) == 0):
        print('Fizz')
    #if all conditions aren't met, continue to iterate through list
    else:
        print(num)