// const tinderUser = new Object() 
// console.log(tinderUser); // {}

const tinderUser = {}
// console.log(tinderUser); // {}

tinderUser.Id = "123abc"
tinderUser.Name = "Sammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser); // { Id: '123abc', Name: 'Sammy', IsLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gurpal",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser);
/* 
{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'Gurpal', lastname: 'Singh' } }
}
  */

// console.log(regularUser.fullname); // { userfullname: { firstname: 'Gurpal', lastname: 'Singh' } }
// console.log(regularUser.fullname.userfullname); // { firstname: 'Gurpal', lastname: 'Singh' }
// console.log(regularUser.fullname.userfullname.firstname); // Gurpal
// console.log(regularUser.fullname.userfullname.lastname); // Singh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj31 = { obj1, obj2 }
// console.log(obj31); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj32 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj32); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj33 = {...obj1, ...obj2}
// console.log(obj33); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser); // { Id: '123abc', Name: 'Sammy', IsLoggedIn: false }

// console.log(Object.keys(tinderUser)); // [ 'Id', 'Name', 'IsLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'Id', '123abc' ], [ 'Name', 'Sammy' ], [ 'IsLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('IsLoggedIn')); // true

// --------------------------------------------------

const course = {
    courseName: "JavaScript",
    coursePrice: 1000,
    courseDuration: "3 months",
    courseType: "Online",
    courseLanguage: "English",
    courseInstructor: "Gurpal Singh",
}

// course.coursePrice 

const {courseInstructor: Instructor} = course
console.log(Instructor); // Gurpal Singh

// {
//     "name" = "gurpal",
//     "age" = 20,
//     "city" = "Delhi",
//     "country" = "India"
// }

[
    {},
    {},
    {}
]