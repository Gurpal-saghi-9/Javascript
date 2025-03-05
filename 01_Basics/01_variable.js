const accountID = 11234;
let accountEmail = "Guru@git.com";
var accountPassword = "123456";
accountCity = "Bangalore";
let accountstate;

// accountID = 34567; // Error: Assignment to constant variable.

console.log(accountID); // 11234

accountEmail = "GS@git.com"
accountPassword = "654321"
accountCity = "Mysore"

// console.log(accountEmail); 
// console.log(accountPassword);
// console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountstate]);

