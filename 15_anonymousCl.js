//anonymous classes : classes within a var without name
//class expression: pass classes within a var 
const Employees= class {
    constructor(name,department,exp){
        this.name= name;
        this.department= department;
        this.exp=exp;
    }
    getDetails(){
        return `Name is ${this.name}, assigned in ${this.department} ,with ${this.exp} years of experience`;
    }
}
//instantiate classes to create objects
const emp= new Employees(["Shyamali Shah"],[ "FinTech"], [3]);
// console.log(emp.getDetails());

//named classes
const Projects=class Fullstack{
    constructor(projectName, techStack, timeline) {
        this.projectName= projectName;
        this.techStack= techStack;
        this.timeline= timeline;
    }
    getProjectDetails(){
        return `Project Name ${this.projectName}, made up with ${this.techStack} under timeline of ${this.timeline}`;
    }
}
   //create dynamically objects within this class
const projects= [];
function addProjects(projectName, techStack, timeline){
    projects.push(new Projects (projectName, techStack, timeline));
}
//calling function
addProjects(["Fullstack to do app"], ["MERN"], ["5 Days"]);
addProjects(["Fullstack coding platform"], ["MEAN"], ["6 months"]);
projects.forEach((proj=> console.log(proj.getProjectDetails())));