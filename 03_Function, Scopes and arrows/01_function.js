function MyName() {
    console.log("G");
    console.log("U");
    console.log("R");
    console.log("P");
    console.log("A");
    console.log("L");
}

// MyName();

function Addition(number1, number2){
    let result = number1 + number2;
    return result;
}

function Addition(number1, number2){
    return number1 + number2;
}
// let sum = Addition(10, 20);
// console.log("Result :", sum);

function Addition(number1, number2){
    console.log("Sum of ", number1, " and ", number2, " is ", number1 + number2);
}
// Addition(30, 20);

function LoginUserMessage(userName) {
    if (!userName) {
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`;
}

// console.log(LoginUserMessage("Gurpal"));  // This will work and log: "Gurpal just logged in"
// console.log(LoginUserMessage());          // This will log: "Please enter a username"

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 700, 800, 1000))

const user = {
    userName: "Gurpal",
    price: 30000,
}

function handleObject(anyobject){
    console.log(`User Name: ${anyobject.userName} and Price: ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     userName: "sam",
//     price: 20000,
// });

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([300, 700, 900, 1100]));