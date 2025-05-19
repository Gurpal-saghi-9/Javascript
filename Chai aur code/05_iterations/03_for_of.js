// for of

// ["","",""]
// [{},{},{}]

const num = [1,2,3,4,5]

res = ""

for (const val of num){
    res = res + " " + val 
}
// console.log(res);

const greeting = "Hello Guru!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);   
}

// Maps

const state = new Map()
state.set("PB", "Punjab")
state.set("HR", "Haryana")
state.set("MP", "Madhya Pradesh")
state.set("HP", "Himachal Pradesh")
state.set("PB", "Punjab")

// console.log(state);

for (const [short, full] of state) {
    // console.log(short, ":-", full);
}

const obj = {
    game1 : "GTA",
    game2 : "Mine Craft"
}

console.log(obj);
// for (const [key, val] of obj) { // obj not iterable
//     console.log(key, ":-", val);
// }