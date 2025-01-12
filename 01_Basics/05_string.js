const name = "Gurpal"
const repoCount = 50

// console.log(name + repocount + "value")

// console.log(`hello my name is ${name} Singh. My repo count is ${repoCount}`);

//declaration of string
const gameName = new String('Gurpal_GS_com')

// console.log(gameName[0]); // G
// console.log(gameName.__proto__);

// console.log(gameName.length); //13
// console.log(gameName.toUpperCase()); //GURPAL-GS-COM
// console.log(gameName.charAt(2)); // r
// console.log(gameName.indexOf('t')); // -1 

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 10)
// console.log(anotherString); //_GS_

const newStringOne = "   Gurpal    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://www.google.com%20"

console.log(url.replace('%20', '-')) //https://www.google.com-

console.log(url.includes('www')) // true

console.log(gameName.split('_')); // [ 'Gurpal_GS_com' ]