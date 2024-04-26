1. "2" is printed to console

2. "150" is printed to console

3. "150" is printed to console
   
4. This function will return the array discounted of all the prices with 
their applied discounts: [50, 100, 150]


5. The code cause an error because the program tried to print the let variable 
   i. This let i was declared in the for loop and exhibits block scope so it 
   can't be accessed outside the block.

6.  The code cause an error because the program tried to print the
   discountedPrice. discountedPrice was declared in the for loop as a let 
   variable and exhibits block scope so it can't be accessed outside the block.

7.  "150" will be printed 
   
8.  This function returns the array discounted of all the prices with 
their applied discounts: [50, 100, 150]

9. The code cause an error because the program tried to print the let variable 
   i. This let i was declared in the for loop and exhibits block scope so it 
   can't be accessed outside the block.

10. "3" will be printed to console

11. the function returns the array discounted of all the prices with 
their applied discounts: [50, 100, 150]. Its important to note that although
the keyword 'const' is applied to discounted, values inside discounted can be 
added and removed

12. 
A. student.name
B. student['grad year']
C. student.greeting();
D. student['Favorite Teacher'].name
E. student.courseLoad[0]

13. 
A. '32' 
because the number 2 is converted to a string and concatenated with 3

B. 1 
because in order to do a valid subtraction operation javascript has to find 
a way to make the operands compatible. (turning '3' into 3)

C. 3 
because null is interpreted as a number (0) in order to add it to 3.

D. '3null'
is printed because null is interpreted as a string to be concatenated to '3'

E. 4 
because true coerces to 1 and 1 + 3 = 4

F. 0
the adding operation tries to convert false and null into addable types. 
false is interpreted as 0 and null as 0

G.
'3undefined' 
because undefined is converted to the string 'undefined' to be concatenated 
with '3' which is a string

H. NaN
because subtraction tries to find a way to convert '3' and undefined into 
subtractible types. The only way to do this would be if both operands were 
numbers but undefined cannot be mapped to any numbers bevause its undefined.

14. 
A. true
because 2 gets coerced into the number 2 and compared with 1. 2 is greater than 1

B. false
because both of the operands are strings and '12' comes before '2' lexicographically

C. true 
because '2' gets coerved in the number 2

D. false
because although they are the same value numerically, 2 is a number while '2' is
a string. the === operator also compares operands types thus, its false

E. false
because true is converted into a 1 and 1 does not equal 2.

F. true
because boolean(2) is true because 2 is a truthy value.

15. 
== compares two objects in terms of their value while === compares more strictly
on operand types.

16. in javascript folder
    

17. 
the result will be [2,4,6] will be printed.
I saw there was the function call modifyArray([1,2,3], doSomething);
I traced through the function modifyArray and saw ittakes in an array and a 
function. The for loop iterates through the given array and multiplies each spot
by 2 and appends it to a new list. the function loop does this by using the 
callback parameter.

18. in javascript folder

19. 
output:
1
4
3
2

this is because when the first setTimeout is called, the next setTimeout has to wait for 