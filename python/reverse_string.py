def iteratorReverse(string):
  reverse = []

  for i in range(len(string) - 1, -1, -1):
    reverse.append(string[i])

  reverse = "".join(reverse)

  return reverse

def FirstReverse(strParam):
  char = strParam[::-1]

  return char


# keep this function call here 
print(FirstReverse(input()))