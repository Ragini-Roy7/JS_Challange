//es 6 map,filter,reduce,includes,indexOf,some ,spread,rest
const employee= [
    {
        name:"Ragini Roy",
        designation:"Developer",
        yoe:3,
        proj_assigned:true,
        org:"Deloitee"
    }, 
    {
        name:"Rupa Rupa",
        designation:"Product Designer",
        yoe:5,
        proj_assigned:true,
        org:"Deloitee"
    },
    {
        name:"Piyush Aggarwal",
        designation:"Backend Developer",
        yoe:4,
        proj_assigned:false,
        org:"Deloitee"
    }
]
//parameters that map will iterate over
// const nameOfEmployees= employee.map((nameOfEmp, index)=> {
//     console.log(nameOfEmp, index)
//    return  nameOfEmp.name;

// });
// console.log(nameOfEmployees);
const employeesDetails= employee.map((details,index)=> {
    console.log(details,index);
    return `Name of employee is ${details.name} with designation as ${details.designation} with years of experience ${details.yoe} is having projects assigned as ${details.proj_assigned}`
});

//emp having proj_assigned as true
const hasProjAssigned= employee.filter((project,index)=> {
    // console.log(project,index)
    return project.proj_assigned===true;

});
console.log(hasProjAssigned);

const ProjAssigned= employee.find((project,index)=> {
    // console.log(project,index)
    return project.proj_assigned===true;

});
console.log(ProjAssigned);

//some()=> if any of the element satisfies the condition
const emp_yoe= employee.some((emp,index)=> {
    if(employee.emp_yoe>=5){
        console.log(emp_yoe)
    }

});
//false

//check if emp belongs to same org
// const emp_org= employee.some(emp=>emp.org==="Deloitee");
// console.log(emp_org)
