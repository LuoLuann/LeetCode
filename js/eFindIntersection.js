// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) { 

    // code goes here  
    let a = strArr[0].split(", ")
    let b = strArr[1].split(", ")
  
    var result = a.filter(x => b.find(a => a === x))
    return result.length > 0 ? result.join(',') : 'false'
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));

function FindIntersection(strArr) { 

    // code goes here  
    let interc = []
    let interc2 = []
    let ar1 = strArr[0].split(", ")
    let ar2 = strArr[1].split(", ")
  
    interc  = ar1.filter(x => ar2.find(a => a === x))
    
    for(let i = 0; i < ar1.length; i++) {
      if(ar2.includes(ar1[i])) {
        interc2.push(ar2[i])
      }
    }
  
  
    return strArr; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));