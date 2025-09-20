// oop- based problems for practice & understanding 
//encapsulation
class User {
    #password 
    //private field to be used in getter ,setter
    constructor(userName, password){
        this.userName= userName;
        this.password= password;
    }
   get password(){
    //return masked password
    return "******";
   }
   set password(pass){
     this.#password=pass;
     if(pass.length>6){
        console.log(`Password :${pass}`)
     }else {
        console.log(`password must be atleast 6 characters`)
     }
     
     }
   }

const pass_manager = new User("Ragini","ragini123");
pass_manager.password = "12345"; //invalid 
console.log(pass_manager.password);


