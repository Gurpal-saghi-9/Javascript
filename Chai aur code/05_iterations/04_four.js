const sbj = {
    JS: 'JavaScript',
    CPP: 'C++',
    Py : "Python",
    Swift: "Swift by apple"
}

for (const key in sbj) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${sbj[key]}`);
}

const code = ["html", "css", "js", "react"]

for (const key in code) {
    // console.log(`${key} : ${code[key]}`);
}

const state = new Map()
state.set("PB", "Punjab")
state.set("HR", "Haryana")
state.set("MP", "Madhya Pradesh")
state.set("HP", "Himachal Pradesh")
state.set("PB", "Punjab")

// for (const key in state) { // Maps is not iterable so not output and also no error
    // console.log(`${key} shortcut of ${state[key]}`);
// }