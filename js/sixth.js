let mas = []

for(let i = 0; i < Infinity; i++){
    let name = prompt('Введите команду');
    let simple = name.split(', ');
    if(simple[0] == 'add'){
        mas.push(simple[1]);
    }else if(simple[0] == 'del'){
        for(let key in mas){
            mas[key] == simple[1] ? mas.splice(key,1) : '';
            
        }
    }else if (name == 'stop'){
        break;
    }
}console.log(mas);

alert('Зайдите в консоль разработчика');

