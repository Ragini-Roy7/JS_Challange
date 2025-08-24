// let string="hackerrank";
// let rev;
// try {
// rev= string.split("").reverse().join("");
// console.log(rev)
// }
// catch(error){
//     console.log(error)
// }
// finally{
//     console.log(string)
// }
function revString(s){
    let rev;
    try{
        rev=s.split("").reverse().join("");
        console.log(rev);
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log(s)
    }
}
(revString(1234))