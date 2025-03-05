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
console.log(LoginUserMessage());          // This will log: "Please enter a username"

