// let score = 33
// console.log(typeof score); //number

let score = "33"
console.log(typeof score); 

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //33

let val = undefined // if null then output 0, if vl is "33abc" then output NaN
convert = Number(val)
console.log(convert); //NaN

let bool = true
let change = Number(bool)
console.log(change); 

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let numLog = 0

let boolLog = Boolean(numLog)
console.log(boolLog);

let isLoggedIn = "guru"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);