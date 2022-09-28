# Update Values in Dictionaries and Lists
# x = [[5, 2, 3], [10, 8, 9]]
# students = [
#     {'first_name':  'Michael', 'last_name': 'Jordan'},
#     {'first_name': 'John', 'last_name': 'Rosales'}
# ]
# sports_directory = {
#     'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer': ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [{'x': 10, 'y': 20}]

# x[1][0]=15
# print(x)

# students[0]['last_name'] = "Bryant"
# print(students)

# sports_directory['soccer'][0] = 'Andres'
# print(sports_directory)

# z[0]['y']=30
# print(z)

# Iterate Through a List of Dictionaries
# students = [
#     {'first_name':  'Michael', 'last_name': 'Jordan'},
#     {'first_name': 'John', 'last_name': 'Rosales'},
#     {'first_name': 'Mark', 'last_name': 'Guillen'},
#     {'first_name': 'KB', 'last_name': 'Tonel'}
# ]

# def iterateDictionary(students):
#     for i in range(len(students)):
#         print("first_name - "+students[i]['first_name']+", last_name - "+students[i]['last_name'])
# iterateDictionary(students)

# Get Values From a List of Dictionaries
def iterate_dictionary(list):
    for i in range(0, len(list)):
        output = ""
        for key,val in list[i].items():
            output += f" {key} - {val},"
        print(output)

iterate_dictionary(students)

# Iterate Through a Dictionary with List Values

# def printInfo(some_dict):
#     for key in (some_dict):
#         print(len(some_dict[key]), key)
#         for i in range(len(some_dict[key])):
#             print(some_dict[key][i])
#         print("")


# dojo = {
#     'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#     'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }
# printInfo(dojo)
