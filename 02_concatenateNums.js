
function performOperation(secondInteger, secondDecimal, secondString){
const firstInteger= 4; 
const firstDecimal=4.0;
const firstString="Hackerrank";

//firstInt secondInt 
secondInteger= parseInt(secondInteger) ; //converted to int
console.log(firstInteger + secondInteger) ;//sum of fistInt + secondInt


secondDecimal= parseFloat(secondDecimal); //converted to float
console.log(firstDecimal+ secondDecimal); 

secondString= secondString.toString();
console.log(`${firstString} + ${secondString}`);

}
performOperation(12,4.32,"is the best place to learn and practice coding!");