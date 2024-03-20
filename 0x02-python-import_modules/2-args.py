#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    numb = len(sys.argv)
    if numb == 1:
        print("{} arguments.".format(numb - 1))
    elif numb == 2:
        print("{} argument:".format(numb - 1))
    else:
        print("{} arguments:".format(numb - 1))

    for count in range(1, numb):
        print("{}: {}".format(count, sys.argv[count]))
