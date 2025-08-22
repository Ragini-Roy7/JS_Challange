
// function factorial(num){
//     let fact=0;
//     for(let i=0;i<=num;i++){
//         fact+= num*(num-1)
//     }
// }
// let num=6;
// let fact=0;
// for(let i=1;i<num;i++){
//     fact+= num*(num-i);
// }
// console.log (fact);
// function factorial(num){
//     if(num==0 ){
//         return false;
//     }else {
//         for(let i=2;i<=num;i++){
//             let fact=1;
//             fact=fact*(num-i)
//             console.log(fact)
//         }
        
        
//     }

// }
// factorial(4)
let num=6;
let fact=1;
if(num===0 || num ===1 ){
    fact=1;
}
else {
    for(let i=2;i<=num;i++){
        fact=fact*i;
    }
}
console.log(fact)

