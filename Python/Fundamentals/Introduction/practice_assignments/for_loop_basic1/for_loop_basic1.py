# Print all integers from 0 to 150

# for i in range(0, 151):
#     print(i)

# Print all the multiples of 5 from 5 to 1,000

# print(*range(5, 1001))

# Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

# def coding_dojo():
#     for i in range (1, 101):
#         if i % 10 == 0:
#             print ('Coding Dojo')
#         elif i % 5 == 0:
#             print ('Coding')
#         else:
#             print(i)

# coding_dojo()

# Add odd integers from 0 to 500,000, and print the final sum.

# minimum = 0
# maximum = 500000
# Oddtotal = 0

# for number in range(minimum, maximum + 1):
#     if(number % 2 != 0):
#         print("{0}".format(number))
#         Oddtotal = Oddtotal + number

# print("The Sum of Odd Numbers from {0} to {1} = {2}".format(minimum, maximum, Oddtotal))

# Print positive numbers starting at 2018, counting down by fours.

# def count_down_four():
#     number = 2018
#     while number > 0:
#         print (number)
#         number = number - 4
        
# count_down_four()

# Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult

def flex_countdown(low, high, mult):
    for i in range (low, high):
        if i % mult == 0:
            print (i)
            
flex_countdown(2, 10, 3)