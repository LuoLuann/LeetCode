
function FirstReverse (str) {
    return str.split('').reverse().join("")
}

function reverseString(str) {
    console.log("str: ", str)
    if(str === '') {
        return ''
    } else {
        console.log("substr: ", str.substr(1))
        console.log("chatAt: ", str.substr(0))
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(FirstReverse("Pernambuco"))
console.log(FirstReverse("Luann"))
console.log(FirstReverse("Time safado"))

console.log(reverseString("Pao"))
console.log(reverseString("Luann"))
console.log(reverseString("Time safado"))