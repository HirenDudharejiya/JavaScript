let arr = [1, 2, 3];
let arr2 = [4, 5];

arr = [...arr, ...arr2];
console.log(arr);

let arry = [1, 2, 3, -1];

console.log(Math.max(...arry));

const stu = {
    id: 1,
    name: 'abc',
};

const user = { ...stu };
console.log(user);

const sum = (a, b, c) => {
    return (a + b + c) / 3
}
let res = sum(...arr)
console.log(res)