 //level 1.1
// function getDates(dateString){
//     const parts= dateString.split('-');
//     const day= parseInt(parts[0], 10);
//     const month= parseInt(parts[1], 10);
//     const year= parseInt(parts[2],10);

//     return new Date(year, month-1, day);
// }
// const date_one = getDates('1-1-2025');
// // console.log(date_one.getDay()); //3->wed
// const day= date_one.getDay();
// console.log(day);//0->Jan as 0-based indexed

// const week_names= ['sunday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// console.log(week_names[day])


// console.log(date_one.getMonth()); 
//0->Jan as 0-based indexed
// console.log(date_one.getDay());


function getDateTwo(dateString){
 //break-yyy-mm-dd format into day,month,year
 const parts= dateString.split('-');
 const day= parseInt(parts[0], 10);
 const month= parseInt(parts[1],10);
 const year= parseInt(parts[2],10);
 //creating date constructor 
 return new Date(year, month-1, day)
}
const date_two= new getDateTwo('2-2-2025');
console.log(date_two.getDay()); 
 
const day= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(day[date_two.getDay()]);



