const user = {
    userName: 'John',
    price: 100,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website!`);
        console.log(this);
        /*
        {
            userName: 'John',
            price: 100,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}

// user.welcomeMessage() // John, welcome to website!
// user.userName = "sam"
// user.welcomeMessage() // sam, welcome to website!

// console.log(this); // {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Gurpal"})

// console.log(addTwo(3,4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function (){
    console.log(myArray);
})

myArray.forEach((elem) => console.log(elem));

