// IF

// const isUseroggedIn = true
// const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==


// -------------------------------------------------------

// if(2 == "2"){
//     console.log("Executed")
// }

// -------------------------------------------------------

// if(2 === "2"){
//     console.log("Executed")
// }
// else{
//     console.log("not"); 
// }

// -------------------------------------------------------

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // error because of scope using const and let not showing eroor with var of simple

// --------------------------------------------------------


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// -------------------------------------------------------

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course Testcase 1");
// }
// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course Testcase 2");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

// --------------------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter a number: ', (input) => {
//     let num = Number(input);

//     if (num > 0) {
//         console.log("Positive");
//     }
//     else if (num < 0) {    
//         console.log("Negative");
//     }
//     else if (num === 0) {
//         console.log("Zero");
//     }
//     else {
//         console.log("Invalid input");
//     }

//     rl.close();
// });

// --------------------------------------------------------

// import readline from 'readline';

// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl2.question('Please enter a number: ', (input) => {
//     let num = Number(input);
//     if (num % 2 === 0) {
//         console.log("Even");
//     } 
//     else {    
//         console.log("Odd");
//     }
//     rl2.close();
// });

// --------------------------------------------------------