let arr = [10, 20, 30]

// const a = arr.map((value, index, array) => {
//     console.log(index, value, array)
//     // console.log(value + 1);
// })

// let search = arr.filter((value) => {
//     return value < 20
// })
// console.log(search)


let products = [{
    id: 1,
    name: 'Smart Watch',
    brand: 'apple',

},
{
    id: 2,
    name: 'Smart Watch',
    brand: 'Samsung',
}
    ,
{
    id: 3,
    name: 'Smart Watch',
    brand: 'Sony',
}
]
console.log(products)

let newfil = products.filter(function (val) {
    return val.brand == 'apple'
});
console.log(newfil)
