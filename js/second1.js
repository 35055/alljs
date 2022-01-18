var age = +prompt('Введите свой возраст');

if(0 < age && age <= 18){
    alert('Вы ещё молоды. Вам нужно учится');
}else if(18 < age && age <= 50){
    alert('Вам нужно работать');
}else if(50 < age && age <= 59){
    alert('Вам скоро на пенсию');
}else if(59 < age && age <= 150){
    alert('Вы пенсионер');
}else{
    alert('Что-то пошло не так');
}