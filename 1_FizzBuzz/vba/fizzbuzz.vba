Sub FizzBuzz()

'Populate the numbers to test
Cells(2, 3).Value = "Count"
Cells(2, 4).Value = "Result"
'For loop
For i = 1 To 100
        
    'Display the number to test in Column B
    Cells(i + 2, 3).Value = i

'Iterate the counter
Next i

For j = 1 To 100
    
    If Cells(j + 2, 3).Value Mod 5 = 0 Then
        
        Cells(j + 2, 4).Value = "Buzz"
        
    End If
    
    If Cells(j + 2, 3).Value Mod 3 = 0 Then
    
        Cells(j + 2, 4).Value = "Fizz"
    
    End If


    'I did this on purpose as an alternate to testing the count
    
    If Cells(j + 2, 4).Value Like "Fizz" And Cells(j + 2, 3).Value Mod 5 = 0 Then
        
        Cells(j + 2, 4).Value = "FizzBuzz"
        
    End If
   
Next j
   
End Sub
