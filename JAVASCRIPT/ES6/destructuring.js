const [firstName, lastName, website] = [
    "Abc",
    "Xyz",
    "e-Shop"
];

// console.log(firstName);
// console.log(lastName);
// console.log(website);

// let arr = [3, 5, 6, 7, 2, 1, 9]
// let [a, b, ...r] = arr
// console.log(a, b, r)

let { id, name } = { id: 1, name: 'abc' }
console.log(id, name)

let stu = {
    id: 1,
    name: 'abc',
    email: 'abc@gmail.com'
}
const user = { ...stu }
console.log(user)
