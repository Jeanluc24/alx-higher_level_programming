#!/usr/bin/python3
if __name__ == "__main__":
    from calculator_1 import add, sub, mul, div
    import sys
    num_args = len(sys.argv)
    if num_args != 4:
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        exit(1)
    a = int(sys.argv[1])
    opera = sys.argv[2]
    b = int(sys.argv[3])
    if opera == '+':
        print("{} {} {} = {}".format(a, opera, b, add(a, b)))
    elif opera == '-':
        print("{} {} {} = {}".format(a, opera, b, sub(a, b)))
    elif opera == '*':
        print("{} {} {} = {}".format(a, opera, b, mul(a, b)))
    elif opera == '/':
        print("{} {} {} = {}".format(a, opera, b, div(a, b)))
    else:
        print("Unknown operator. Available operators: +, -, * and /")
        exit(1)
