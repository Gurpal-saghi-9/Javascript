//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
console.log(typeof score); // number
const scoreValue = 100.3
console.log(typeof scoreValue); // number

const isLoggedIn = false
console.log(typeof isLoggedIn); //boolean
const outsideTemp = null
console.log(typeof outsideTemp); // object/null
let userEmail;
console.log(typeof userEmail); // undefined

const id = Symbol('123')
console.log(typeof id); //symbol
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n
// console.log(typeof bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj); // object

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction); // fuction

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++

// stacke (primitive), heep(non primimitive )

let myyoutubename = "gurucode.com"
let anothername = myyoutubename;
anothername = "coders_world"

console.log(myyoutubename);
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@vpl"
}

let userTwo =  userOne

userTwo.email = "guru@google.com"

console.log(userOne.email)
console.log(userTwo.email);
