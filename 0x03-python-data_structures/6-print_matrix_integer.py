#!/usr/bin/python3
# 6-print_matrix_integer.py


def print_matrix_integer(matrix=[[]]):
    """Print matrix of integers"""
    for j in matrix:
        for i in i_row:
            print("{:d}".format(i), end=" " if i != j[-1] else "")
        print()
