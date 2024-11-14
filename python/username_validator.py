import re

def CodelandUsernameValidation(strParam):
    if len(strParam) < 4 or len(strParam) > 25 or strParam.endswith("_"):
        return False
    if not re.match(r'[a-zA-Z]', strParam[0]):
        return False
    return True

print(CodelandUsernameValidation(input()))
