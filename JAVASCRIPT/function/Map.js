const stu = [
    { id: 1, name: "abc", email: 'abc@gmail.com' },
    { id: 2, name: "xyz", email: 'xyz@gmail.com' },
    { id: 3, name: "pqr", email: 'pqr@gmail.com' },
    { id: 4, name: "asd", email: 'asd@gmail.com' },
];

const getDet = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.email = obj.email;
    return newObj;
};

let newArr = stu.map(getDet);
console.log(newArr);






// const Factorial = (num) => {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//         console.log(fact);
//     }

// }
// Factorial(5);
