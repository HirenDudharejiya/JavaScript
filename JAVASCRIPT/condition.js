const prompt = require("prompt-sync")({ sigint: true });

let a = prompt("Enter number?")
console.log(typeof (a));
a = Number.parseInt(a);
console.log(typeof (a));