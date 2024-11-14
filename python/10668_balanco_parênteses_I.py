def verify(expression):
    stack = []
    open_symbols = ['(']
    close_symbols = {
        ")": "("
    }
    
    for char in expression:
        if char in open_symbols:
            stack.append(char)
        elif char in close_symbols:
            if len(stack) == 0 or stack.pop() != close_symbols[char]:
                return "incorrect"
    
    return "correct" if len(stack) == 0 else "incorrect"
while True:
    try:
        exp = input().strip()
        print(verify(exp))
    except EOFError:
        break