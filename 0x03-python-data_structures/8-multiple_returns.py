#!/usr/bin/python3
def multiple_returns(sentence):
    first_tuple = ()
    if len(sentence) == 0:
        first_tuple = 0, "None"
    else:
        first_tuple = len(sentence), sentence[0]
    return first_tuple
