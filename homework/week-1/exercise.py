# Name : Jordi Jonkergouw
# Student number : 11083603
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.


def split_string(source, separators):
    '''
    Split a string <source> on any of the characters in <separators>.

    The ouput of this function should be a list of strings split at the
    positions of each of the separator characters.
    '''
    list_seps = []
    length_sep = len(separators)
    x = 0
    while x < length_sep:
        list_seps.append(separators[x])
        x = x + 1

    sourcelist = []
    length_source = len(source)
    y = 0
    source_part = ''
    while y < length_source:
    	if source[y] not in list_seps:
    		source_part = source_part + source[y]
    	else:
    		if source_part != '':
    			sourcelist.append(source_part)
    		source_part = ''
    	y = y + 1
    return sourcelist


if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('abacadabra', 'ba')  # should print: ['c', 'd', 'r']