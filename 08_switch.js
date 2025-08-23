// let string = "switches";
// let letter = string[0];
// console.log(letter);
// //check for vowels
// for (let i = 0; i < string.length; i++) {
//   switch (string[i]) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       console.log("A");
//       break;
//   }
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[0] === "b" ||
//       string[0] === "c" ||
//       string[0] === "d" ||
//       string[0] === "f" ||
//       string[0] === "g"
//     ) {
//       return "B";
//     } else if (
//       string[0] === "h" ||
//       string[0] === "j" ||
//       string[0] === "k" ||
//       string[0] === "l" ||
//       string[0] === "m"
//     ) {
//       return "C";
//     } else if (
//       string[0] === "n" ||
//       string[0] === "p" ||
//       string[0] === "q" ||
//       string[0] === "r" ||
//       string[0] === "s" ||
//       string[0] === "t" ||
//       string[0] === "v" ||
//       string[0] === "w" ||
//       string[0] === "x" ||
//       string[0] === "y" ||
//       string[0] === "z"
//     ) {
//       return "D";
//     } else {
//       return 0;
//     }
//   }
// }
function getLetter(s) {
    switch (s[0]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        console.log("A");
        break;
      case "b":
      case "c":
      case "d":
      case "f":
      case "g":
        console.log("B");
        break;
      case "h":
      case "j":
      case "k":
      case "l":
      case "m":
        console.log("C");
        break;

    default:
        console.log("D");
    }
  }

getLetter("something");
