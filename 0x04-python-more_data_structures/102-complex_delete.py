#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    for count in list(a_dictionary):
        if a_dictionary[count] == value:
            del a_dictionary[count]
    return a_dictionary
