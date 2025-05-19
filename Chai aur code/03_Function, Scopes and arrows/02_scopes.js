var c = 500
let a = 300

// {} // scope

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    // console.log("INNER: ", c); // OUTPUT: 500 not showing error because c is decalerd with 'var' it is used in whole code
}

// console.log(a)
// console.log(b) // error because b is in the condition scope
// console.log(c)

function one(){
    const username = "Gurpal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error 

     two()

}

// one()

if (true) {
    const username = "Guru"
    if (username === "Guru") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error



// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}
let res = addTwo(5)
// console.log(res);
