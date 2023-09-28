let a = 16;
let b = 7.5;

let str1 = "Hello";
let str2 = "Javascript";

let x = true;
let y = false;

const date = new Date("2022-03-25");




const marks = ["Eng", "Sci", "Maths"];

// console.log(date);
// console.log(marks);
// console.log(person);
// console.log(person.firstName)
// console.log(typeof (person));
// console.log(typeof (date));
// console.log(typeof (marks));
// console.log(typeof (str1));
// console.log(x);
// console.log(typeof (x));



// const person =
// {
//     firstName: "Keya",
//     lastName: "Parekh",
//     get: function () {
//         console.log(this.firstName)
//     }
// };
// person.get()

let stu = {
    id: 1,
    name: 'abc',
    email: 'abc@gmail.com',
    disp: function () {
        console.log(`Student Details : ${stu['id']} , ${stu['name']} `);
    }
}
stu.disp();  