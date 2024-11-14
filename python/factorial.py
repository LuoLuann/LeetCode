def FirstFactorial(num):
  fac = 1

# range(start, stop, step)
  for i in range(num, 0, -1):
    print(i)
    fac = i * fac
  
  return fac

def FirstFactorial2(num):
    return 1 if num == 1 else num * FirstFactorial(num - 1);

