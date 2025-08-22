
// function vowelAndConsonants(s){
//     for(let i=0;i<s.length;i++){
//         if(s=="a"|| s=="e" ){
//             console.log(s[i]);
//         }
//     }
// }
// console.log(vowelAndConsonants("javascriptloops"))

// let string= "javascriptloops";
// for(let i=0;i<string.length;i++){
//     if(string[i]==="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u"){
//         console.log(string[i]);
//     }
// }
//     for(let i=0;i<string.length;i++){
//         if(string[i]!=="a"|| string[i]!=="e" || string[i]!=="i" || string[i]!=="o"  ||string[i]!=="u") {
//             console.log(string[i])
//         }
//     }
// for(let i=0;i<string.length;i++){
//     if(string[i]==="a"){
//         console.log(string[i])
//     }
//     if(string[i]==="e"){
//         console.log(string[i])
//     }
//     if(string[i]==="i"){
//         console.log(string[i])
//     }
//     if(string[i]==="o"){
//         console.log(string[i])
//     }
//     if(string[i]==="u"){
//         console.log(string[i])
//     }
// }
// for(let i=0;i<string.length;i++){
// switch(string[i]) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     console.log(string[i]);
//     break;
// }}
// for(let i=0;i<string.length;i++){
//     if(string[i]!=="a" && string[i]!=="e" && string[i]!=="i" && string[i]!=="o" && string[i]!=="u") {
//         console.log(string[i])
//     }
// }

function vowelAndConsonants(s){
    for(let i=0;i<s.length;i++){
        //using switch case 
        switch(s[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            console.log(s[i]);
            break;
        }
    }

    for(let i=0;i<s.length;i++){
    if(s[i]!=="a" && s[i]!=="e" && s[i]!=="i" && s[i]!=="o" && s[i]!=="u") {
        console.log(s[i])
    
    }
}
}
vowelAndConsonants("javascriptloops")
