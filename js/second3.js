let a = +prompt('Введите первое число'); 
let b = +prompt('Введите второе число'); 
let c = +prompt('Введите третье число');

// if(a < c && c < b || b < c && c < a){
//     alert('Ваше среднее число ' + с);
// }else if( a < b && b < c || c < b && b < a){
//     alert('Ваше среднее число ' + b);
// }else if( b < a && a < c || c < a && a < b){
//     alert('Ваше среднее число ' + a);
// }else{
//     alert('Вы ввели неправильно');
// } Непонимаю в чем проблема. Непоказывает если ввести сначала 30,2,4

if( a < b && b < c){
    alert('Ваше среднне число ' + b);
}
else if( b < a && a < c){
    alert('Ваше среднее число ' + a);
}
else if( a < c && c < b){
    alert('Ваше среднее число ' + c);
}
else if( c < b && b < a){
    alert('Ваше среднее число ' + b );
}
else if( c < a && a < b ){
    alert('Ваше среднее число ' + a );
}
else if( b < c && c < a ){
    alert('Ваше среднее число ' + c );
}
else{
    alert('Вы ввели неправильно')
}