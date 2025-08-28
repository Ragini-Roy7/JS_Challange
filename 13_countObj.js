//n =5 
// object s0 {x:1,y:1}
//object s1 {x:2,y:3}
//object s2 {x:3,y:3}
//object s3 {x:4,y:4}
//object s4 {x:5,y:5}
//to create obj like this, use "array of objects"
// const array=[
//     {x:1,y:1},
//     {x:2,y:12},
//     {x:3,y:3},
//     {x:4,y:4},
//     {x:5,y:5}
// ];
// let count=0;
// let occurances=[]
// for(let i=0;i<array.length;i++){
//     if(array[i].x===array[i].y){
//       count++;
//        occurances.push(array[i])
//     }
// }
// console.log(count);
// console.log(array);

//create a function that counts o.x===o.y then return the count 
function countObj(object){
    let count=0;
    let occurances=[] ;
    for(let i=0;i<object.length;i++){
        if(object[i].x===object[i].y){
            count++;
            occurances.push(object[i])
        }
    }
    //  return {count, occurances}
}
const object=[
    {x:1, y:1},
    {x:2, y:2},
    {x:3, y:3},
    {x:0, y:1}
];
// console.log(countObj(object));
//not to declare own variables 
function countObj(objects) {
    return objects.filter(obj => obj.x === obj.y).length;
}

const objects = [
    {x:1, y:1},
    {x:2, y:2},
    {x:3, y:3},
    {x:0, y:1}
];

console.log(countObj(objects));  
