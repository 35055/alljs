let name = prompt('Введите имя');
let year = +prompt('Введите год рождения');
let lastyear = +prompt('Введите нынешний год');

function simple(){
    let mainsimple = (`${name}, Ваш возраст ${lastyear - year}`);
    return mainsimple;
}alert(simple());