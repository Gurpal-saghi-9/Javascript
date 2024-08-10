// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Sat Aug 10 2024 15:57:52 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat Aug 10 2024
// console.log(myDate.toLocaleString()); // 8/10/2024, 3:58:57 PM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 0, 23) // 1/23/2024, 12:00:00 AM
// let myCreatedDate = new Date(2024, 0, 23, 5, 3) // 1/23/2024, 5:03:00 AM
// let myCreatedDate = new Date("2024-01-14") // 1/14/2024, 12:00:00 AM
// let myCreatedDate = new Date("01-14-2024") //1/14/2024, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // 1723305859484
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // 1723305904

let newDate = new Date()
// console.log(newDate); //2024-08-10T16:05:41.424Z
// console.log(newDate.getMonth() + 1); // 8
// console.log(newDate.getDay()); // 6

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})