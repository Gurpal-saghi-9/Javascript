// let score = 33
// console.log(typeof score); //number

let score = "33"
// console.log(typeof score); 

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); //33

let val = undefined // if null then output 0, if vl is "33abc" then output NaN
convert = Number(val)
// console.log(convert); //NaN

let bool = true
let change = Number(bool)
// console.log(change); 

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let numLog = 0

let boolLog = Boolean(numLog)
// console.log(boolLog);

let isLoggedIn = "guru"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); //-3

// console.log(2+2); // 4
// console.log(2-2); //0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); //0.66666666
// console.log(2%3); //2

let str1 = "hello"
let str2 = " guru"
let str3 = str1 + str2
// console.log(str3); // hello guru

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true);
// console.log(+"");


let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion