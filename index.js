
//Переменные

const firstName = "Vlad"
const LastName = "Sokol"
let age = 46

console.log(firstName, LastName, `${age} годиков`)

//Операторы
// const flash = prompt("Your name?")
// alert(`My name: ${flash}` )

console.log(`My name: ${firstName}, age: ${age}`)

const y = 5
const x = 15

console.log(y-x)
console.log(y+x)
console.log(y/x)
console.log(y*x)


let k, n, r, oper

k = prompt('Type first number')
n = prompt('Type seond number')
oper = prompt('Type an operator')

if (oper == '+') {
    r = Number(k) + Number(n)
}
if (oper == '-') {
    r = Number(k) - Number(n)
}
if (oper == '/') {
    r = Number(k) / Number(n)
}
if (oper == '*') {
    r = Number(k) * Number(n)
}

alert(`You result is: ${r}`)
