
# brute force
def findIntersectionByBruteForce(arr1, arr2):
    intersection = []
    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if arr1[i] == arr2[j]:
                intersection.append(arr1[i])
                break
                
    return intersection

def binary_search(arr, low, high, x):
    # base case
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x:
            return mid
            
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        
        else:
            return binary_search(arr, mid + 1, high, x)
            
    else:
        return -1
        

def find_intersection_with_binary_search(arr1, arr2):
    
    intersection = []
    
    arr2 = sorted(arr2)
    print(arr2[0])
    for i in range(len(arr1)):
        if binary_search(arr2, 0, len(arr2) - 1, arr1[i]) != -1:
            intersection.append(arr1[i])
    return intersection

print(find_intersection_with_binary_search([1,2,3,4,5], [1,2,5, 6, 7, 10, 11]))

print(findIntersectionByBruteForce([1,2,3,4,5], [1,2,5]))