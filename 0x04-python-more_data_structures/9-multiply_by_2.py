#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new_dicto = a_dictionary.copy()
    list_keys = list(new_dicto.keys())

    for count in list_keys:
        new_dicto[count] *= 2

    return (new_dicto)
