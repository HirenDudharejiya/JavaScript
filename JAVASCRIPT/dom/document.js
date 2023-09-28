console.log(document)
let a = document.all
// console.log(a)
console.log(document.body)
// console.log(document.forms[0])
// let a
// Array.from(a).forEach(function (ele) {
//     console.log(ele)
// })

// a = document.links[0].href
// console.log(a)

// Selctors :-
// Single element Selector
// Multi element Selector

// let element = document.getElementById('first')
// console.log(element)
// console.log(element.className)
// console.log(element.childNodes)
// console.log(element.parentNode)
// element.style.color = 'red'
// element.innerText = 'Product added to cart'
// element.innerHTML = '<i>Product added to cart</i>'


// let sel = document.querySelector('#first')
// sel = document.querySelector('.child')
// sel = document.querySelector('b')
// sel = document.querySelector('h2')
// sel.style.color = 'green'
// console.log(sel)

let elements = document.getElementsByClassName('child')
console.log(elements)
elements = document.getElementsByTagName('h2')
elements = document.getElementsByTagName('div')

Array.from(elements).forEach(val => {
    console.log(val)
    val.style.color = 'pink'
})