function CodelandUsernameValidation(str) { 
    if(str.length < 4 || str.lenght > 26 ) {
      console.log("1")
      return false
    }

    // verifica se o primeiro char é uma letra
    if(!/[a-zA-Z]/.test(str.charAt(0))) {
      return false
    }
  
    if(str.endsWith('_')) {
      return false
    }
  
    return true; 
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));

  // best practics
  1
function CodelandUsernameValidation(str) { 

  // code goes here  
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
  const valid_length = (str) => str.length >= 4 && str.length <= 25;
  return valid_reg.test(str) && valid_length(str);
}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));