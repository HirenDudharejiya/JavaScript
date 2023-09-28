//push pop shift unshift delete concat sort reverse splice slice 


// let n = [1, 2, 3, 4, 5]
// let a = n.toString()
// console.log(a, typeof (a))
// let b = n.join('_')
// console.log(b, typeof (b))
// n.pop()

// console.log(n)
// n.push(10)

// console.log(n)
// n.shift()
// console.log(n)

// n.unshift(20)
// console.log(n)


// let arr = [1, 2, 3, 4, 5]

// delete arr[2]
// console.log(arr, arr.length)

// let arr1 = [10, 20, 30, 40, 50]
// let arr2 = ['a', 'b', 'c', 'd', 'e']
// let newarr = array.concat(arr1, arr2)
// console.log(arr)
// console.log(arr1)
// console.log(arr2)
// console.log(newarr)

// let newarr = arr1.concat(arr2)
// console.log(newarr)
// let array = [3, 20, 4, 1, 5] // alphabetically sort as a string
// array.sort()
// console.log(array)

// let compare = (a, b) => {
//     let res = a - b
//     return res
// }
// array.sort(compare)
// console.log(array)

// array.reverse()
// console.log(array)

let arry = [10, 20, 30, 40, 50, 60]

console.log(arry.splice(2, 4, 100, 200, 300))
console.log(arry)

let newarry = console.log(arry.slice(1, 3))
console.log(arry)

console.log(newarry)

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(2));
// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(2));
// console.log("After Changing the arrays");
// console.log(arr);
// console.log(arr2);
