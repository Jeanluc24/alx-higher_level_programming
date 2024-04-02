#!/usr/bin/python3

def safe_function(fct, *args):
    import sys
    try:
        value = fct(*args)
    except Exception as j:
        sys.stderr.write("Exception: {}\n".format(j))
        value = None

    return (value)
