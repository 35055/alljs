let number = [
    [14,45],
    [1],
    ['a','c','d']
]

let answer = number.sort((item,i) => item.length - i.length)
console.log(answer);
alert('Зайдите в консоль разработчика');