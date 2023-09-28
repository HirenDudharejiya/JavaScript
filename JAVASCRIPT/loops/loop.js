let marks = {
    abc: 40,
    pqr: 50,
    asd: 60
}
// Object using for loop
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log(Object.keys(marks)[i] + " " + marks[Object.keys(marks)[i]])
// }

for (let i in marks) {
    // console.log(i + " " + marks[i])
    console.log(`Marks of ${i}  = ${marks[i]}`)
}

