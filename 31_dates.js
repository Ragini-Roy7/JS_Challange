// current date 
// let now= new Date();
// console.log(now);

// specific date, using new Date method, months are 0-based indexed
// let dob= new Date(2002,8,20) ; //yyy-mm-dd
// console.log(dob);
// console.log(dob.getDay());
// console.log(dob.getMonth());

// let date= new Date(2009,11,10);
// console.log(date);
//can not use new Date constructor method to parse dd-mm-yyy format 
//to do so, parse string , reorder values of constructor
// const dateString = "09-19-2002"
// const parts = dateString.split('-');

// const mm=parseInt(parts[0],10); //+1
// const dd= parseInt(parts[1],10)


// let myDate= new Date(8.64e15);
// console.log(myDate.toString());
//8.64*10^15 

const myDate = new Date(2027,0,1); //0->Jan ...1/1/2027
// console.log(myDate.getDay()); //5-> friday

const dayOfWeek = myDate.getDay();
// console.log(dayOfWeek); 

const dayNames= ["sunday", "monday","tuesday", "wednesday", "thursday", "friday", "saturday"];
const dayName= dayNames[dayOfWeek]
// console.log(`Jan 1 2027 is : ${dayName}`);

//parsing in browsers is recognized in modern browsers in format yyy-mm-dd, ISO standard 
//it fails to parse other formats ie. mm-dd-yyy or dd-mm-yyy
//so can`t rely on string parsing using Date obj ()

function createDateFormatDDMMYYY(dateString){
    const parts= dateString.split('-');
    //split it into diff parts
    const day = parseInt(parts[0], 10);
    const month= parseInt(parts[1], 10);
    const year= parseInt(parts[2],10);

    //month->0-based indexed
    return new Date(year, month-1, day);
}
// const otherDate= createDateFormatDDMMYYY("10-10-2025");
// console.log(otherDate.toString());
// console.log(otherDate.getMonth());

const myBirthday = createDateFormatDDMMYYY("19-9-2025");
// console.log(myBirthday.toString());

const day= myBirthday.getDay();
console.log(day);


// console.log(myBirthday.getDay());
console.log(myBirthday.getMonth()); //8->Sept as 0-based indexed

const week_days= ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log(week_days[day]);



