#!/usr/bin/python3

def safe_print_list_integers(my_list=[], x=0):
    number = 0
    for element in range(x):
        try:
            print("{:d}".format(my_list[element]), end='')
        except (ValueError, TypeError):
            pass
    print()
    return number
