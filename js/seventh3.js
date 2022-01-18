let arr = [
    {name:"Вася",age:25},
    {name:"Петя",age:30},
    {name:"Маша",age:29}
]

let res = 0
let sum = arr.reduce((item,i) => item + i.age,0 )
let answer = sum / arr.length
console.log(answer);
alert('Зайдите в консоль разработчика');